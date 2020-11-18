import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { IonicVue } from '@ionic/vue';
import {createI18n, useI18n} from 'vue-i18n';
import {languages, defaultLocale } from './locales';
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* PWA */
import './registerServiceWorker';
const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false, // you must specify 'legacy: false' option
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages
});


defineCustomElements(window);

const app = createApp(App)
  .use(IonicVue)
  .use(router)
    .use(i18n);

// const



router.isReady().then(() => {
  app.mount('#app');
});
