import { createRouter, createWebHistory } from '@ionic/vue-router';
import Bienvenido from '../pantallas/Bienvenido.vue';
import EleccionQueHacer from '../pantallas/EleccionQueHacer.vue';
import EleccionQueAprender from "../pantallas/EleccionQueAprender.vue"
import Abecedario from "../pantallas/Abecedario.vue"

const routes = [
  {
    path: '/',
    redirect: '/bienvenido'
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
    path: '/eleccionQueAprender',
    component: EleccionQueAprender,
  },
  {
    path: '/abecedario',
    component: Abecedario,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
