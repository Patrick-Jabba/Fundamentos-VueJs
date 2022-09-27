<template>
  <div class="container">
    <AppProduct 
    v-for="product in $store.state.products"
    :key="product.id"
    :product="product"
    />
  </div>
</template>

<script>
import AppProduct from './AppProduct.vue';

export default {
  components: {
    AppProduct,
  }
}
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
</style>