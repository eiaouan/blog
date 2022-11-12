import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname,'./src')
    },
      // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  optimizeDeps: {
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js'],
  },
  define: { 'process.env': {} }
})
