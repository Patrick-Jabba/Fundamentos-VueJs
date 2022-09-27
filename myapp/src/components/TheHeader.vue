<template>
  <header class="header">
    <h1 class="title">
      <slot name="title" />
    </h1>
    <div class="description">
      <slot name="description" />
    </div>
    <div class="content">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  mounted(){
   console.log(this.$slots); 
  }
};
</script>

<style scoped>
.header {
  background-color: #000;
  color: #fff;
}
</style>
