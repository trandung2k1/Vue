Vue.component('todo-item', {
  template: '<li>{{todo.title}}</li>',
  props: ['todo'],
  mounted() {
    console.log('Todo item mounted');
  },
  destroyed() {
    console.log('Destroyed'); // ===  cleanup function react
  },
  beforeDestroy: function () {
    console.log('BeforeDestroy');
  },
  created: function () {
    //Call api
    //Access data
    //The created hook runs before the templates and Virtual DOM have been mounted or rendered - you are able to access reactive data and events that are active
    console.log('Created');
    setInterval(() => {
      if (this.counter > 0) this.counter--;
    }, 1000);
  },
});
