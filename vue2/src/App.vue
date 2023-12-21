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
    myHandleClick(e) {
      console.log(e);
    },
    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  async mounted() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const rs = await res.json();
    this.todos = rs;
    console.log(this.$refs.inputRef);
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
    <Header v-bind:msg="msg" @handle-Click="myHandleClick"></Header>
    <form @submit.prevent="onSubmit">
      <input ref="inputRef" type="text" v-model="msg" />
      <button type="submit">Submit</button>
    </form>
    {{ count }}
    <button @click="increment">Increase</button>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
