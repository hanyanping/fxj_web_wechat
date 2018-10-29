// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入插件与第三方库
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import "../node_modules/font-awesome/css/font-awesome.min.css";
import {Toast} from 'mint-ui';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Util from './common/util'
import Service from './common/service'
import Global from './common/global'
import Store from './vuex/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */);

Vue.use(MintUI);
/* eslint-disable no-new */
let wxConfig = Global.wxConfig

router.beforeEach((to, from, next) => {
    let accessToken = Util.localStorageUtil.get('access_token');
    let userInfo = Util.localStorageUtil.get('userInfo')
    if (to.query.inviterid) {
        Util.localStorageUtil.set('inviterid', to.query.inviterid)
    }

    if (to.matched.length === 0) {
        next('/')
    } else if (!accessToken) {
        Service.user().getToken({}).then(
            response => {
                if (response) {
                    Util.localStorageUtil.set("access_token", response.data);
                    if (to.query && to.query.code) {
                        var inviterid = '';
                        if (to.query.inviterid) {
                            inviterid = to.query.inviterid;
                        }
                        Service.user().getUserInfo({
                            code: to.query.code,
                            userId: inviterid
                        }).then(response => {
                            Util.localStorageUtil.set("access_token", response.data.token);
                            Util.localStorageUtil.set("userInfo", response.data);
                            next()
                        }, err => {
                        });
                    } else {
                        next()
                    }
                }
            },
            err => {
                next()
            }
        );
    } else {
        if (to.query && to.query.code && !userInfo) {
            var inviterid = ''
            if (to.query.inviterid) {
                inviterid = to.query.inviterid;
            }
            Service.user().getUserInfo({
                code: to.query.code,
                userId: inviterid
            }).then(response => {
                Util.localStorageUtil.set("access_token", response.data.token);
                Util.localStorageUtil.set("userInfo", response.data);
                next()
            }, err => {
                next()
            });
        } else {
            next()
        }
    }
    if (to.name == 'detail' || to.name == 'personlist') {

    } else {
        wxConfig(to)
    }

});

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
});