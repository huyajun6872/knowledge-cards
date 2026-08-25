import './style.css'
import { cards, categories } from './data.js'

let currentCategory = 'animal'
let currentIndex = 0
let filteredCards = []

// 语音引擎：优先 MiMo 云端 TTS，失败回退浏览器原生
// 注意：前端直连会把 key 暴露给浏览器，仅适合本地/受信环境，生产请改用后端代理
const MIMO_API_KEY = 'sk-ckueazcziqx8sibt5aoe6q1v2ch980a90qa94nxrtlmxl46a'

let cloudBusy = false

function init() {
  renderTabs()
  filterAndRender()
}

function renderTabs() {
  let h = ''
  for (let i = 0; i < categories.length; i++) {
    const c = categories[i]
    const active = c.key === currentCategory ? ' active' : ''
    h += `<button class="tab ${c.tabClass}${active}" data-cat="${c.key}">${c.label}</button>`
  }
  document.getElementById('tabs').innerHTML = h
  document.querySelectorAll('#tabs .tab').forEach((btn) => {
    btn.addEventListener('click', () => switchCategory(btn.dataset.cat))
  })
}

function switchCategory(cat) {
  currentCategory = cat
  currentIndex = 0
  renderTabs()
  filterAndRender()
}

function filterAndRender() {
  filteredCards = cards.filter((card) => card.category === currentCategory)
  renderCard()
  renderDots()
  updateControls()
}

function renderCard() {
  let h = ''
  for (let i = 0; i < filteredCards.length; i++) {
    const card = filteredCards[i]
    const cls =
      i === currentIndex
        ? 'active'
        : i < currentIndex
          ? 'hidden-left'
          : 'hidden-right'
    h += `<div class="card card-${card.category} ${cls}">`
    h += `<button class="card-read-btn" data-index="${i}" title="朗读">🔊</button>`
    h += `<span class="card-tag tag-${card.category}">${card.categoryName}</span>`
    h += `<div class="card-emoji">${card.emoji}</div>`
    h += `<div class="card-title">${card.title}</div>`
    h += `<div class="card-question">${card.question}</div>`
    h += `<div class="card-answer">${card.answer}</div>`
    h += `<div class="card-number">${card.number} / ${cards.length}</div>`
    h += `</div>`
  }
  document.getElementById('cardContainer').innerHTML = h
}

function renderDots() {
  let h = ''
  for (let i = 0; i < filteredCards.length; i++) {
    const active = i === currentIndex ? ` active ${filteredCards[i].category}` : ''
    h += `<span class="dot${active}"></span>`
  }
  document.getElementById('dots').innerHTML = h
}

function updateControls() {
  document.getElementById('prevBtn').disabled = currentIndex === 0
  document.getElementById('nextBtn').disabled =
    currentIndex === filteredCards.length - 1
  document.getElementById('pageInfo').textContent =
    `${currentIndex + 1} / ${filteredCards.length}`
}

function prev() {
  if (currentIndex > 0) {
    currentIndex--
    renderCard()
    renderDots()
    updateControls()
  }
}

function next() {
  if (currentIndex < filteredCards.length - 1) {
    currentIndex++
    renderCard()
    renderDots()
    updateControls()
  }
}

// ---------- 朗读 ----------
function pickVoices() {
  if (!('speechSynthesis' in window)) return []
  return window.speechSynthesis.getVoices() || []
}

function zhVoice() {
  const vs = pickVoices()
  return vs.find((v) => /zh|cmn|Chinese/i.test(v.lang || v.name)) || null
}

function speakLocal(text, lang) {
  if (!('speechSynthesis' in window)) {
    alert('当前浏览器不支持语音朗读')
    return
  }
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang
  const v = lang === 'zh-CN' ? zhVoice() : null
  if (v) u.voice = v
  u.rate = 0.9
  window.speechSynthesis.speak(u)
}

// MiMo TTS 直连：调用小米 MiMo 接口，返回 Base64 音频后用 <audio> 播放
async function speakMiMo(text, btn) {
  if (cloudBusy) return
  const apiKey = MIMO_API_KEY
  const voice = 'mimo_default'
  const statusEl = document.getElementById('ttsStatus')
  const audioPlayer = document.getElementById('audioPlayer')

  cloudBusy = true
  if (btn) {
    btn.textContent = '⏳'
    btn.disabled = true
  }
  statusEl.textContent = '⏳ 正在请求语音合成...'
  audioPlayer.style.display = 'none'

  const payload = {
    model: 'mimo-v2.5-tts',
    messages: [
      { role: 'user', content: '用自然清晰的语气朗读' },
      { role: 'assistant', content: text },
    ],
    audio: { voice, format: 'mp3' },
  }

  try {
    const resp = await fetch('https://api.xiaomimimo.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}))
      throw new Error(`请求失败 (${resp.status}): ${err.message || resp.statusText}`)
    }
    const result = await resp.json()
    const b64 = result.choices?.[0]?.message?.audio?.data
    if (!b64) throw new Error('响应中没有音频数据')

    const byteChars = atob(b64)
    const bytes = new Uint8Array(byteChars.length)
    for (let i = 0; i < byteChars.length; i++) bytes[i] = byteChars.charCodeAt(i)
    const audioBlob = new Blob([bytes], { type: 'audio/mp3' })
    const audioUrl = URL.createObjectURL(audioBlob)

    audioPlayer.src = audioUrl
    audioPlayer.style.display = 'block'
    await audioPlayer.play()
    statusEl.textContent = '✅ 语音合成成功，正在播放'
  } catch (e) {
    console.warn('[MiMo] 调用失败，回退浏览器原生朗读:', e)
    statusEl.textContent = `⚠️ MiMo 失败，使用本地朗读：${e.message}`
    speakLocal(text, 'zh-CN')
  } finally {
    cloudBusy = false
    if (btn) {
      btn.textContent = '🔊'
      btn.disabled = false
    }
  }
}

function readIndex(i) {
  const c = filteredCards[i]
  if (!c) return
  const text = `${c.title}。${c.question} ${c.answer}`.replace(/<[^>]+>/g, ' ')
  const btn = document.querySelector(`.card-read-btn[data-index="${i}"]`)
  speakMiMo(text, btn)
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
})

let touchStartX = 0
document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX
})
document.addEventListener('touchend', (e) => {
  const diff = e.changedTouches[0].clientX - touchStartX
  if (diff > 50) prev()
  else if (diff < -50) next()
})

document.getElementById('prevBtn').addEventListener('click', prev)
document.getElementById('nextBtn').addEventListener('click', next)
document.getElementById('cardContainer').addEventListener('click', (e) => {
  const rb = e.target.closest('.card-read-btn')
  if (rb) readIndex(Number(rb.dataset.index))
})

init()
