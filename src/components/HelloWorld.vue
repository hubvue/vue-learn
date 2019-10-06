<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    // throw new Error('error')
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      throw new Error('error')
      this.count++
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
