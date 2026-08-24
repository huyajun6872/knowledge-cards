import { defineConfig } from 'vite'

// 若部署到 GitHub Pages 子路径，请把 base 改为 '/仓库名/'
export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 5173
  }
})
