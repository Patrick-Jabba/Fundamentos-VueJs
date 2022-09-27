<template>
  <div :class="alertClass">
    <slot />

    <button @click="closeButton">X</button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
  },
  computed: {
    alertClass() {
      return ["alert", this.variant ? `alert-${this.variant}` : ""];
    },
  },
  methods: {
    closeButton() {
      this.$emit("close");
      console.log("clicou");
    },
  },
};
</script>

<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 6px;
  color: gray;
  background: #ddd;
}

.alert-success {
  background: #42b983;
  color: #fff;
}
.alert-danger {
  background: red;
  color: #fff;
}
</style>
