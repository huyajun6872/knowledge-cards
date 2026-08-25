// 小米 MiMo TTS 代理服务（零依赖，仅用 Node 内置模块）
// 作用：隐藏 API Key，避免浏览器跨域，把小米返回 base64 音频转成可直接播放的音频响应。
// 运行：MIMO_API_KEY=xxx node server/tts-proxy.mjs
// 接口：POST /api/tts  body: { text, voice?, format? }
import http from 'node:http'
import { Buffer } from 'node:buffer'

const PORT = process.env.TTS_PROXY_PORT || 8787
const API_KEY = process.env.MIMO_API_KEY
const MIMO_URL = 'https://api.xiaomimimo.com/v1/chat/completions'

if (!API_KEY) {
  console.error('[tts-proxy] 缺少环境变量 MIMO_API_KEY，请在启动前设置。')
  process.exit(1)
}

const server = http.createServer(async (req, res) => {
  // 简单的 CORS（仅开发用，生产建议由同域前端调用）
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  if (req.method !== 'POST' || req.url !== '/api/tts') {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'not found' }))
    return
  }

  let body = ''
  for await (const chunk of req) body += chunk

  let payload
  try {
    payload = JSON.parse(body || '{}')
  } catch {
    res.writeHead(400, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'invalid json' }))
    return
  }

  const text = (payload.text || '').toString().slice(0, 2000)
  const voice = payload.voice || 'mimo_default'
  const format = payload.format || 'mp3'

  if (!text.trim()) {
    res.writeHead(400, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'empty text' }))
    return
  }

  const mimoBody = {
    model: 'mimo-v2.5-tts',
    messages: [
      { role: 'user', content: '请用自然、亲切的语气朗读以下内容。' },
      { role: 'assistant', content: text },
    ],
    audio: { format, voice },
    stream: false,
  }

  try {
    const upstream = await fetch(MIMO_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
      body: JSON.stringify(mimoBody),
    })

    if (!upstream.ok) {
      const errText = await upstream.text()
      console.error('[tts-proxy] 上游错误', upstream.status, errText)
      res.writeHead(502, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'upstream_error', status: upstream.status }))
      return
    }

    const data = await upstream.json()
    const audioB64 =
      data?.choices?.[0]?.message?.audio?.data ||
      data?.choices?.[0]?.message?.audio?.data
    if (!audioB64) {
      res.writeHead(502, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'no_audio_data', raw: data }))
      return
    }

    const mime = format === 'wav' ? 'audio/wav' : format === 'pcm' ? 'audio/pcm' : 'audio/mpeg'
    const buf = Buffer.from(audioB64, 'base64')
    res.writeHead(200, {
      'Content-Type': mime,
      'Content-Length': buf.length,
      'Cache-Control': 'no-store',
    })
    res.end(buf)
  } catch (e) {
    console.error('[tts-proxy] 异常', e)
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'proxy_exception', message: String(e) }))
  }
})

server.listen(PORT, () => {
  console.log(`[tts-proxy] 已启动: http://localhost:${PORT}/api/tts`)
})
