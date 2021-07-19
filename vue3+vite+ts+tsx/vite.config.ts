import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vuetsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'
// https://vitejs.dev/config/




export default defineConfig({
  plugins: [vue(), vuetsx(), styleImport({
    libs: [{
      libraryName: 'element-plus',
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => {
        return `element-plus/lib/theme-chalk/${name}.css`;
      },
      resolveComponent: (name) => {
        return `element-plus/lib/${name}`;
      },
    }]
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') //设置 ‘@’指向 ‘src’ 目录
    }
  },
  base: './', //设置打包路径
  server: {
    port: 4000,
    open: true,
    cors: true
  }
})
