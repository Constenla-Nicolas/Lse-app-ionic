<template>
  <ion-app>
    <ion-router-outlet />

    <transition name="fade" mode="out-in">
    <router-view :key="$route.path"/>
    </transition>

  </ion-app>
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

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  }
});




</script>