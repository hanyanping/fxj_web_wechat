import Vue from 'vue'

import Util from '../common/util'
import Filters from '../common/filter'

import Router from 'vue-router'


import Home from '@/views/home/Home'

import Detail from '@/views/product/detail'
import HealthConfirm from '@/views/product/healthconfirm'
import InfoWrite from '@/views/product/infowrite'
import PolicyConfirm from '@/views/product/policyconfirm'
import UniversalDoc from '@/views/product/universaldoc'

import PaySuccess from '@/views/pay/success'
import Result from '@/views/pay/result'

import activityPoster from '@/views/activity/poster'

import Login from '@/views/user/login'
import Loginone from '@/views/user/loginone'
import loginsucess from '@/views/user/loginsucess'
import personlist from '@/views/user/invited/personlist'
import personinfo from '@/views/user/person/personinfo'
import infodetail from '@/views/user/person/infodetail'
import personrule from '@/views/user/person/personrule'
import orderlist from '@/views/user/order/orderlist'
import orderdetail from '@/views/user/order/orderdetail'
import apply from '@/views/user/putforward/apply'
import applysucess from '@/views/user/putforward/applysucess'
import bindbankcard from '@/views/user/putforward/bindbankcard'
import enjoytreasure from '@/views/user/putforward/enjoytreasure'
import enjoydetail from '@/views/user/putforward/enjoydetail'
import treasurestrate from '@/views/user/treasurestrate'
import tixianrule from '@/views/user/tixianrule'
import invitedposter from '@/views/activity/invitedposter'
import helpcenter from '@/views/user/person/helpcenter'
import warranty from '@/views/user/order/warranty'

Vue.use(Router);

Object.keys(Filters).forEach((k) => Vue.filter(k, Filters[k]));
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/user/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/user/treasurestrate',
            name: 'treasurestrate',
            component: treasurestrate
        },
        {
            path: '/activity/invitedposter',
            name: 'invitedposter',
            component: invitedposter
        },
        {
            path: '/user/tixianrule',
            name: 'tixianrule',
            component: tixianrule
        },
        {
            path: '/user/loginone',
            name: 'loginone',
            component: Loginone
        },
        {
            path: '/product/detail/:productId',
            name: 'detail',
            component: Detail
        },
        {
            path: '/product/universaldoc/:docId',
            name: 'universaldoc',
            component: UniversalDoc
        },
        {
            path: '/product/healthconfirm/:productId',
            name: 'healthconfirm',
            component: HealthConfirm
        },
        {
            path: '/product/infowrite/:productId',
            name: 'infowrite',
            component: InfoWrite
        },
        {
            path: '/product/policyconfirm',
            name: 'policyconfirm',
            component: PolicyConfirm
        },
        {
            path: '/pay/success/:result',
            name: 'success',
            component: PaySuccess
        },
        {
            path: '/pay/result',
            name: 'result',
            component: Result
        },
        {
            path: '/activity/poster/:target',
            name: 'poster',
            component: activityPoster
        },

        {
            path: '/user/person/personinfo',
            name: 'personinfo',
            component: personinfo
        },
        {
            path: '/user/person/helpcenter',
            name: 'helpcenter',
            component: helpcenter
        },
        {
            path: '/user/loginsucess',
            name: 'loginsucess',
            component: loginsucess,
        },
        {
            path: '/user/invited/personlist',
            name: 'personlist',
            component: personlist,
        },
        {
            path: '/user/person/personrule',
            name: 'personrule',
            component: personrule,
        },
        {
            path: '/user/order/orderdetail',
            name: 'orderdetail',
            component: orderdetail,
        },
        {
            path: '/user/order/warranty',
            name: 'warranty',
            component: warranty,
        },
        {
            path: '/user/order/orderlist',
            name: 'orderlist',
            component: orderlist,
        },
        {
            path: '/user/person/infodetail',
            name: 'infodetail',
            component: infodetail,
        },
        {
            path: '/user/putforward/apply',
            name: 'apply',
            component: apply,
        },
        {
            path: '/user/putforward/applysucess',
            name: 'applysucess',
            component: applysucess,
        },
        {
            path: '/user/putforward/bindbankcard',
            name: 'bindbankcard',
            component: bindbankcard,
        },
        {
            path: '/user/putforward/enjoytreasure',
            name: 'enjoytreasure',
            component: enjoytreasure,
        },
        {
            path: '/user/putforward/enjoydetail',
            name: 'enjoydetail',
            component: enjoydetail,
        }

    ]
})


