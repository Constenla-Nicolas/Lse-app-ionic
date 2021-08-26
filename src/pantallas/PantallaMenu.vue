<template>
    <ion-page>
        <ion-content>
            <img id="logo" src="../imagenes/logo_icono.png">
        <div class="Botones">
       
            <ion-button router-link="/transicionVioletaClaro">Estudiar</ion-button>
             <router-view></router-view>
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
    .Botones{
            display: block;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            padding-top: 28px;
    }
    ion-button {
        --background: #E7E40D;
        --border-color: black;
        --border-radius: 50px;
        --border-style: solid;
        --border-width: 2px;
        --color: black;
        text-transform:unset;
        font-size: 36px;
        width: 249px;
        height: 85px;
        --box-shadow: 3px 4px 10px black;
        letter-spacing: 0px;
    }
    #Bienvenido {
        color: #E7E40D;
        font-size: 36px;
    }
    #logo {
        padding-top: 25%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
    }
</style>