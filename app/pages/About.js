import Header from '../components/Header.js';
import TodoItem from '../components/TodoItem.js';
import '../Item.js';
const About = Vue.component('Home', {
  data() {
    return {
      title: 'About Page',
      todo: {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
    };
  },
  beforeDestroy() {
    alert('Destroyed About Page');
  },
  template: `<div>
                    <h1>{{title}}</h1>
                    <Header/>
                    <TodoItem v-bind:todo="todo" />
                    <todo-item v-bind:todo="todo"></todo-item>
                </div>`,
});

export default About;
