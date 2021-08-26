import { createRouter, createWebHistory } from '@ionic/vue-router';
import Bienvenido from '../pantallas/Bienvenido.vue';
import EleccionQueHacer from '../pantallas/EleccionQueHacer.vue';
import TransicionVioletaClaro from '../pantallas/TransicionVioletaClaro.vue';
import EleccionQueAprender from "../pantallas/EleccionQueAprender.vue"

const routes = [
  {
    path: '/',
    redirect: '/eleccionQueAprender'
  },
  {
    path: '/bienvenido',
    component: Bienvenido,
  },
  {
    path: '/eleccionQueHacer',
    component: EleccionQueHacer,
  },
  {
    path: '/transicionVioletaClaro',
    component: TransicionVioletaClaro,
  },
  {
    path: '/eleccionQueAprender',
    component: EleccionQueAprender,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
