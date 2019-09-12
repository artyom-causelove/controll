<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import appHeader from '@/components/app-header'

export default {
  name: 'app',
  components: {
    appHeader
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
}

#app {
  padding-top: 40px;
  height: 100%;
}

.grecaptcha-badge { visibility: hidden; }
</style>
