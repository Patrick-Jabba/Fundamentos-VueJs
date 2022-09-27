<template>
  <div>
    <pre>{{ $route.query.page }}</pre>
    Usuário <br>

    <button @click="login()">
      Login
    </button>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route);
    console.log(this.$router);
  },
  methods: {
    login(){
      console.log('logou')
      this.$router.push('/services')
    }
  }
};
</script>