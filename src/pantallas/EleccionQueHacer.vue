<template>
    <ion-page>
        <ion-content>
            <ion-header >
                <ion-toolbar>
                <img id="señalarLogo" src="../imagenes/señalarTexto.png">
                </ion-toolbar>
            </ion-header>
            <div class="upperPart">




            </div>   
        <div class="div" >
           <ion-button id="bttEstudiar" router-link="/EleccionQueAprender">ESTUDIAR</ion-button>
           <br> 
           <br> 
            <ion-button id="bttPracticar" router-link="/EleccionQueHacer">PRACTICAR</ion-button>
            <br> 
            <br>
            <br>
        </div>
        </ion-content>  
    </ion-page>
</template>




<script>
import { IonButton, IonPage, IonContent,IonHeader,IonToolbar} from "@ionic/vue";
export default {
    components: {
        IonButton,
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
    }
}

</script>

<style scoped>
    #señalarLogo{
        width: 43%;
        margin-left: 4%;
    }

    ion-toolbar{
        box-shadow: 0px -25px 50px black;
    }

.div{
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border-top:5px ;
    margin-top: 10%;
    border-top:2px ;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    padding: 30px 0px 0px 40px;
    border-style:solid;
    border-top-color: #553071 ;
}

.upperPart{
padding: 25px;  

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
        width: 311px;
        height: 79px;
        --box-shadow: 3px 4px 10px black;
        letter-spacing: 0px;
    }
</style>
