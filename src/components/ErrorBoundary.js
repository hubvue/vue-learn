export default {
  name: 'ErrorBoundary',
  data() {
    return {
      error: false,
      errorMessage: ''
    }
  },
  errorCaptured(err, vm, info) {
    this.error = true
    console.log(err.stack)
    alert(err)
    this.errorMessage = `${err.stack}\n\nfound in ${info} of component`
    return false
  },
  render(h) {
    if (this.error) {
      // return h('pre', { style: { color: 'red' } }, this.errorMessage)
    }
    return this.$slots.default[0]
  }
}
