import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Import Pinia

const app = createApp(App);

// Initialize Pinia
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
