import Vue from 'vue';
import App from './App.vue';

// Create a root instance
const vueElement = document.getElementById('vue_starter_app');
if (typeof vueElement === 'object') {
  new Vue({
    el: vueElement,
    render: h => h(App)
  });
}
