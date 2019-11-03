import Vue from 'vue'
import App from './App.vue'
import registryComponent from './utils/registryComponent'
Vue.config.productionTip = false
registryComponent(__dirname + './components')
new Vue({
  render: h => h(App)
}).$mount('#app')
