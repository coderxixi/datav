import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from "path";

function resolve(dir ){
  return join(__dirname,dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@": resolve('src')
    },
    extensions: ['.vue', '.js','.json']
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        // additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  },

})
