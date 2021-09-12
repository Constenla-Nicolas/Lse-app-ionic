<template>
    <ion-page>
        <ion-content>
            <ion-slides ref="slides">
              <ion-slide>
                <img id="imagen" src="../imagenes/logo_icono.png">
                <ion-p id="significa">SIGNIFICA</ion-p>
                
                <div id="significado">
                      <ion-p id="nombreColor">AMARILLO</ion-p>
                      <ion-p id="definicion">Color como el del oro, la banana, el sol, la yema de huevo. Es el tercer color del espectro solar.</ion-p>
                </div>

              </ion-slide>
              <ion-slide>
                <img src="../imagenes/logo_icono.png">
              </ion-slide>
            </ion-slides>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonContent, IonSlides, IonSlide} from "@ionic/vue";


export default {
    components:{
        IonPage,
        IonContent,
        IonSlide,
        IonSlides,        
    },
    methods: {    
      goTo(slideIndex) {      
        // permite arrastrar la pantalla
        this.$refs.slides.slideTo(slideIndex);
      }
    },
}
</script>

<style scoped>
#imagen{
    border: yellow;
    width: 248px;
    height: 257px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 12%;
    margin-bottom: 12px;
}
#significa{
    color: #E7E40D;
    text-transform:unset;
    font-size: 36px;
    width: 246px;
    height: 70px;
    letter-spacing: 0px;
    margin-bottom: 12px; 
}
#significado{
    background-color: #E7E40D;
    width: 309px;
    height: 187px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
#nombreColor{
    color: #553071;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 12px;
}
#definicion{
    color: #553071;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
</style>