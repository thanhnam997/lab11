import { createPinia } from 'Pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
//create app...
const app = createApp(App)

//....configure App...
//... to use pinia store
const pinia = createPinia()
app.use(pinia)

//...mount(load) configured app in browser
app.mount