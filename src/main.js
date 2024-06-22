import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia";

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.mount('#app')
