<script>
import Header from './components/Header.vue';

export default {
  name: 'Application',
  data: function () {
    return {
      age: 21,
      msg: 'Hello',
    };
  },
  components: { Header },
};
</script>

<template>
  <div id="app">
    {{ age }}
    <Header v-bind:msg="msg"></Header>
  </div>
</template>

<style scoped></style>
