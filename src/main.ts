import { createApp } from 'vue'
import 'tdesign-vue-next/es/style/index.css'
import TDesign from 'tdesign-vue-next'
import App from './App.vue'
import { router } from './router/index'
createApp(App).use(TDesign).use(router).mount('#app')
