import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
//create app...
const app = createApp(App)

//....configure App...
//... to use pinia store
const pinia = createPinia()
app.use(pinia)

//...mount(load) configured app in browser
app.mount