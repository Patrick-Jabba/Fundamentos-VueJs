<template>
  <button @click="limparFormulario">
    {{ variant }}
    <slot />

    <slot name="icon" />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "success",
    },
  },
  setup(props, { emit }) {
    const limparFormulario = () => {
      emit("update", props.variant);
    };
    return {
      limparFormulario,
    };
  },
};
</script>