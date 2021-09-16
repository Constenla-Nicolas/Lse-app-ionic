<template>
  <ion-page>
    <ion-content>
      <div id="barraSuperior">
            <div id="Notificaciones">
                NOTIFICACIONES
            </div>
        </div>
        <div id="horario">
            <br><br>
            HORARIO
            </div>
            <div id="raya"></div>
            <div id="tipo">
                TIPO

            </div>
            <div id="espacioSalvador">
            </div>
            <ion-button id="volver" class="menuVolver" router-link="/Colores">Volver al menu principal</ion-button> <!-- cambiar -->
        
            
        
    </ion-content>
  </ion-page>
</template>

<script>
  import {IonButton, IonPage, IonContent} from "@ionic/vue";

  export default {
    components:{
      IonButton,
      IonPage,
      IonContent,        
    }
  }
</script>

<style scoped>

  @media screen and (max-height: 775px) {
    img{
      width: 70%;
      margin: 0%;
    }
  }
#barraSuperior{
      position:fixed;
      width: 100%;
      height: 8%;
      display: block;
      background-color: #734299;

}
#horario{
    display: block;
    width: 100%;
    height: 40%;
}
#tipo{
    display: block;
    width: 100%;
    height: 40%;
}
#raya{
    display: block;
    background-color: #734299;
    height: 1%;
    width: 100%;
}
#volver{
    --background: #734299;
    --border-color: black;
    --border-radius: 50px;
    --border-style: solid;
    --border-width: 4px;
    --color: #E7E40D;
    text-transform:unset;
    font-size: 20px;
    width: 82%;
    height: 12%;
    --box-shadow: 3px 4px 10px black;
    letter-spacing: 0px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #E7E40D;
    display: block;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
  }
#Notificaciones{
    color:#E7E40D;
    font-size: 25px;
    text-align: center;
    margin-top: 2%;
    text-shadow: 1px  0px 0px black,  
               0px  1px 0px black,
              -1px  0px 0px black,
               0px -1px 0px black;
               
}
#espacioSalvador{
      width: 100%;
      height: 10%;
      z-index: 7;
}
</style>