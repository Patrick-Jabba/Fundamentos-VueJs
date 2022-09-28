<template>
  <!-- <AppHook v-if="showAppHook" teste="teste" />
  <button @click="showAppHook = !showAppHook">Toggle</button>
  <br />
  <br /> -->

  <AppButton 
  variant="danger" 
  @update="getUpdate"
  > 
    Salvar
  </AppButton>

  <!-- <h1>USER</h1>
  {{ user.name }}

  <h2>Full User</h2>
  {{ fullUserData }}

  <button @click="changeName">Atualizar</button> -->
</template>

<script>
import { ref, computed, watch } from "vue";

// import AppHook from "./components/AppHook.vue";
import AppButton from "./components/AppButton.vue";

export default {
  name: "App",
  components: { AppButton },
  setup() {
    const showAppHook = ref(true);

    const user = ref({
      name: "Patrick",
      email: "patrick@email.com",
    });

    const getUpdate = (data) => {
      console.log('getUpdate', data);
    }

    const changeName = () => {
      user.value.name = "Jon Snow";
      user.value.email = "jon@email.com";
    };

    const fullUserData = computed(
      () => `${user.value.name} ${user.value.email}`
    );

    watch(
      () => user,
      () => {
        console.log("lógica cabulosa");
      },
      {
        deep: true,
      }
    );

    return {
      showAppHook,
      user,
      fullUserData,
      changeName,
      getUpdate
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
