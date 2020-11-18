<template>
  <ion-toolbar color="primary">
    <ion-buttons slot="start">
      <ion-menu-button auto-hide="false"></ion-menu-button>

    </ion-buttons>
    <ion-buttons slot="end">
      <ion-button>
        <ion-icon slot="icon-only" :icon="refreshOutline"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title><em class="title-icon"><img src="assets/images/welcome-icon.svg" class="world-icon" alt="your image"></em>{{ pageTitle }}</ion-title>
  </ion-toolbar>
</template>

<script lang="ts">
  import { IonButton, IonButtons, IonIcon, IonTitle, IonToolbar, IonMenuButton, } from '@ionic/vue';
  import { search, refreshOutline } from 'ionicons/icons';
  import {defineComponent} from "vue";

  export default defineComponent({
    name: 'DigiToolBar',
    components: {
      IonButton,
      IonButtons,
      IonIcon,
      IonTitle,
      IonToolbar,
        IonMenuButton
    },
      props:[
          'pageTitle'
      ],
    setup() {
      return {
        search,
        refreshOutline
      }
    }
  });
</script>

<style scoped>
  ion-title{
    text-align: center;
  }
  .title-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 8px;
    position: relative;
    top: 4px;
  }

  .toolbar-ios ion-title {
    left: 0;
    top: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 0;
    padding-bottom: 1px;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    pointer-events: none;
  }

  .menu-image {
    height: 80px;
    background: #0089d0;
  }
  .menu-image .arrow-icon .icon {
    padding: 20px;
    font-size: 25px;
    color: #fff;
  }
</style>
