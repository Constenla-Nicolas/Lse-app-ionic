<template>
  <ion-page>
    <ion-content>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
            <img id="imagen" src="../imagenes/colores/amarillo.gif">
            <ion-p id="significa">SIGNIFICA</ion-p>   
            <div id="significado">
              <ion-p id="nombreColor">AMARILLO</ion-p>
              <ion-p id="definicion">Color como el del oro, la banana, el sol, la yema de huevo. Es el tercer color del espectro solar.</ion-p>
            </div>
            <ion-button id="volver" class="menuVolver" router-link="/eleccionQueAprender">VOLVER</ion-button>
          </ion-slide>
          <ion-slide>
            <img id="imagen" src="../imagenes/colores/gris.gif">
            <ion-p id="significa">SIGNIFICA</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">AMARILLO</ion-p>
              <ion-p id="definicion">Color como el del oro, la banana, el sol, la yema de huevo. Es el tercer color del espectro solar.</ion-p>
           <ion-button id="volver" class="menuVolver" router-link="/eleccionQueAprender">VOLVER</ion-button>
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
    width: 100%;
    height: 100%;
  }
  #imagen{
    border:"20%";
    border:solid;
    border-color:#E7E40D;
    width: auto;
    height: auto;
    margin: 10%;

  }
  
  #significa{
    color: #E7E40D;
    text-transform:unset;
    text-align: center;
    font-size: 40px;
    width: auto;
    height: auto;
    margin-left: 20%;
    margin-right: 20%;
  }
  #significado{
    background-color: #E7E40D;
    width: auto;
    height: auto;
    border-radius: 25px;
    display: block;
    margin-left: 8%;
    margin-right: 8%;
    margin-top: 10%; 
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
    font-size: 25px;
    line-height: 30px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 10%;
  }
</style>