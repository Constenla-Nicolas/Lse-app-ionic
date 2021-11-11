<template>
  <ion-page>
    <ion-content>

       <video autoplay="true" muted loop height="600" id="myvideo" style="position: absolute; right: 0; bottom: 0;width:100%; height:100%; z-index: -100; object-fit: cover;">
         <source src="/media/ayuda_colores.9b6a7ef6.mp4" type="video/mp4">
        </video>
            <div id="footerSalvador">
                <ion-button id="volver" router-link="/ajustes">VOLVER</ion-button>
              <router-view></router-view>
            </div>
    </ion-content>
  </ion-page>
</template>

<script >
import { IonButton, IonPage, IonContent} from "@ionic/vue";
export default {
    components: {
        IonButton,
        IonPage,
        IonContent
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
      },
      playVideo(){
        document.getElementById("myvideo").autoplay = true;
      }
    }
    
}
  const cache ={};

function importAll(r){
    r.keys().forEach((key)=>(cache[key]=r(key)));
}

importAll(require.context('../videos',true, /\.mp4$/));

console.log(cache);

</script>

<style scoped>

#button{
    background-color: #553071;
      position:fixed;
      width: 100%;
      height: 15%;
}


</style>