<template>
  <ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start"></ion-buttons>
      <ion-title>Digital Servicebog</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
<ion-searchForm></ion-searchForm>
  </ion-content>
  </ion-app>
</template>

<script lang="ts">
  import{
      IonApp,
    IonButtons,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: "Home",
    components:{
      IonButtons,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
        IonApp
    }
  });
</script>

<style scoped>

</style>
