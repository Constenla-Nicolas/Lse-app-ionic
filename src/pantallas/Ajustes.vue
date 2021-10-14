<template>
  <ion-page>
    <ion-content>
        <ion-toolbar>
            <div id="Ajustes">
                <img id="tuerca" src="../imagenes/settings.png">
                AJUSTES
            </div>
        </ion-toolbar>



        <div id="opcion">
        <ion-button id="hitbox" color="none" router-link="/Colores">
        </ion-button>
            <div class="titulo" style="margin-bottom: 2%;">
                <img id="hoja" src="../imagenes/hoja.png">
                ESTADISTICAS
            </div>
            
        </div>

            <div id="raya"></div>

            <div id="opcion">
            <ion-button id="hitbox" color="none" router-link="/Notificaciones">
            </ion-button>
                <div class="titulo" style="margin-bottom: 4%;">
                    <img id="notificacion" src="../imagenes/notificacion.png">
                    NOTIFICACIONES
                </div>
            </div>
            
            <div id="raya"></div>

            <div id="opcion">
                <ion-button id="hitbox" color="none" router-link="/Colores">
            </ion-button>
                <div class="titulo" style="margin-bottom: 4.2%;">
                    <img id="ayuda" src="../imagenes/question_mark.png">
                    AYUDA
                </div>
            </div>
            <div id="raya"></div>
            <ion-button id="volver" class="menuVolver"  router-link="/EleccionQueHacer">VOLVER AL MENU <br> PRINCIPAL</ion-button> <!-- cambiar -->
        
            
        
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
  input[type=checkbox] {
    transform: scale(2.5) translateY(-2px);
}
input[type=radio] {
        transform: scale(2.5) translateY(-2px);
}
    ion-toolbar{
        box-shadow: 0px -2px 25px black;
        --background: #AA60E2;
        height: 70px;
    }
    ion-content{
         --background: #AA60E2;
    }
#hitbox{
    width: 103.5%;
    height: 9%;
    margin-top: -1.1%;
    margin-left: -14px;
    position: fixed;
    --border-radius: 0px;
}
#tuerca{
    height: 13%;
    width: 12.3%;
    position: relative;
    margin-bottom: -6px;
    margin-top: 11px;
    margin-right: -5px;
}
#hoja{
    height: 12%;
    width: 12%;
    position: relative;
    margin-bottom: -12px;
    margin-right: -5px;
}
#ayuda{
    height: 13%;
    width: 12.3%;
    position: relative;
    margin-top: 2px;
    margin-bottom: -10px;
    margin-right: -5px;
}
#notificacion{
    height: 12%;
    width: 12%;
    position: relative;
    margin-bottom: -6px;
    margin-right: -5px;
}
#barraSuperior{
      position:fixed;
      width: 100%;
      height: 8%;
      display: block;
      background-color: #AA60E2;

}
.titulo{
 color: #553071;
  font-size: 32px;
margin-left: -1%;
}
#opcion{
    margin-left: 4%;
    margin-top: 7px;
}
#raya{
    display: block;
    background-color: #553071;
    height: 3px;
    width: 100%;
}
#volver{
    margin-top: 80%;
    --background: #553071;
    --border-color: black;
    --border-radius: 50px;
    --border-style: solid;
    --border-width: 4px;
    --color: #E7E40D;
    font-size: 23px;
    width: 314px;
    height: 62px;
    --box-shadow: 3px 4px 10px black;
    letter-spacing: 1px;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: #E7E40D;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
#Ajustes{
    color:#553071;
    font-size: 46px;
    text-align: center;
    margin-top: 0.7%;
    /* offset-x | offset-y | blur-radius | color */
    -webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #553071;
               
}
</style>