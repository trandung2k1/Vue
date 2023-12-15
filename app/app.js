const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello world',
    seen: true,
    todos: [],
    name: '',
    count: 1,
    age: 22,
  },
  methods: {
    // reverseMessage() {
    //   this.message = this.message.split('').reverse().join('');
    // },
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
  },
  created: function () {
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
    age: {
      get: function () {
        return this.age;
      },
      set: function (age) {
        this.age = age;
      },
    },
  },
});
