<template>
    <ion-page>
        <ion-content>
            <div id="contenedorTexto">
                <p id="textoArriba"> PRESIONE UNA LETRA </p>
            </div>

            <div id="bordecito">
            </div>
            <div id="espacioSalvador">
            </div>

            <div class="contenido" id = "arca">
            <ion-button  @click="showImg('./img/A.6de99f95.jpg')" class="botonLetra" id="buttonA">A</ion-button>
            <ion-button @click="showImg('./img/B.479c9319.jpg')" class="botonLetra" id="buttonB">B</ion-button>
            <ion-button @click="showImg('./img/C.098fe73c.jpg')" class="botonLetra" id="buttonC">C</ion-button>
            <ion-button @click="showImg('./img/D.8c078d10.jpg')" class="botonLetra" id="buttonD">D</ion-button>
            <ion-button @click="showImg('./img/E.eb9a7d2f.jpg')" class="botonLetra" id="buttonE">E</ion-button>
            <ion-button @click="showImg('./img/F.6d72d419.jpg')" class="botonLetra" id="buttonF">F</ion-button>
            <ion-button @click="showImg('data:image/jpeg;base64,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')" class="botonLetra" id="buttonG">G</ion-button>
            <ion-button @click="showImg('./img/H.bccb026f.gif')" class="botonLetra" id="buttonH">H</ion-button>
            <ion-button @click="showImg('./img/I.3dbac220.jpg')" class="botonLetra" id="buttonI">I</ion-button>
            <ion-button @click="showImg('./img/J.3d3b66ff.gif')" class="botonLetra" id="buttonJ">J</ion-button>
            <ion-button @click="showImg('./img/K.3e1ff2c7.jpg')" class="botonLetra" id="buttonK">K</ion-button>
            <ion-button @click="showImg('./img/L.29d04938.jpg')" class="botonLetra" id="buttonL">L</ion-button>
            <ion-button @click="showImg('./img/LL.718dfd67.gif')" class="botonLetra" id="buttonLL">LL</ion-button>
            <ion-button @click="showImg('./img/M.29601508.jpg')" class="botonLetra" id="buttonM">M</ion-button>
            <ion-button @click="showImg('./img/N.4ebb49b8.jpg')" class="botonLetra" id="buttonN">N</ion-button>
            <ion-button @click="showImg('./img/Ñ.a4921fe7.jpg')" class="botonLetra" id="buttonÑ">Ñ</ion-button>
            <ion-button @click="showImg('./img/O.91f1e49a.jpg')" class="botonLetra" id="buttonO">O</ion-button>
            <ion-button @click="showImg('./img/P.56dc32cb.jpg')" class="botonLetra" id="buttonP">P</ion-button>
            <ion-button @click="showImg('./img/Q.127f1c5d.jpg')" class="botonLetra" id="buttonQ">Q</ion-button>
            <ion-button @click="showImg('./img/R.b316fbeb.jpg')" class="botonLetra" id="buttonR">R</ion-button>
            <ion-button @click="showImg('./img/S.ecc75314.jpg')" class="botonLetra" id="buttonS">S</ion-button>
            <ion-button @click="showImg('data:image/jpeg;base64,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')" class="botonLetra" id="buttonT">T</ion-button>
            <ion-button @click="showImg('./img/U.d03ebf71.jpg')" class="botonLetra" id="buttonU">U</ion-button>
            <ion-button @click="showImg('./img/V.544955da.jpg')" class="botonLetra" id="buttonV">V</ion-button>
            <ion-button @click="showImg('./img/W.03292116.jpg')" class="botonLetra" id="buttonW">W</ion-button>
            <ion-button @click="showImg('./img/X.59f05494.jpg')" class="botonLetra" id="buttonX">X</ion-button>
            <ion-button @click="showImg('./img/Y.75dba737.jpg')" class="botonLetra" id="buttonY">Y</ion-button>
            <ion-button @click="showImg('./img/Z.cbef9771.gif')" class="botonLetra" id="buttonZ">Z</ion-button>
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
            </div>


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
        VueEasyLightbox
    },
    

 data() {
      return {
        visible: false,
        index: 0, // default: 0
        imgs: ''
      }
    },
    methods: {
      showImg(imagenlink) {
          if (cache==imagenlink)
           console.log(imagenlink)
          this.imgs = imagenlink
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
    }
    
}
  const cache ={};

function importAll(r){
    r.keys().forEach((key)=>(cache[key]=r(key)));
}

importAll(require.context('../imagenes/letras',true, /\.gif$/));

console.log(cache)
</script>

<style scoped> /* estilo */
#letraImagen {
    display: block;
    width: 55%;
    margin-left: auto;
    margin-right: auto;
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
      height: 15%;
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
      height: 16%;
      z-index: 8;
}
#espacioSalvador{
      width: 100%;
      height: 15%;
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
#botonZoom{
    width: 15%;
    margin-top: 55
    0px;
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
</style>

