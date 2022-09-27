<template>
  <div class="card">
    {{ product.id }}: {{ product.name }} - {{ product.price }}
    <button @click="addProductToCart()">Adicionar</button>

    <button @click="remove()">Remover</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isProductInCart: false,
    };
  },
  props: {
    product: Object,
  },
  methods: {
    addProductToCart() {
      this.$store.commit("addProductToCart", this.product);
      
    },

    remove() {
      this.$store.commit("removeProductFromCart", this.product);
      
    },
  },
};
</script>

<style scoped>
.card {
  background: bisque;
  padding: 8px;
  margin-bottom: 5px;
}
</style>
