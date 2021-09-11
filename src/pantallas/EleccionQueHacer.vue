<template>
    <ion-page>
        <ion-content>
            <div class="upperPart">




            </div>   
        <div class="div" >
           <ion-button id="bttEstudiar" router-link="/EleccionQueAprender">Estudiar</ion-button>
            <ion-button id="bttPracticar" router-link="/EleccionQueHacer">Practicar</ion-button>
            <br> 
            <br>
            <br>
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

<style scoped>

.upperPart{
padding: 25px;  

}

.div{

    border-top:2px ;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    padding: 30px 0px 0px 40px;
    border-style:solid;
    border-top-color: #553071 ;
}

#bttPracticar{
    
    --background:#FF68E7 ;
    
}

#bttEstudiar{

    --background: #E7E40D;
}

ion-button {
        
        
        --border-color: black;
        --border-radius: 5px;
        --border-style: solid;
        --border-width: 2px;
        --color: black;
        text-transform:unset;
        font-size: 36px;
        width: 300px;
        height: 55px;
        --box-shadow: 3px 4px 10px black;
        letter-spacing: 0px;
    }
</style>
