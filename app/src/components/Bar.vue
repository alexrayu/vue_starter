<template>
  <h1>Bar</h1>
</template>

<script>
import {Helper} from '../main.js';
import {bus} from './bus.js';
export default {
  name: 'app',
  data() {
    return {
      Helper,
      t: Helper.Drupal.t,
      items: [],
      isLoading: false,
      status: null,
      error: null,
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
