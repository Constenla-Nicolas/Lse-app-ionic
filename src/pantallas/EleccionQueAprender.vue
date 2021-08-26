<template>
    <ion-page>
        <ion-content>
            <div class="menuBotones">
                <ion-button id="botonA">ABECEDARIO</ion-button>
                <ion-button id="botonA">NUMEROS</ion-button>
                <ion-button id="botonA">COLORES</ion-button>
                <ion-button id="botonA">ACCIONES</ion-button>
                <ion-button id="botonA">CONCEPTOS</ion-button>
                <ion-button id="botonV" router-link="/EleccionQueHacer">VOLVER</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonButton, IonPage, IonContent} from "@ionic/vue";
export default {
    components: {
        IonButton,
        IonPage,
        IonContent,
    }
}

</script>
<style scoped> /* estilo */
    .menuBotones{
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        padding-top: 28px;
    }
    #botonA {
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
    #botonV {
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