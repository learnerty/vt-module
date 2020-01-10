import Vue from 'vue'
import App from './App.vue'
import vtModule from '../packages/index.js'
// import './theme.less'

Vue.config.productionTip = false

Vue.use(vtModule)

new Vue({
  render: h => h(App),
}).$mount('#app')
