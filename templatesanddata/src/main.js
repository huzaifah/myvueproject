import Vue from 'vue'
import App from './App.vue'
import Product from './components/Product.vue'
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(Product),
}).$mount('#app')
