import { createApp } from 'vue'
import "@/assets/globa.less"
import App from './App.vue'
import { installComp } from "@/components"
createApp(App).use(installComp).mount('#app')
