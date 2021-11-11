<template>
  <ion-page>
    <ion-content>

       <video  width="320" height="240" id="myvideo" controls>
         <source src="https://www.youtube.com/watch?v=TQSqrht3YR8" type="video/mp4">
        </video>
        
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonContent} from "@ionic/vue";
export default {
    components: {
        IonPage,
        IonContent,
    },
    methods: {
      openFullscreen(elem) {
          document.getElementById(elem).style.marginLeft = 10;
          alert(document.getElementById(elem).style.marginLeft);
  }

}

    }

 

</script>

<style scoped>

#button{
    background-color: #553071;
      position:fixed;
      width: 100%;
      height: 15%;
}
#myvideo{
    position:fixed;
    margin-left: 500%;
}

</style>