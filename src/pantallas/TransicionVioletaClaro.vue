<template>
    <ion-page>
        <ion-content>
            <div id="todo"></div>

             <ion-button router-link="/transicionVioletaClaro">Comenzar</ion-button>
             <router-view></router-view>

        

        </ion-content>  
    </ion-page>
</template>

<style>
#todo {
    background-color: #AA60E2;
    width: 100%;
    height: 100%;
    position: fixed;
    left:0px;
    top:0px;
}
</style>