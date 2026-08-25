import { defineConfig } from 'vite'

// 若部署到 GitHub Pages 子路径，请把 base 改为 '/仓库名/'
export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 5173,
    // 开发时将 /api/tts 代理到本地 MiMo 代理服务（server/tts-proxy.mjs）
    proxy: {
      '/api/tts': {
        target: 'http://localhost:8787',
        changeOrigin: true,
      },
    },
  },
})
