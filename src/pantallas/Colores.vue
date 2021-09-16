<template>
  <ion-page>
    <ion-content>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
            <img id="imagen" src="../imagenes/colores/amarillo.gif">
            <ion-p id="significa">Significa</ion-p>   
            <div id="significado">
              <ion-p id="nombreColor">Amarillo</ion-p>
              <ion-p id="definicion">Color como el del oro, la banana, el sol, la yema de huevo. Es el tercer color del espectro solar.</ion-p>
            </div>
          </ion-slide>

          <ion-slide>
            <img id="imagen" src="../imagenes/colores/verde.gif">
            <ion-p id="significa">SIGNIFICA</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Verde</ion-p>
              <ion-p id="definicion">Color secundario, como el pasto, la lechuga y las hojas de los arboles</ion-p>
            </div>
          </ion-slide>

          <ion-slide>
            <img id="imagen" src="../imagenes/colores/rosa.gif">
            <ion-p id="significa">SIGNIFICA</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Rosa</ion-p>
              <ion-p id="definicion">Este color que se forma con rojo y blanco, los chanchos y algunas flores tienen este color</ion-p>
            </div>
          </ion-slide>

          <ion-slide>
            <img id="imagen" src="../imagenes/colores/gris.gif">
            <ion-p id="significa">Significa</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Gris</ion-p>
              <ion-p id="definicion">Color como el del acero, el cemento o la piel de los elefantes.</ion-p>
            </div>
          </ion-slide> 

          <ion-slide>
            <img id="imagen" src="../imagenes/colores/gris.gif">
            <ion-p id="significa">Significa</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Gris</ion-p>
              <ion-p id="definicion">Color como el del acero, el cemento o la piel de los elefantes.</ion-p>
            </div>
          </ion-slide> 
          
        </ion-slides>
        <ion-button id="volver" class="menuVolver" router-link="/eleccionQueAprender">VOLVER</ion-button>
        <ion-button id="testearNotificaciones" class="menuVolver" router-link="/Notificaciones">TestearNotis</ion-button>
    
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
  ion-slides{
    --bullet-background: #55307100;
    --bullet-background-active: #55307100;
  }
  #imagen{
    border:"20%";
    border:solid;
    border-color:#E7E40D;
    width: 60%;
    height: 50%;
    margin: 10%;
  }
  #significa{
    color: #E7E40D;
    text-transform: uppercase;
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
    margin-top: 6%;
    margin-bottom: 6%; 
  }
  #nombreColor{
    color: #553071;
    font-size: 40px;
    text-transform: uppercase;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 2%;
  }
  #definicion{
    color: #553071;
    display: block;
    text-align: justify;
    font-size: 20px;
    padding: 5%;
  }
  #volver{
    --background: #734299;
    --border-color: black;
    --border-radius: 50px;
    --border-style: solid;
    --border-width: 4px;
    --color: #E7E40D;
    text-transform:unset;
    font-size: 36px;
    width: auto;
    height: auto;
    --box-shadow: 3px 4px 10px black;
    letter-spacing: 0px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #E7E40D;
    display: block;
    margin-left: 20%;
    margin-right: 20%;
    text-align: center;
  }

  @media screen and (max-height: 775px) {
    img{
      width: 70%;
      margin: 0%;
    }
  }
</style>