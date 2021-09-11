<template>
  <ion-app>
    <ion-router-outlet />

    <transition name="fade" mode="out-in">
    <router-view :key="$route.path"/>
    </transition>

  </ion-app>
   <div id="app">
   <nav class="main-nav">
     <div class="logo">
       my.company
     </div>
   </nav>

 </div>
</template>

<style>
html {
   height: 100%;
   overflow:hidden;
 }

 body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;
   background: rgb(101,31,87);
   background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
 }

 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Lato'
 }

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>

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