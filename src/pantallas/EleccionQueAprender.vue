
<template>

    <ion-page>
        <ion-content>
            <ion-header>
                <ion-toolbar>
                <img id="señalarLogo" src="../imagenes/senialar_texto.png">
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

import { IonButton, IonPage, IonContent, IonHeader, IonToolbar} from "@ionic/vue";
export default {
     
  
    components: {
        IonButton,
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
    }
}

</script>
<style scoped> /* estilo */
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
    #contenido{
        position:fixed;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
    }
    #señalarLogo{
        width: 43%;
        margin-left: 4%;
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
        height: 73px;
        --box-shadow: 1px 1px 9px black;
        letter-spacing: 0px;
        margin-bottom: 12px; 
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