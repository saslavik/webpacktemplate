<template>
   <section id="main">
    <div class="wrapper_example">
      <div class="container">
        <h1>VUE Webpack</h1>
        <p>New message: {{ message }}</p>
        <input type="text" v-model="input"> {{ input }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      input: '',
    };
  },
  created() {
    this.message = this.$store.getters.getMessage;
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
