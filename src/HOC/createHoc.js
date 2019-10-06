// 高阶组件实现主要有两点
// 1、接收一个组件，并返回一个组件,Vue中通过template编译过来的组件是一个对象，
// 2、对父组件传来的东西做透传：props、events、slots
const createHoc = options => WrappedComponent => ({
  props:
    typeof WrappedComponent === 'function'
      ? WrappedComponent.options.props
      : WrappedComponent.props,
  render(h) {
    // 具名插槽和默认插槽
    const slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map(vnode => {
        vnode.context = this._self
        return vnode
      })
    return h(
      WrappedComponent,
      {
        attrs: this.$attrs,
        props: this.$props,
        on: this.$listeners,
        // 透传作用域插槽
        scopedSlots: this.$scopedSlots
      },
      slots
    )
  },
  ...options
})

export default createHoc
