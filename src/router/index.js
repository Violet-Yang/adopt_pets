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
import NoticeBoard from "../components/community/notice/NoticeBoard"
import WriteNotice from "../components/community/notice/Write"
import CatBoard from "../components/community/board/CatBoard";
import DogBoard from "../components/community/board/DogBoard";
import EtcBoard from "../components/community/board/EtcBoard";

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
      path: '/noticeBoard',
      name: 'NoticeBoard',
      component: NoticeBoard
    },
    {
      path: '/dogBoard',
      name: 'DogBoard',
      component: DogBoard
    },
    {
      path: '/catBoard',
      name: 'CatBoard',
      component: CatBoard
    },
    {
      path: '/etcBoard',
      name: 'EtcBoard',
      component: EtcBoard
    },
    {
      path: '/writeNotice',
      name: 'WriteNotice',
      component: WriteNotice
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
