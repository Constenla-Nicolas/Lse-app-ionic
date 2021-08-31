import { createRouter, createWebHistory } from '@ionic/vue-router';
import Bienvenido from '../pantallas/Bienvenido.vue';
import EleccionQueHacer from '../pantallas/EleccionQueHacer.vue';
import TransicionVioletaClaro from '../pantallas/TransicionVioletaClaro.vue';
import EleccionQueAprender from "../pantallas/EleccionQueAprender.vue"
import Abecedario from "../pantallas/pantallas_aprender/Abecedario.vue"
import Numeros from "../pantallas/pantallas_aprender/Numeros.vue"
import Colores from "../pantallas/pantallas_aprender/Colores.vue"
import Acciones from "../pantallas/pantallas_aprender/Acciones.vue"
import Conceptos from "../pantallas/pantallas_aprender/Conceptos.vue"


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
    path: '/transicionVioletaClaro',
    component: TransicionVioletaClaro,
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
