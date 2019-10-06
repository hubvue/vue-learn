import createHoc from './createHoc'
const withConsoleHoc = createHoc({
  mounted() {
    console.log('hoc')
  }
})
export default withConsoleHoc
