import Vue from 'vue'
// import App from './App.vue'
// import Product from './components/Product.vue'
//import PagedProduct from './components/PagedProduct.vue'
import EventPage from './components/EventPage.vue'
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(EventPage),
}).$mount('#app')
