import { createRouter, createWebHistory } from '@ionic/vue-router';
import Bienvenido from '../pantallas/Bienvenido.vue';
import EleccionQueHacer from '../pantallas/EleccionQueHacer.vue';
import EleccionQueAprender from "../pantallas/EleccionQueAprender.vue"
import Abecedario from "../pantallas/Abecedario.vue"
import Numeros from "../pantallas/Numeros.vue"
import Colores from "../pantallas/Colores.vue"
import Acciones from "../pantallas/Acciones.vue"
import Conceptos from "../pantallas/Conceptos.vue"


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
  {
    path: '/numeros',
    component: Numeros,
  },
  {
    path: '/colores',
    component: Colores,
  },
  {
    path: '/acciones',
    component: Acciones,
  },
  {
    path: '/conceptos',
    component: Conceptos,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
