import Vue from 'vue';
import App from './App.vue';
import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify/lib';
import VuePageTransition from "vue-page-transition";

// Enable page transitions.
Vue.use(VuePageTransition);

// Enable vuetify.
Vue.use(Vuetify);

// Enable helper.
export var Helper = new Vue({
  data: {
    Drupal: null,
    settings: null
  },

  methods: {}
});
(function (Drupal, drupalSettings) {
  Helper.settings = drupalSettings;
  Helper.Drupal = Drupal;
})(Drupal, drupalSettings);

// Enable routes.
Vue.use(VueRouter);
const routes = [
  { name: 'foo', path: '/foo', component: Foo },
  { name: 'bar', path: '/bar', component: Bar }
];

// Create a root instance
const vueElement = document.getElementById('vue_starter_app');
if (typeof vueElement === 'object') {
  new Vue({
    el: vueElement,
    router: new VueRouter({
      routes
    }),
    vuetify: new Vuetify({
      icons: {
        iconfont: 'fa',
      },
    }),
    data: {
      Helper
    },
    render: h => h(App)
  });
}
