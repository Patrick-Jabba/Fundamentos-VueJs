<template>
  <div id="app">
    <AppProducts />
    <br /><br />
    <br /><br />
    <br /><br />
    <pre>
      {{ $store.state.cart}}
    </pre>
    Total Carrinho: {{ $store.getters.total }}
    <br />
    <br />
    {{ $store.state.user.name }}
    <br />
    {{ $store.state.user.email }}
    <br />
    <br>
    <button @click="updateUser()">Atualizar perfil</button>
  </div>
</template>

<script>
import AppProducts from "./components/Products/AppProducts.vue";

export default {
  name: "App",
  components: {
    AppProducts,
  },
  methods: {
    updateUser() {
      const newUser = {
        name: "Patrick",
        email: "patrick@email.com",
      };
      // this.$store.commit("storeUser", newUser);
      this.$store.dispatch('storeUser', newUser)
      .then(() => {
        console.log('terminou com sucesso!');
      });
    },
  },
  data() {
    return {};
  },
  created() {},
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
