import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import LoginPrincipal from '@/views/LoginPrincipal.vue'
import HomeView from '@/views/HomeView.vue'
import CategoriasView from '@/views/CategoriasView.vue'

const routes = [
  {
    
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/LoginPrincipal',
    name: 'login',
    component: LoginPrincipal
  },

  {
    path: '/HomeView',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Categoria/:tipo',
    name: 'Categoria',
    component: CategoriasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
