import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Main";
import Login from "../components/Login";
import FindInfo from "../components/FindInfo";
import Join from "../components/Join";
import Company from "../components/Company";
import Policy from "../components/Policy";
import HomeAdopt from "../components/HomeAdopt";
import CenterAdopt from "../components/CenterAdopt";
import Market from "../components/Market";
import Community from "../components/Community-notice";
import Writing from "../components/Community-write"
import dmap from "../components/dmap";
import Detail from "../components/Detail";
import MyPurchase from "../components/myPage/buy/myPurchase";
import myFavorite from "../components/myPage/favorite/myFavorite";
import mySelling from "../components/myPage/sell/mySelling";
import Edit from "../components/myPage/info/Edit";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/map',
      name: 'dmap',
      component: dmap
    },
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
      path: '/homeAdopt',
      name: 'HomeAdopt',
      component: HomeAdopt
    },
    {
      path: '/centerAdopt',
      name: 'CenterAdopt',
      component: CenterAdopt
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
    {
      path: '/writing',
      name: 'Writing',
      component: Writing
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/myPurchase',
      name: 'MyPurchase',
      component: MyPurchase
    },
    {
      path: '/mySelling',
      name: 'MySelling',
      component: mySelling
    },
    {
      path: '/myFavorite',
      name: 'MyFavorite',
      component: myFavorite
    },
    {
      path: '/editInfo',
      name: 'Edit',
      component: Edit
    },
  ]
})
