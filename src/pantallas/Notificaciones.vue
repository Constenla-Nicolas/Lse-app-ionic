<template>
  <ion-page>
    <ion-content>
      <div id="barraSuperior">
            <div id="Notificaciones">
                NOTIFICACIONES
            </div>
        </div>
        <div id="horario">
            <br>
            <div class="titulo" style="margin-bottom: 2%;">
                HORARIO
            </div>
            <div id=checkbox>
            <div>
            <input type="radio" id="cbox1" name="r1" value="Diarias" style="margin-bottom: 5%; margin-left: 5px;">
            <label for="Diarias"> Diarias</label>
            </div>
            <div>
            <input type="radio" id="cbox2" name="r1" value="Semanales" style="margin-bottom: 5%; margin-left: 5px;">
            <label for="Semanales"> Semanales</label>
            </div>
            <div>
            <input type="radio" id="cbox3" name="r1" value="Nunca" style="margin-bottom: 5%;  margin-left: 5px;">
            <label for="Nunca"> Nunca</label>
            </div>

             </div>
            
            </div>
            <div id="raya"></div>
            <div id="tipo">
            <div class="titulo" style="margin-bottom: 2%;">
                TIPO
            </div>
            <div id=checkbox>
            <label><input type="checkbox" id="cbox1" value="primera_checkbox" style="margin-bottom: 5%; margin-left: 5px;"> Actualizaciones</label><br>

            <input type="checkbox" id="cbox2" value="segunda_checkbox" style="margin-bottom: 5%; margin-left: 5px;"> <label for="cbox2">Consejos</label><br>

            <input type="checkbox" id="cbox3" value="tercera_checkbox" style="margin-bottom: 5%; margin-left: 5px;"> <label for="cbox3">Recordatorios</label>

            </div>
            </div>
            <ion-button id="volver" class="menuVolver" @click="$router.go(-1)">VOLVER AL MENU <br> PRINCIPAL</ion-button> <!-- cambiar -->
        
            
        
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
#barraSuperior{
      position:fixed;
      width: 100%;
      height: 8%;
      display: block;
      background-color: #AA60E2;

}
#checkbox{
    color:#E7E40D;
}
.titulo{
  color: #AA60E2;
  font-size: 36px;
      text-shadow: 1px 3px 7px black;
    -webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #AA60E2;
margin-left: -1%;
}
#horario{
    margin-left: 4%;
    margin-top: 6%;
    display: block;
    width: 100%;
    height: 40%;
    color: #734299;
    font-size: 36px;
}
#tipo{
    margin-left: 4%;
    margin-top: 2%;
    margin-bottom: -5%;
    display: block;
    width: 100%;
    height: 40%;
    color: #AA60E2;
    font-size: 36px;
}
#raya{
    display: block;
    background-color: #AA60E2;
    height: 3px;
    width: 100%;
}
#volver{
    --background: #AA60E2;
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
#Notificaciones{
    color:#E7E40D;
    font-size: 36px;
    text-align: center;
    margin-top: 0.7%;
    /* offset-x | offset-y | blur-radius | color */
    text-shadow: 1px 3px 7px black;
    -webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #E7E40D;
               
}
</style>