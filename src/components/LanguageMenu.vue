<template>
  <ion-item>
    <ion-select v-model="$i18n.locale" >
      <ion-select-option v-for="language in langs" :key="language" :value="language.locale">{{language.value}}</ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script lang="ts">
  import {IonItem, IonSelect, IonSelectOption} from "@ionic/vue";
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "LanguageMenu",
      data() {
          return {
              langs: [
                  {locale: 'en',value:  'English'},
                  {locale: 'da',value:  'Dansk'},
                  {locale: 'sv',value:  'Svensk'},
                  {locale: 'de',value:  'Deutsch'},
                  {locale: 'no',value:  'Norsk'},
              ]
              }
  },
      components:{
        IonItem,
          IonSelectOption,
          IonSelect
      }
  });
</script>

<style scoped>

</style>
