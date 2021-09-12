<template>
    <ion-page>
        <ion-content>
            <ion-slides pager="true" :options="slideOpts">
                <ion-slide>
                    <h1>Slide 1</h1>
                </ion-slide>
                <ion-slide>
                    <h1>Slide 2</h1>
                </ion-slide>
                <ion-slide>
                    <h1>Slide 3</h1>
                </ion-slide>
            </ion-slides>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonContent, IonSlides, IonSlide} from "@ionic/vue";

import 'swiper/swiper-bundle.min.css';
import '@ionic/vue/css/ionic-swiper.css';

export default {
    components:{
        IonPage,
        IonContent,
        IonSlides,
        IonSlide
        
    },
    setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
};
 
</script>

<style scoped>

    
</style>