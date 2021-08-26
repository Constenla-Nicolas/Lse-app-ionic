<template>
    <ion-page>
        <ion-content>

        <div class="div" >
           <ion-button id="bttEstudiar" router-link="/EleccionQueHacer">Estudiar</ion-button>
            <ion-button id="bttPracticar" router-link="/EleccionQueHacer">Practicar</ion-button>
            <br> 
            <br>
            <br>
        </div>
        </ion-content>  
    </ion-page>
</template>
<style scoped>

.div{

    padding-left: center;
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
        width: 200px;
        height: 55px;
        --box-shadow: 3px 4px 10px black;
        letter-spacing: 0px;
    }
</style>
