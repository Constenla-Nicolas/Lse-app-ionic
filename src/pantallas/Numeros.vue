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
            <ion-button  @click="showImg('./img/0.e8729eff.png')" class="botonLetra" id="buttonA">0</ion-button>
            <ion-button @click="showImg('./img/1.ab977946.png')" class="botonLetra" id="buttonB">1</ion-button>
            <ion-button @click="showImg('./img/2.7884e7b0.png')" class="botonLetra" id="buttonC">2</ion-button>
            <ion-button @click="showImg('./img/3.53324cee.png')" class="botonLetra" id="buttonD">3</ion-button>
            <ion-button @click="showImg('./img/4.888e5639.png')" class="botonLetra" id="buttonE">4</ion-button>
            <ion-button @click="showImg('./img/5.30d90a8d.png')" class="botonLetra" id="buttonF">5</ion-button>
            <ion-button @click="showImg('./img/6.379147e9.gif')" class="botonLetra" id="buttonG">6</ion-button>
            <ion-button @click="showImg('./img/7.ca8e9009.gif')" class="botonLetra" id="buttonH">7</ion-button>
            <ion-button @click="showImg('./img/8.92e13d7e.png')" class="botonLetra" id="buttonI">8</ion-button>
            <ion-button @click="showImg('./img/9.fc5fe31a.gif')" class="botonLetra" id="buttonJ">9</ion-button>
            <ion-button @click="showImg('./img/10.dfb550c8.png')" class="botonLetra" id="buttonK">10</ion-button>
            <ion-button @click="showImg('./img/11.8dc24cd5.png')" class="botonLetra" id="buttonL">11</ion-button>
            <ion-button @click="showImg('./img/12.c46df34f.gif')" class="botonLetra" id="buttonLL">12</ion-button>
            <ion-button @click="showImg('./img/13.ee0a82cf.gif')" class="botonLetra" id="buttonM">13</ion-button>
            <ion-button @click="showImg('./img/14.8c991ba3.gif')" class="botonLetra" id="buttonN">14</ion-button>
            <ion-button @click="showImg('./img/15.d5b7df60.png')" class="botonLetra" id="buttonÑ">15</ion-button>
            <ion-button @click="showImg('./img/16.6edd900f.png')" class="botonLetra" id="buttonO">16</ion-button>
            <ion-button @click="showImg('./img/17.a54ef18b.png')" class="botonLetra" id="buttonP">17</ion-button>
            <ion-button @click="showImg('./img/18.02ef51f8.png')" class="botonLetra" id="buttonQ">18</ion-button>
            <ion-button @click="showImg('./img/19.d6d404d2.png')" class="botonLetra" id="buttonR">19</ion-button>
            <ion-button @click="showImg('./img/20.34d2c30f.png')" class="botonLetra" id="buttonS">20</ion-button>
            <ion-button @click="showImg('./img/30.ff8f0156.png')" class="botonLetra" id="buttonT">30</ion-button>
            <ion-button @click="showImg('./img/40.eb7cc4bf.gif')" class="botonLetra" id="buttonU">40</ion-button>
            <ion-button @click="showImg('./img/50.96350ad8.gif')" class="botonLetra" id="buttonV">50</ion-button>
            <ion-button @click="showImg('./img/60.9cd048be.gif')" class="botonLetra" id="buttonX">60</ion-button>
            <ion-button @click="showImg('./img/70.ea7ffbe7.gif')" class="botonLetra" id="buttonY">70</ion-button>
            <ion-button @click="showImg('./img/80.2c6fd9e7.gif')" class="botonLetra" id="buttonZ">80</ion-button>
            <ion-button @click="showImg('./img/90.8c9c441b.gif')" class="botonLetra" id="buttonZ">90</ion-button>
            <ion-button @click="showImg('./img/100.06c8186c.gif')" class="botonLetra" id="buttonZ">100</ion-button>
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

importAll(require.context('../imagenes/numeros',true, /\.gif$/));

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

