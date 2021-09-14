<template>
  <ion-page>
    <ion-content>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
            <img id="imagen" src="../imagenes/logo_icono.png">
            <ion-p id="significa">SIGNIFICA</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">AMARILLO</ion-p>
              <ion-p id="definicion">Color como el del oro, la banana, el sol, la yema de huevo. Es el tercer color del espectro solar.</ion-p>
              
            </div>
            <ion-button id="volver" class="menuVolver" router-link="/eleccionQueAprender">VOLVER</ion-button>
          </ion-slide>
          <ion-slide>
            <img id="imagen" src="../imagenes/logo_icono.png">
            <ion-p id="significa">SIGNIFICA</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">AMARILLO</ion-p>
              <ion-p id="definicion">Color como el del oro, la banana, el sol, la yema de huevo. Es el tercer color del espectro solar.</ion-p>
            </div>
          </ion-slide>
          
        </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script>
  import {IonButton, IonPage, IonContent, IonSlides, IonSlide} from "@ionic/vue";

  export default {
      components:{
          IonButton,
          IonPage,
          IonContent,
          IonSlide,
          IonSlides,        
      },
      setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    return { slideOpts }
  }
  }
</script>

<style scoped>
  ion-slide{
    display: block;
    width: 500px;
    height: 800px;
  }
  #imagen{
      border: yellow;
      width: 248px;
      height: 257px;
      padding: 20px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      margin-top: 12%;
      margin-bottom: 12px;
  }
  #significa{
      color: #E7E40D;
      text-transform:unset;
      text-align: center;
      padding: auto;
      font-size: 40px;
      width: 246px;
      height: 70px;
      letter-spacing: 0px;
      margin-bottom:20px; 
  }
  #significado{
      background-color: #E7E40D;
      width: 309px;
      height: 187px;
      border-radius: 25px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
  }
  #nombreColor{
      color: #553071;
      font-size: 40px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      margin-bottom: 12px;
  }
  #definicion{
      color: #553071;
      display: block;
      text-align: justify;
      line-height: 30px;
      margin-left:30px;
      margin-right:30px;
  }
</style>