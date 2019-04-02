import Vue from 'vue'
// import App from './App.vue'
// import Product from './components/Product.vue'
//import PagedProduct from './components/PagedProduct.vue'
//import EventPage from './components/EventPage.vue'
//import Page from './components/EventProp.vue';
//import Page from './components/EventPageCapture.vue';
//import Page from './components/EventKeyboard.vue';
//import Page from './components/EventModel.vue';
//import Page from './components/EventModelForm.vue';
import Page from './components/EventModelForm2.vue';
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(Page),
}).$mount('#app')
