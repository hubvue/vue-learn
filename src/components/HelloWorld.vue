<template>
  <div class="hello">
    {{ count }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  private count: number = 0

  @Watch('count')
  private onNameChange(val) {
    console.log(val)
  }
}
</script>

<style scoped>
</style>
