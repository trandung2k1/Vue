Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [],
  },
  mutations: {
    increment(state) {
      state.count = state.count + 1;
    },
    ADD_TODO(state, payload) {
      state.todos = [...state.todos, payload];
    },
  },
  actions: {
    // Can be used asynchronously
    increment(context) {
      context.commit('increment');
    },
    async addTodo({ commit }, newTodo) {
      try {
        console.log(newTodo);
        commit('ADD_TODO', newTodo);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

import Home from './pages/Home.js';
import About from './pages/About.js';
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];
const router = new VueRouter({
  routes,
});
const app = new Vue({
  el: '#app',
  store: store,
  router: router,
  data: {
    message: 'Hello world',
    seen: true,
    todos: [],
    name: '',
    count: 1,
    age: 22,
  },
  mounted() {
    //work with DOM: get element
    // Change DOM or call api
    console.log('Mounted');
    this.$refs.input.focus();
  },
  beforeDestroy() {
    alert('Destroyed');
  },
  methods: {
    // reverseMessage() {
    //   this.message = this.message.split('').reverse().join('');
    // },
    ...Vuex.mapActions({
      ADD: 'addTodo',
    }),
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
    // reverseMessage: () => {
    //   console.log(this); //Window
    // },
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.name);
      //   console.log(e);
      // access computed get set age
      const vm = this;
      vm.age = 100;
      console.log(vm.age);
    },

    //mutation
    increment: function () {
      // this.$store.commit('increment');

      //use action
      this.$store.dispatch('increment');
    },

    //action
    createTodo: function () {
      //C1
      // this.ADD({ id: 1, title: 'Hello' });

      //C2
      this.$store.dispatch('addTodo', { id: 1, title: 'Hello' });
    },
  },
  created: function () {
    console.log('Created');
    //Call api
    //Access data
    //The created hook runs before the templates and Virtual DOM have been mounted or rendered - you are able to access reactive data and events that are active
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((rs) => rs.json())
      .then((rs) => (this.todos = rs));
  },
  watch: {
    name(newValue, oldValue) {
      console.log('new', newValue);
      console.log('old', oldValue);
    },
  },
  computed: {
    increaseCount() {
      return (this.count += 1);
    },
    // get state inside store
    getCountStore() {
      return this.$store.state.count;
    },
    age: {
      get: function () {
        return this.age;
      },
      set: function (ageNumber) {
        this.age = ageNumber;
      },
    },
  },
});
app.$el === document.getElementById('root');
console.log(app.$el); //<div id="app">...</div>
