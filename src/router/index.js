import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import LoginPrincipal from '@/views/LoginPrincipal.vue'
import HomeView from '@/views/HomeView.vue'
import CategoriasView from '@/views/CategoriasView.vue'
import FavoritosView from '@/views/FavoritosView.vue'
import ActualizacionesView from '@/views/ActualizacionesView.vue'
import SearchView from '@/views/SearchView.vue'
import RecetasView from '@/views/RecetasView.vue'
import { authGuard } from './guard'
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
    component: HomeView,
    meta: {requiresAuth: true}
  },
  {
    path: '/Categoria/:nombre',
    name: 'Categoria',
    component: CategoriasView,
    props:true,
    meta: {requiresAuth: true}
  },
  {
    path: '/Favoritos',
    name: 'Favoritos',
    component: FavoritosView,
    meta: {requiresAuth: true}
  },
  {
    path: '/Actualizaciones',
    name: 'Actualizaciones',
    component: ActualizacionesView,
    meta: {requiresAuth: true}
  },
  {
    path: '/Search',
    name: 'Search',
    component: SearchView,
    meta: {requiresAuth: true}
  },
  {
    path: '/Receta',
    name: 'Receta',
    component: RecetasView,
    meta: {requiresAuth: true}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(authGuard);

export default router
