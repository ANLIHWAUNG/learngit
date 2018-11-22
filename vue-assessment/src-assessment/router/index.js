import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login'

import homepage from '../components/Homepage/homepage'
import classDetail from '../components/Homepage/classDetail'
import briefIntroduction from '../components/Homepage/briefIntroduction'
import catalog from '../components/Homepage/catalog'
import evaluate from '../components/Homepage/evaluate'
import download from '../components/Homepage/download'
import searchDetail from '../components/Homepage/searchDetail'
import searchClassDetail from '../components/Homepage/searchClassDetail'

import study from '../components/Study/study'
import myClass from '../components/Study/myClass'
import major from '../components/Study/major'

import account from '../components/Account/account'
import shopCart from '../components/Account/shopCart'
import settlement from '../components/Account/settlement'
import payment from '../components/Account/payment'
import orderLists from '../components/Account/orderLists'
import setPassword from '../components/Account/setPassword'
import changeName from '../components/Account/changeName'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/homepage',
      component: homepage
    },
    {
      path: '/classDetail',
      component: classDetail,
      children: [
        {
          path: '/classDetail/briefIntroduction',
          component: briefIntroduction
        },
        {
          path: '/classDetail/catalog',
          component: catalog
        },
        {
          path: '/classDetail/evaluate',
          component: evaluate
        },
        {
          path: '',
          redirect: '/classDetail/briefIntroduction'
        }
      ]
    },
    {
      path: '/download',
      component: download
    },
    {
      path: '/searchDetail',
      name: 'searchDetail',
      component: searchDetail
    },
    {
      path: '/searchClassDetail:id',
      name: 'searchClassDetail',
      component: searchClassDetail
    },
    {
      path: '/study',
      component: study,
      children: [
        {
          path: '/study/myClass',
          component: myClass
        },
        {
          path: '/study/major',
          component: major
        },
        {
          path: '',
          redirect: '/study/myClass'
        }
      ]
    },
    {
      path: '/account',
      component: account
    },
    {
      path: '/shopCart',
      component: shopCart
    },
    {
      path: '/settlement:id',
      name: 'settlement',
      component: settlement
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/orderLists',
      component: orderLists
    },
    {
      path: '/setPassword:id',
      name: 'setPassword',
      component: setPassword
    },
    {
      path: '/changeName:id',
      name: 'changeName',
      component: changeName
    },
    {
      path: '',
      redirect: '/login'
    }
  ]
})
