<template>
  <div>
    <h1>Header</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['msg'],
  mounted() {
    // console.log(this);
  },
};
</script>

<style scoped></style>
