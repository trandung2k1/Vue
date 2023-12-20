<script>
import Header from './components/Header.vue';

export default {
  name: 'Application',
  data() {
    return {
      age: 21,
      msg: 'Hello',
      todos: [],
    };
  },
  methods: {
    onSubmit() {
      console.log(this.msg);
    },
  },
  computed: {},
  async mounted() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const rs = await res.json();
    this.todos = rs;
  },
  components: { Header },
  created() {
    console.log(this.msg);
  },
  watch: {
    msg(newValue, oldValue) {
      console.log('new', newValue);
      console.log('old', oldValue);
    },
  },
  beforeDestroy() {
    alert('Before Destroyed');
  },
  destroyed() {
    alert('Destroyed');
  },
};
</script>

<template>
  <div id="app">
    {{ age }}
    <Header v-bind:msg="msg"></Header>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="msg" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped></style>
