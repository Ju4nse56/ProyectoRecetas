import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import LoginPrincipal from '@/views/LoginPrincipal.vue'
import HomeView from '@/views/HomeView.vue'
import CategoriasView from '@/views/CategoriasView.vue'
import FavoritosView from '@/views/FavoritosView.vue'
import ActualizacionesView from '@/views/ActualizacionesView.vue'
import SearchView from '@/views/SearchView.vue'

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
  },
  {
    path: '/Favoritos',
    name: 'Favoritos',
    component: FavoritosView
  },
  {
    path: '/Actualizaciones',
    name: 'Actualizaciones',
    component: ActualizacionesView
  },
  {
    path: '/Search',
    name: 'Search',
    component: SearchView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
