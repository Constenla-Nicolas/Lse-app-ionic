<template>
    <ion-page>
        <ion-content>
           <div id="contenedorTexto">
                <p id="textoArriba"> PRESIONE UN NUMERO </p>
            </div>
            <div id="bordecito">
            </div>
            <div id="espacioSalvador">
            </div>
     
            <div class="contenido" id = "arca">
            
           <ion-button class="botonLetra" @click="showImg('https://fondosmil.com/fondo/17051.jpg')" id="buttonC">A</ion-button>
            <ion-button class="botonLetra" id="buttonB"  @click="showImg()" rel="imagenes/letras/A.png">B</ion-button>
            <ion-button class="botonLetra" @click="showImg('../imagenes/letras/B.jpg')" id="buttonC">C</ion-button>
            <ion-button class="botonLetra" id="buttonD">D</ion-button>
            <ion-button class="botonLetra" id="buttonE">E</ion-button>
            <ion-button class="botonLetra" id="buttonF">F</ion-button>
            <ion-button class="botonLetra" id="buttonG">G</ion-button>
            <ion-button class="botonLetra" id="buttonH">H</ion-button>
            <ion-button class="botonLetra" id="buttonI">I</ion-button>
            <ion-button class="botonLetra" id="buttonJ">J</ion-button>
            <ion-button class="botonLetra" id="buttonK">K</ion-button>
            <ion-button class="botonLetra" id="buttonL">L</ion-button>
            <ion-button class="botonLetra" id="buttonLL">LL</ion-button>
            <ion-button class="botonLetra" id="buttonM">M</ion-button>
            <ion-button class="botonLetra" id="buttonN">N</ion-button>
            <ion-button class="botonLetra" id="buttonÑ">Ñ</ion-button>
            <ion-button class="botonLetra" id="buttonO">O</ion-button>
            <ion-button class="botonLetra" id="buttonP">P</ion-button>
            <ion-button class="botonLetra" id="buttonQ">Q</ion-button>
            <ion-button class="botonLetra" id="buttonR">R</ion-button>
            <ion-button class="botonLetra" id="buttonS">S</ion-button>
            <ion-button class="botonLetra" id="buttonT">T</ion-button>
            <ion-button class="botonLetra" id="buttonU">U</ion-button>
            <ion-button class="botonLetra" id="buttonV">V</ion-button>
            <ion-button class="botonLetra" id="buttonX">X</ion-button>
            <ion-button class="botonLetra" id="buttonY">Y</ion-button>
            <ion-button class="botonLetra" id="buttonZ">Z</ion-button>
            </div>
<vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    >
    <template v-slot:toolbar="{ toolbarMethods }">
    <button id="botonZoom" @click="toolbarMethods.zoomIn">
         <img id="zoom" src="../imagenes/zoomIn.png">
    </button>
    <button id="botonZoom" @click="toolbarMethods.zoomOut">
         <img id="zoom" src="../imagenes/zoomOut.png">
    </button>
  </template>
    </vue-easy-lightbox>
            <div id="footer">
            </div>
            <div id="footerBorde">
            </div>
            <div id="footerSalvador">
                <ion-button id="volver" router-link="/eleccionQueAprender">VOLVER</ion-button>
                 <router-view></router-view>
            </div>

        </ion-content>  
    </ion-page>
</template>
 
<script >
import { IonButton, IonPage, IonContent} from "@ionic/vue";
 import VueEasyLightbox from 'vue-easy-lightbox';
 
 
export default {
    components: {
        IonButton,
        IonPage,
        IonContent,
        VueEasyLightbox,
    },
   
    
 data() {
      return {
        visible: false,
        index: 0, // default: 0
        imgs: ''
      }
    },
    methods: {
      showImg(image) {
        this.imgs = image
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
    }
    
}
 
</script>

<style scoped> /* estilo */
#letraImagen {
    display: block;
    width: 55%;
    margin-left: auto;
    margin-right: auto;
}
#botonZoom{
    width: 15%;
    margin-right: -8%;
    margin-left: 25%;
    margin-top: 140%;
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
        width: 314px;
        height: 62px;
        --box-shadow: 3px 4px 10px black;
        letter-spacing: 0px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #E7E40D;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
}
#footer{
    width: 100%;
    height: 1%;
    background-color: #E7E40D;
}
#textoArriba{
      color: #E7E40D;
        text-transform:unset;
        font-size: 36px;
        width: 314px;
        height: 62px;
        --box-shadow: 3px 4px 10px black;
        letter-spacing: 1px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #E7E40D;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: 6px;
}
#footerBorde{
    width: 100%;
}
#contenedorTexto{
      background-color: #553071;
      position:fixed;
      width: 100%;
      height: 12%;
      z-index: 9;
}
#cuadroAmarillo{
    background-color: #E7E40D;
     width: 70%;
      height: 70%;
    z-index: 10;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12%;
    text-align: center;
}
#bordecito{
    background-color: #E7E40D;
    position:fixed;
      width: 100%;
      height: 13%;
      z-index: 8;
}
#espacioSalvador{
      width: 100%;
      height: 13%;
      z-index: 7;
}
.botonLetra{
    --background: #FF68E7;
        --border-radius: 25px;
        --color: #553071;
        text-transform:unset;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #553071;
        font-size: 36px;
        width: 95px;
        height: 75px;
        --box-shadow: 1px 1px 9px black;
        letter-spacing: 0px;
        margin-bottom: 10px; 
        margin-left: 10px;
        margin-top: 10px; 
        margin-right: 10px;
}
.contenido{
        display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    text-align: center;
}
</style>

