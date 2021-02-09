// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from "./components/child/Header";
import Footer from "./components/child/Footer";
import CommBox from "./components/child/CommBox";
import Button from "./components/child/Button";
import SearchBar from "./components/child/SearchBar";
import TapInImage from "./components/child/TapInImage";
import Filter from "./components/child/Filter";
import MyPageBox from "./components/child/MyPageBox";
import axios from 'axios' // Axios 임포트
import VueMoment from 'vue-moment'

Vue.config.productionTip = false

Vue.use(VueMoment)

Vue.component('top', Header)
Vue.component('bottom', Footer)
Vue.component('commDiv', CommBox)
Vue.component('btnDivs', Button)
Vue.component('schDiv', SearchBar)
Vue.component('tapInImg',TapInImage)
Vue.component('filterDiv', Filter)
Vue.component('myPageDiv', MyPageBox)
// 전역 configuration 설정
//Base URL을 설정한다.
axios.defaults.baseURL = 'https://limy1118.cafe24.com'
// 모든 요청에 추가할 헤더 예를 들어 서비스키 설정
//axios.defaults.headers.common['Service-Key'] = 'AIzaSyAbL04smbk07VACmID0BqWdwYsEiwFGappp'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
