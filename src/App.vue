<template>
  <div>
    <header-comp></header-comp>
    <div id="app">
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerComp from './components/header.vue'

export default {
  name: 'App',
  components: {
    headerComp
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding: 20px;
}
</style>
