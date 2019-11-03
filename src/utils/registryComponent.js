import Vue from 'vue'

const requireComponent = require.context('../components', false, /\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.split('/')[1].split('.')[0]
  Vue.component(componentName, componentConfig.default || componentConfig)
})
