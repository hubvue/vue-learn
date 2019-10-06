<template>
  <div>
    <slot name="header"></slot>
    <h2>{{ message }}</h2>
    <h1>{{ count }}</h1>
    <slot></slot>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  },
  mounted() {
    console.log(123)
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
      this.$emit('abc')
    }
  }
}
</script>

<style>
</style>