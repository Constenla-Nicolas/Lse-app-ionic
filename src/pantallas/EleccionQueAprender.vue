
<template>

    <ion-page>
        <ion-content>
            <ion-header>
                <ion-toolbar>
                <img id="señalarLogo" src="../imagenes/senialar_texto.png">

                <ion-button id="borgir" router-link="/ajustes" color="none" fill="clear" strong="true">| | |</ion-button>

                </ion-toolbar>
            </ion-header>
            <div class="menuAccesos">
                <ion-button id="boton1" class="menuBotones" router-link="/abecedario">ABECEDARIO</ion-button>
                <ion-button id="boton2" class="menuBotones" router-link="/numeros">NUMEROS</ion-button>
                <ion-button id="boton3" class="menuBotones" router-link="/colores">COLORES</ion-button>
                <ion-button id="boton4" class="menuBotones" router-link="/acciones">ACCIONES</ion-button>
                <ion-button id="boton5" class="menuBotones" router-link="/conceptos">CONCEPTOS</ion-button>
                <ion-button id="volver" class="menuVolver" router-link="/eleccionQueHacer">VOLVER</ion-button>
            </div>
        </ion-content>
    </ion-page>

</template>


<script>

import { IonButton, IonPage, IonContent, IonHeader} from "@ionic/vue";
export default {
     
  
    components: {
        IonButton,
        IonPage,
        IonContent,
        IonHeader,
    }
}
 

</script>
<style scoped> /* estilo */
    #borgir{
        letter-spacing: -4.5px;
        font-size:36px;
        height: 80px;
        width: 40px;
        text-align: center;
        position: fixed;
        margin-top: -1px;
        margin-left: 120px;
        transform: rotate(-90deg);
        --color: black;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
    #señalarLogo{
        width: 43%;
        margin-left: 4%;
    }
    #hamburger{
        width: 12%;
        position: fixed;
        margin-left: 38%;
        margin-top: -1%;
    }

    ion-toolbar{
        box-shadow: 0px -25px 50px black;
    }
    .menuAccesos{
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        padding-top: 28px;
    }
    .menuBotones{
        --background: #E7E40D;
        --border-color: black;
        --border-style: solid;
        --border-width: 2px;
        --color: black;
        text-transform:unset;
        font-size: 36px;
        width: 311px;
        height: 85px;
        --box-shadow: 1px 1px 9px black;
        letter-spacing: 0px;
        margin-bottom: 20px; 
    }
    .menuVolver {
        --background: #FF68E7;
        --border-color: black;
        --border-radius: 50px;
        --border-style: solid;
        --border-width: 2px;
        --color: black;
        text-transform:unset;
        font-size: 36px;
        width: 311px;
        height: 85px;
        --box-shadow: 1px 1px 8px black;
        letter-spacing: 0px
    }
</style>