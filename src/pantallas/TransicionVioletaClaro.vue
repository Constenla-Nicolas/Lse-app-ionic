<template>
    <ion-page>
        <ion-content>
            <div id="todo"></div>

            

            <router-link to="/eleccionQueHacer"> </router-link>
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