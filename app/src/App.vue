<template>
  <div id="app" class="vuejs">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <v-text-field label="Vuetify textfield"></v-text-field>
    <p>
      <router-link to="/foo">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
    </p>
    <vue-page-transition name="fade-in-right" mode="out-in">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import {Helper} from './main.js';
import {bus} from './components/bus.js';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Helper,
      t: Helper.Drupal.t,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
