<template>
    
<ion-menu side="start" menuId="first" id="menuTransp">

</ion-menu>

<ion-menu side="end" type="push" id="menuVisible">

  <ion-header>
    <ion-toolbar id="ajustesToolbar">
      <ion-title>AJUSTES</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
      <ion-item>Ajustes</ion-item>
      <ion-item>Mi cuenta</ion-item>
      <ion-item>Usuarios</ion-item>
      <ion-item>Vídeos</ion-item>
      <ion-item>Publicaciones</ion-item>
    </ion-list>
  </ion-content>

</ion-menu>


<ion-router-outlet main></ion-router-outlet>
<ion-page>
        <ion-content>
            <ion-header>
                <ion-toolbar>
                <img id="señalarLogo" src="../imagenes/senialar_texto.png">
                <div id="hamburger" @click="openEnd()" >
                    <img  src="../imagenes/Hamburger.png">
                </div>
                
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
<style>
#ajustesToolbar{
    --background: #AA60E2;
}
.my-custom-menu {
  --width: 500px;
}
#menuTransp{
    z-index: 9;
}
#menuVisible{
    z-index: 10;
}
</style>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  IonTitle, 
  IonToolbar,

  menuController
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {

    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonRouterOutlet,
    IonTitle, 
    IonToolbar
  },
  methods: {
    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    openEnd() {
      menuController.open('end');
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    }
  }
});
</script>

<style scoped> /* estilo */
    #señalarLogo{
        width: 43%;
        margin-left: 4%;
    }
    #hamburger{
        width: 12%;
        margin-top: -10%;
        margin-left: 85%;
        position: fixed;
        background-color: red;
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