const TodoItem = Vue.component('TodoItem', {
  template: '<h1 @click="handleClick">{{todo.title}}</h1>',
  props: ['todo'],
  methods: {
    handleClick() {
      this.$emit('myEvent', 'Hello');
    },
  },
});
export default TodoItem;
