import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify/lib';

// Define vuetify.
Vue.use(Vuetify);

// Define helper.
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

// Define routes.
Vue.use(VueRouter);
const Foo = { template: '<div>foo</div>',
};
const Bar = { template: '<div>bar</div>' };
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
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
