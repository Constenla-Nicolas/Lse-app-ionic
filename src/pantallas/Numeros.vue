<template>
    <ion-page>
        <ion-content>
            <div id="contenedorImagenes">

                    <div id="cuadroAmarillo">
                         <img id="contenedorImagen" src="../imagenes/letras/A.jpg">
                    </div>

            </div>
            <div id="bordecito">
            </div>
            <div id="espacioSalvador">
            </div>

            <div class="contenido" id = "arca">
 
            <ion-button  @click="showImg()" class="botonLetra" id="buttonA">0</ion-button>
 
            <ion-button class="botonLetra" id="buttonB">1</ion-button>
            <ion-button class="botonLetra" id="buttonC">2</ion-button>
            <ion-button class="botonLetra" id="buttonD">3</ion-button>
            <ion-button class="botonLetra" id="buttonE">4</ion-button>
            <ion-button class="botonLetra" id="buttonF">5</ion-button>
            <ion-button class="botonLetra" id="buttonG">6</ion-button>
            <ion-button class="botonLetra" id="buttonH">7</ion-button>
            <ion-button class="botonLetra" id="buttonI">8</ion-button>
            <ion-button class="botonLetra" id="buttonJ">9</ion-button>
            <ion-button class="botonLetra" id="buttonK">10</ion-button>
            <ion-button class="botonLetra" id="buttonL">11</ion-button>
            <ion-button class="botonLetra" id="buttonLL">12</ion-button>
            <ion-button class="botonLetra" id="buttonM">13</ion-button>
            <ion-button class="botonLetra" id="buttonN">14</ion-button>
            <ion-button class="botonLetra" id="buttonÑ">15</ion-button>
            <ion-button class="botonLetra" id="buttonO">16</ion-button>
            <ion-button class="botonLetra" id="buttonP">17</ion-button>
            <ion-button class="botonLetra" id="buttonQ">18</ion-button>
            <ion-button class="botonLetra" id="buttonR">19</ion-button>
            <ion-button class="botonLetra" id="buttonS">20</ion-button>
            <ion-button class="botonLetra" id="buttonT">21</ion-button>
            <ion-button class="botonLetra" id="buttonU">22</ion-button>
            <ion-button class="botonLetra" id="buttonV">23</ion-button>
            <ion-button class="botonLetra" id="buttonX">24</ion-button>
            <ion-button class="botonLetra" id="buttonY">25</ion-button>
            <ion-button class="botonLetra" id="buttonZ">26</ion-button>
      <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
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
import image from "../imagenes/letras/A.jpg"
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
      showImg( ) {
        this.imgs = image
        this.visible = true
        alert(document.getElementById("contenedorImagen").src);
        
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
#footerBorde{
    width: 100%;
}
#contenedorImagenes{
      background-color: #553071;
      position:fixed;
      width: 100%;
      height: 43%;
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
      height: 44%;
      z-index: 8;
}
#espacioSalvador{
      width: 100%;
      height: 44%;
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

