import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/router.js'
import './style.scss'


const app = createApp(App)

app.use(router);

app.mount('#app');
