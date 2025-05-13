import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Dialog from 'primevue/dialog';


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(Dialog)
app.mount('#app')
