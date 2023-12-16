const TodoItem = Vue.component('TodoItem', {
  template: '<h1>{{todo.title}}</h1>',
  props: ['todo'],
});
export default TodoItem;
