<template>
  <ion-app>
  <ion-header>
    <DigiToolBar :pageTitle="$t('HOME.TITLE')"></DigiToolBar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-tabs>
        <ion-tab-bar slot="top">
          <ion-tab-button tab="schedule">
            <ion-icon name="calendar"></ion-icon>
            <ion-label>Schedule</ion-label>
            <ion-badge>6</ion-badge>
          </ion-tab-button>

          <!-- Provide a custom route to navigate to -->
          <ion-tab-button tab="speakers">
            <ion-icon name="person-circle"></ion-icon>
            <ion-label>Speakers</ion-label>
          </ion-tab-button>

          <!-- Provide extra data to route -->
          <ion-tab-button tab="map" >
            <ion-icon name="map"></ion-icon>
            <ion-label>Map</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
<!--<ion-searchForm></ion-searchForm>-->
  </ion-content>
  </ion-app>
</template>

<script lang="ts">
  import{
      IonApp,
      IonHeader,
      IonContent,
      IonTabs,
      IonTabButton,
      IonTabBar,
      IonIcon,
      IonLabel,
      IonBadge
  } from '@ionic/vue';
  import {calendar,
      personCircle,
      map,
  } from 'ionicons/icons';
  import DigiToolBar from '@/components/DigiToolBar.vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: "Home",
    components:{
      IonHeader,
      IonContent,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonIcon,
        IonLabel,
        IonApp,
        IonBadge,
        DigiToolBar
    },
    setup(){
        return{
            calendar,
            personCircle,
            map,
        }
    }
  });
</script>

<style scoped>

</style>
