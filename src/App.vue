<template>
  <ion-app>
    <ion-router-outlet />

    <transition name="fade" mode="out-in">
    <router-view :key="$route.path"/>
    </transition>

  </ion-app>
   <div id="app">
     <slider>
       </slider>
       
   <nav class="main-nav">
     <div class="logo">
       my.company
     </div>
   </nav>

 </div>
</template>


<style>
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Slider from "./components/Slider.vue";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Slider,
  }
});




</script>