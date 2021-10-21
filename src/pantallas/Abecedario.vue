<template>
    <ion-page>
        <ion-content >
         
         
     
           
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
    <ion-button id="botonZoom" @click="toolbarMethods.zoomIn">
         <img id="zoom" src="../imagenes/zoomIn.png">
    </ion-button>
    <button id="botonZoom" @click="toolbarMethods.zoomOut" >
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
      
      },
      handleHide() {
        this.visible = false
      },
    
    
         //Monuted hace que la funcion cargue apenas cargue la pantalla, la func tiene que si o si estar en el export defult
                mounted:function() {
                    var listBrand =['A','B','C','D','E','F','G']
                     
                    for (var i = 0; i < listBrand.length; i++) {
                       var btn = document.createElement("ion-button");
                       btn.className="botonLetra";
                       var t = document.createTextNode(listBrand[i]);
                        
                       
                       btn.appendChild(t);
                       document.body.appendChild(btn);
                        
                        btn.style.color="red";
                        btn.style.backgroundColor="#FF68E7";
                        btn.setAttribute("id","button"+listBrand[i]);
                        btn.onclick=function() {showImg};
/*--background: #FF68E7;
        
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
        margin-right: 10px;*/ 
                       console.log(btn)
                    }
                }
    
}

function showImg(imagenlink) {
          if (cache==imagenlink)
           console.log(imagenlink)
          this.imgs = imagenlink
        this.visible = true
        }
  const cache ={};

function importAll(r){
    r.keys().forEach((key)=>(cache[key]=r(key)));
}

importAll(require.context('../imagenes/letras',true, /\.jpg$/));

console.log(cache)

  
                
</script>

<style scoped> /* estilo */
 
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
.botonLetra{
    --background: #FF68E7;
        
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

</style>

