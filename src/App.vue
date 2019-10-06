<template>
  <error-boundary>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png" />
      <div>Helloworld</div>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </error-boundary>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ErrorBoundary from './components/ErrorBoundary'
export default {
  name: 'app',
  components: {
    HelloWorld,
    ErrorBoundary
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
