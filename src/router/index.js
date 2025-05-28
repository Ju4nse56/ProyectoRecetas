import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import LoginPrincipal from '@/views/LoginPrincipal.vue'
import HomeView from '@/views/HomeView.vue'
import CategoriasView from '@/views/CategoriasView.vue'
import FavoritosView from '@/views/FavoritosView.vue'
import ActualizacionesView from '@/views/ActualizacionesView.vue'
import SearchView from '@/views/SearchView.vue'
import RecetasView from '@/views/RecetasView.vue'
import BuscadorExample from '@/views/views-tests/BuscadorExample.vue'
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
    path: '/Categoria/:nombre',
    name: 'Categoria',
    component: CategoriasView,
    props:true,
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
  },
  {
    path: '/Receta',
    name: 'Receta',
    component: RecetasView
  },
  {
    path: '/Example',
    name: 'search',
    component: BuscadorExample
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
