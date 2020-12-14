// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from "./components/child/Header";
import Footer from "./components/child/Footer";
import CommBox from "./components/child/CommBox";
import Button from "./components/child/Button";

Vue.config.productionTip = false

Vue.component('top', Header)
Vue.component('bottom', Footer)
Vue.component('commDiv', CommBox)
Vue.component('btnDivs', Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
