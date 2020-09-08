/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  {routes} from './routes';

import User from './Helpers/User'
window.User=User
//notification
import Notification from './Helpers/Notification'
window.Notification=Notification

//sweet alert start
import Swal from 'sweetalert2'
window.Swal=Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast=Toast;

//sweet alert end

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    routes ,
    mode:'history'
  })

const app = new Vue({
    el: '#app',
    router
});
