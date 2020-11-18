<template>
  <ion-app>
    <ion-split-pane contentId="main-content">
    <ion-menu side="start" menu-id="first" contentId="main-content">
      <ion-content>
        <ion-list>
          <ion-list-header>{{ $t('HOME.TITLE') }}</ion-list-header>
          <ion-note :on="user">{{user.email}}</ion-note>

          <ion-menu-toggle auto-hide="false">
            <ion-item lines="none" detail="false" class="hydrated">
              <ion-icon slot="start" :ios="search" :md="search"></ion-icon>
              <ion-label>search</ion-label>
            </ion-item>
            <ion-item lines="none" detail="false" class="hydrated">
              <ion-icon slot="start" :ios="search" :md="search"></ion-icon>
              <ion-label>search</ion-label>
            </ion-item>
            <ion-item lines="none" detail="false" class="hydrated">
              <ion-icon slot="start" :ios="search" :md="search"></ion-icon>
              <ion-label>search</ion-label>
            </ion-item>
            <ion-item lines="none" detail="false" class="hydrated">
              <ion-icon slot="start" :ios="search" :md="search"></ion-icon>
              <ion-label>search</ion-label>
            </ion-item>
            <ion-item lines="none" detail="false" class="hydrated">
              <ion-icon slot="start" :ios="search" :md="search"></ion-icon>
              <ion-label>search</ion-label>
            </ion-item>
    <LanguageMenu />
          </ion-menu-toggle>
        </ion-list>

      </ion-content>
    </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
    import {
        IonApp,
        IonContent,
        IonIcon,
        IonItem,
        IonLabel,
        IonList,
        IonListHeader,
        IonMenu,
        IonMenuToggle,
        IonNote,
        IonRouterOutlet,
    IonSplitPane
    } from '@ionic/vue';
  import LanguageMenu from "@/components/LanguageMenu.vue"
    import {defineComponent, ref} from 'vue';
    import {useRoute} from 'vue-router';
    import {
        archiveOutline,
        archiveSharp,
        bookmarkOutline,
        bookmarkSharp,
        heartOutline,
        heartSharp,
        mailOutline,
        mailSharp,
        paperPlaneOutline,
        paperPlaneSharp,
        trashOutline,
        trashSharp,
        warningOutline,
        warningSharp,
        search,
    } from 'ionicons/icons';
    import {useI18n} from "vue-i18n";
    import {defaultLocale, languages} from "@/locales";



    export default defineComponent({
        name: 'App',
        data(){
            return {
                user: {}
        }
        },
        components: {
            IonApp,
            IonContent,
            IonIcon,
            IonItem,
            IonLabel,
            IonList,
            IonListHeader,
            IonMenu,
            IonMenuToggle,
            IonNote,
            IonRouterOutlet,
            IonSplitPane,
        LanguageMenu,
        },
        setup() {

            // const user = undefined;

            const messages = Object.assign(languages);
            const route = useRoute();
            const t = useI18n({
                legacy: false, // you must specify 'legacy: false' option
                locale: defaultLocale,
                fallbackLocale: defaultLocale,
                messages
            })

            return {
                archiveOutline,
                archiveSharp,
                bookmarkOutline,
                bookmarkSharp,
                heartOutline,
                heartSharp,
                mailOutline,
                mailSharp,
                paperPlaneOutline,
                paperPlaneSharp,
                trashOutline,
                trashSharp,
                warningOutline,
                warningSharp,
                search,
                t
            };

        },
        methods:{

        }
    });
</script>

<style scoped>
  ion-menu ion-content {
    --background: var(--ion-item-background, var(--ion-background-color, #fff));
  }

  ion-menu.md ion-content {
    --padding-start: 8px;
    --padding-end: 8px;
    --padding-top: 20px;
    --padding-bottom: 20px;
  }

  ion-menu.md ion-list {
    padding: 20px 0;
  }

  ion-menu.md ion-note {
    margin-bottom: 30px;
  }

  ion-menu.md ion-list-header,
  ion-menu.md ion-note {
    padding-left: 10px;
  }

  ion-menu.md ion-list#inbox-list {
    border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
  }

  ion-menu.md ion-list#inbox-list ion-list-header {
    font-size: 22px;
    font-weight: 600;

    min-height: 20px;
  }

  ion-menu.md ion-list#labels-list ion-list-header {
    font-size: 16px;

    margin-bottom: 18px;

    color: #757575;

    min-height: 26px;
  }

  ion-menu.md ion-item {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
  }

  ion-menu.md ion-item.selected {
    --background: rgba(var(--ion-color-primary-rgb), 0.14);
  }

  ion-menu.md ion-item.selected ion-icon {
    color: var(--ion-color-primary);
  }

  ion-menu.md ion-item ion-icon {
    color: #616e7e;
  }

  ion-menu.md ion-item ion-label {
    font-weight: 500;
  }

  ion-menu.ios ion-content {
    --padding-bottom: 20px;
  }

  ion-menu.ios ion-list {
    padding: 20px 0 0 0;
  }

  ion-menu.ios ion-note {
    line-height: 24px;
    margin-bottom: 20px;
  }

  ion-menu.ios ion-item {
    --padding-start: 16px;
    --padding-end: 16px;
    --min-height: 50px;
  }

  ion-menu.ios ion-item.selected ion-icon {
    color: var(--ion-color-primary);
  }

  ion-menu.ios ion-item ion-icon {
    font-size: 24px;
    color: #73849a;
  }

  ion-menu.ios ion-list#labels-list ion-list-header {
    margin-bottom: 8px;
  }

  ion-menu.ios ion-list-header,
  ion-menu.ios ion-note {
    padding-left: 16px;
    padding-right: 16px;
  }

  ion-menu.ios ion-note {
    margin-bottom: 8px;
  }

  ion-note {
    display: inline-block;
    font-size: 16px;

    color: var(--ion-color-medium-shade);
  }

  ion-item.selected {
    --color: var(--ion-color-primary);
  }
</style>
