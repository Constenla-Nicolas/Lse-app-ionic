<template>
  <ion-page>
    <ion-content>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
            <img id="imagen" src="../imagenes/conceptos/brillante.gif">
            <ion-p id="significa">Significa</ion-p>   
            <div id="significado">
              <ion-p id="nombreColor">Brillante</ion-p>
              <ion-p id="definicion">Algo/alguien el cual presenta un claro resplendor, también es usado para clasificar a una persona inteligente.</ion-p>
            </div>
          </ion-slide>

          <ion-slide>
            <img id="imagen" src="../imagenes/conceptos/claro.gif">
            <ion-p id="significa">SIGNIFICA</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Claro</ion-p>
              <ion-p id="definicion">Luminoso, que tiene mucha luz o que la refleja. Capaz de comprender.</ion-p>
            </div>
          </ion-slide>

          <ion-slide>
            <img id="imagen" src="../imagenes/conceptos/color-es.gif">
            <ion-p id="significa">SIGNIFICA</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Color/es</ion-p>
              <ion-p id="definicion">Impresiones que producen en la vista los rayos de luz reflejados por un cuerpo.</ion-p>
            </div>
          </ion-slide>

          <ion-slide>
            <img id="imagen" src="../imagenes/conceptos/opaco.gif">
            <ion-p id="significa">Significa</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Opaco</ion-p>
              <ion-p id="definicion">Que impide el paso de la luz, poco brillante.</ion-p>
            </div>
          </ion-slide> 
          
        </ion-slides>
        <ion-button id="volver" class="menuVolver" router-link="/eleccionQueAprender">VOLVER</ion-button>
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
    width: 57%;
    height: 40%;
    margin: 5%;
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