<template>
  <div id="app">
    <test-hoc :message="message" @abc="handle">
      <template v-slot:header>
        这是一个具名插槽
      </template>
      这是一个默认插槽
    </test-hoc>
    <br />
    <br />
    <br />
    <br />

    <test :message="message" @abc="handle">
      <template v-slot:header>
        这是一个具名插槽
      </template>
      这是一个默认插槽
    </test>
  </div>
</template>

<script>
import HOC from './HOC'
import Test from './components/Test'
const TestHoc = HOC(Test)
console.log(TestHoc)
export default {
  name: 'app',
  data() {
    return {
      message: 'Hello World'
    }
  },
  methods: {
    handle() {
      console.log('events')
    }
  },
  components: {
    TestHoc,
    Test
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
