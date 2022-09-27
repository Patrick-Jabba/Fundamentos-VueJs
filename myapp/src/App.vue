<template>
  <div>
    <BaseAlert v-if="showAlert" :variant="variant" @close="onClose()">
      {{ alertText }}
    </BaseAlert>
  </div>
  <TheHeader>
    <template v-slot:title> Home </template>

    <template v-slot:description>
      <p>Descrição</p>
    </template>

    Content do header - menu...
  </TheHeader>

  <BaseCard />
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BaseCard from "./components/BaseCard.vue";
import BaseAlert from "./components/BaseAlert.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    BaseAlert,
    BaseCard,
  },
  data() {
    return {
      showAlert: true,
      alertText: "Formulário enviado com sucesso",
      variant: "success",
    };
  },

  methods: {
    onClose() {
      this.showAlert = false;
      console.log("on close");
    },
  },
};
</script>

<style>
</style>
