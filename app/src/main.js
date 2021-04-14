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

/**
 * Send xhr to the server.
 *
 * @param params
 *   Parameters to be passed with the xhr.
 * @param callback
 *   Callback.
 */
Vue.prototype.xhr = function (params, callback) {
  let uri = '/my_module/xhr';
  let xhr = new XMLHttpRequest();
  let pack = new FormData();
  let token = drupalSettings.my_module.token || '';
  for (let i in params) {
    pack.append(i, params[i]);
  }
  
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        let data = JSON.parse(xhr.responseText);
        if (typeof data.error === 'undefined') {
          callback({request: params, data: data});
        }
        else {
          callback({
            request: params,
            data: {
              'error': true,
              'message': 'Error: ' + data.error
            }
          });
        }
      }
      else {
        callback({
          request: params,
          data: {
            'error': true,
            'message': 'Error ' + this.status + ', "' + this.statusText + '"'
          }
        });
      }
    }
  };
  if (token) {
    xhr.open('POST', uri + '?token=' + token);
  }
  else {
    xhr.open('POST', uri);
  }
  xhr.send(pack);
};

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
