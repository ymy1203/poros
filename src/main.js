import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

require("./config/rem")


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
