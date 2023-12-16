const Home = Vue.component('Home', {
  data() {
    return {
      name: 'Tran Dung',
    };
  },
  beforeDestroy() {
    alert('Destroyed Home Page');
  },
  destroyed() {
    console.log('destroyed');
  },
  template: `<div>
                    <h1>Home Page</h1>
                    <h2>{{name}}</h2>
                </div>`,
});

export default Home;
