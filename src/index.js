
import './js/common';
import './css/main.css';
import './scss/main.scss';

window.Vue = require('vue');
import store from './store'

Vue.component('example-component', require('./components/example.vue').default)

const app = new Vue({
  data () {
    return {
      component: false,
    }
  },
  store,
  el: '#app'
})