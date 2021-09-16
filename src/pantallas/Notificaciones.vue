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
            HORARIO
            <br>
            <div id=checkbox>
            <label><input type="checkbox" id="cbox1" value="primera_checkbox" style="margin-bottom: 5%"> Diarias</label><br>

            <input type="checkbox" id="cbox2" value="segunda_checkbox" style="margin-bottom: 5%"> <label for="cbox2">Semanales</label><br>

            <input type="checkbox" id="cbox3" value="tercera_checkbox" style="margin-bottom: 5%"> <label for="cbox3">Nunca</label><br>

             </div>
            
            </div>
            <div id="raya"></div>
            <div id="tipo">
            TIPO
            <br> 
            <div id=checkbox>
            <label><input type="checkbox" id="cbox1" value="primera_checkbox" style="margin-bottom: 5% "> Actualizaciones</label><br>

            <input type="checkbox" id="cbox2" value="segunda_checkbox" style="margin-bottom: 5%"> <label for="cbox2">Consejos</label><br>

            <input type="checkbox" id="cbox3" value="tercera_checkbox" style="margin-bottom: 5%"> <label for="cbox3">Recordatorios</label>

            </div>
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
#checkbox{
    color:#E7E40D;
}
#horario{
    margin-left: 4%;
    margin-top: 6%;
    display: block;
    width: 100%;
    height: 40%;
    color: #734299;
    font-size: 25px;
    text-shadow: 1px  0px 0px black,  
               0px  1px 0px black,
              -1px  0px 0px black,
               0px -1px 0px black;

}
#tipo{
    margin-left: 4%;
    margin-top: 2%;
    display: block;
    width: 100%;
    height: 40%;
    font-size: 25px;
    color: #734299;
    text-shadow: 1px  0px 0px black,  
               0px  1px 0px black,
              -1px  0px 0px black,
               0px -1px 0px black;
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
</style>