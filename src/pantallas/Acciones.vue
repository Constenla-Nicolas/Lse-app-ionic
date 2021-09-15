<template>
  <ion-page>
    <ion-content>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
            <img id="imagen" src="../imagenes/acciones/aprender.gif">
            <ion-p id="significa">Significa</ion-p>   
            <div id="significado">
              <ion-p id="nombreColor">Aprender</ion-p>
              <ion-p id="definicion">Adquirir el conocimiento de algo por medio del estudio, el ejercicio, la experiencia o simplemente por uso de la memoria.</ion-p>
            </div>
          </ion-slide>

          <ion-slide>
            <img id="imagen" src="../imagenes/acciones/conocer.gif">
            <ion-p id="significa">SIGNIFICA</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Conocer</ion-p>
              <ion-p id="definicion">Tener información o conocimiento profundos y con experiencia directa sobre algo.</ion-p>
            </div>
          </ion-slide>

          <ion-slide>
            <img id="imagen" src="../imagenes/acciones/enseñar.gif">
            <ion-p id="significa">SIGNIFICA</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Enseñar</ion-p>
              <ion-p id="definicion">Instruir conocimientos, ideas, experiencias, habilidades o hábitos a una persona que no los tiene.</ion-p>
            </div>
          </ion-slide>

          <ion-slide>
            <img id="imagen" src="../imagenes/acciones/saber.gif">
            <ion-p id="significa">Significa</ion-p>    
            <div id="significado">
              <ion-p id="nombreColor">Saber</ion-p>
              <ion-p id="definicion">Conjunto de conocimientos amplios y profundos que se adquieren mediante el estudio o la experiencia.</ion-p>
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