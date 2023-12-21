<template>
  <div>
    <h1>Header</h1>
    <h2>{{ msg }}</h2>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['msg'],
  mounted() {
    // console.log(this);
  },
  emits: ['handle-Click'],
  methods: {
    handleClick() {
      this.$emit('handle-Click', 1);
    },
  },
};
</script>

<style scoped></style>
