import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import axios from "axios";

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

import VueAxios from "vue-axios";

import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Dialog from 'primevue/dialog';

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(Dialog)
app.use(VueAxios,axios);
app.use(pinia)
app.mount('#app')
