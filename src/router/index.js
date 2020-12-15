import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Main";
import Login from "../components/Login";
import Mypage from "../components/Mypage";
import FindInfo from "../components/FindInfo";
import Join from "../components/Join";
import Company from "../components/Company";
import Policy from "../components/Policy";
import Adopt1 from "../components/Adopt1";
import Adopt2 from "../components/Adopt2";
import Market from "../components/Market";
import Community from "../components/Community-notice";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/myPage',
      name: 'Mypage',
      component: Mypage
    },
    {
      path: '/findInfo',
      name: 'FindInfo',
      component: FindInfo
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/policy',
      name: 'Policy',
      component: Policy
    },
    {
      path: '/adopt1',
      name: 'Adopt1',
      component: Adopt1
    },
    {
      path: '/adopt2',
      name: 'Adopt2',
      component: Adopt2
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },

  ]
})
