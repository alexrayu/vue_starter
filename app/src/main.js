import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

// Create routes
Vue.use(VueRouter);
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];
const router = new VueRouter({
  routes
});

// Create a root instance
const vueElement = document.getElementById('vue_starter_app');
if (typeof vueElement === 'object') {
  new Vue({
    el: vueElement,
    router,
    render: h => h(App)
  });
}
