<template>
    <ion-page>
        <ion-content>
            <ion-header >
                <ion-toolbar>
                <img id="señalarLogo" src="../imagenes/senialar_texto.png">
                <ion-button id="borgir" router-link="/ajustes" color="none" fill="clear" strong="true">| | |</ion-button>
                </ion-toolbar>
            </ion-header>
            <div class="upperPart">




            </div>   
        <div class="div" >
           <ion-button id="bttEstudiar" router-link="/EleccionQueAprender">ESTUDIAR</ion-button>
           <br> 
           <br> 
            <ion-button id="bttPracticar">PRACTICAR</ion-button>
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
    },
   /* methods: {
        randomScreen: function() {
            var listaPracticas=["/src/pantallas/Trivia.vue"];
            var pantallaRandom=Math.random(listaPracticas);
           // var cambiarPanRan=document.getElementById("bttPracticar").innerHTML="<ion-button id="bttPracticar" router-link="pantallaRandom">PRACTICAR</ion-button>";

        }   
    },*/
}

</script>

<style scoped>
    #borgir{
        letter-spacing: -4.5px;
        font-size:36px;
        height: 80px;
        width: 40px;
        text-align: center;
        position: fixed;
        margin-top: -1px;
        margin-left: 120px;
        transform: rotate(-90deg);
        --color: black;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
    #señalarLogo{
        width: 43%;
        margin-left: 4%;
    }
    #hamburger{
        width: 12%;
        position: fixed;
        margin-left: 38%;
        margin-top: -1%;
    }

    ion-toolbar{
        box-shadow: 0px -25px 50px black;
    }

.div{
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.upperPart{
padding: 25px;  

}

#bttPracticar{
    
    --background:#FF68E7 ;
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

#bttEstudiar{

    --background: #E7E40D;
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
