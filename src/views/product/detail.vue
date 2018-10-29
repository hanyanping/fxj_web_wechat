<template>
    <div class="container" @scroll="handleScroll()">
        <mt-header fixed :title="title" v-if="showHeader">
            <router-link to="/" slot="left">
                <mt-button>
                    <img class="home-logo" src="../../assets/image/shouye_icon.png"/>
                </mt-button>
            </router-link>
            <mt-button icon="" slot="right">
                <a href="/user/person/personinfo">
                    <img src="../../assets/image/gerenzhongxin_icon.png"/>
                </a>
            </mt-button>
        </mt-header>
        <img src="../../assets/image/gotop.png" class="go-top" v-if="showGoTop" @click="goTop()">

        </img>

        <div class="product-wechat-tip" v-if="!isFans">
            关注公众号不会迷路，精彩不会错过
            <span class="sure" @click="openPoup()">关注</span>
            <span class="cancel" @click="closeFans"><img src="../../assets/image/close-icon.png"/></span>
        </div>
        <div class="product-detail-box">
            <a class="ab-home-icon detail-icon" v-if="!showHeader" href="/">
                <img src="../../assets/image/home-icon-dark.png" alt="首页"/>
            </a>
            <a class="ab-service-icon detail-icon" v-if="!showHeader" href="javascript:;" @click="popupService=true">
                <img src="../../assets/image/kefu.png" alt="电话客服"/>
            </a>
            <a class="ab-user-icon detail-icon" v-if="!showHeader" href="/user/person/personinfo">
                <img src="../../assets/image/user-icon-dark.png" alt="个人中心"/>
            </a>
            <div class="ab-computer-name">
                {{brand.fullName}}
            </div>
            <div class="product-img"
                 :style="{background: 'url(' + productDetail.imageUrl + ') no-repeat center center' }">

            </div>
            <!--<img class="product-img" :src="productDetail.imageUrl"/>-->
            <div class="product-detail-tit">
                {{productDetail.name}}
            </div>
            <div class="product-duty-box">
                <ul>
                    <li class="duty-list flexBetween" v-for="(item,index) in productDetail.attributeList" :key="index">
                        <div class="duty-list-name">
                            {{item.name}}
                        </div>
                        <div class="duty-list-valueItem">
                            {{item.value}}
                        </div>
                    </li>

                    <li class="duty-list flexBetween">
                        <div class="duty-list-name">
                            出生日期
                        </div>
                        <div class="duty-list-valueItem">
                            <div class="clear" @click="openPicker('datePicker')">
                                <input placeholder="请选择日期" type="datetime" class="list-field-core" readonly="readonly"
                                       v-model="birthday">
                                <img class="time-icon fr" src="../../assets/image/rili.png"/>
                            </div>
                        </div>
                    </li>
                    <li class="duty-list flexBetween clear" v-for="(item,index) in productDetail.optionList"
                        v-if="item.type != 1">
                        <div class="duty-list-name fl" :data-type="item.code">
                            {{item.name}}
                        </div>
                        <div class="duty-list-valueItem fr">
                            <div class="value-list" v-for="(list,index) in item.itemList" :key="index" :index="index"
                                 :name="item.code" @click="choiceDuty(index,item,list)"
                                 v-bind:disabled="dutyIf(item,list)">
                                {{list.name}}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="detail-nav-item flexBetween">
                <li class="detail-nav-list" :class="[navSelectIndex == 1 ? 'active' : '']" @click="btnScrollTo(1)">
                    产品特色
                </li>
                <li class="detail-nav-list" :class="[navSelectIndex == 2 ? 'active' : '']" @click="btnScrollTo(2)">
                    常见问题
                </li>
                <li class="detail-nav-list" :class="[navSelectIndex == 3 ? 'active' : '']" @click="btnScrollTo(3)">
                    投保须知
                </li>
                <li class="detail-nav-list" :class="[navSelectIndex == 4 ? 'active' : '']" @click="btnScrollTo(4)">
                    理赔流程
                </li>
            </ul>
            <div class="detail-content">
                <div class="detail-ts">
                    <div class="detail-ts-tit detail-tit">
                        产品特色
                    </div>
                    <div class="img-ts-box">
                    	<img class="img-list" :src="item.url" v-for="(item,index) in productDetail.imageList" :index="index"/>
                    </div>
                </div>
                <div class="detail-qa">
                    <div class="detail-qa-tit detail-tit">
                        常见问题
                    </div>
                    <ul class="qa-box">
                        <li class="qa-list" v-for="item in qaListLimit">
                            <p class="qa-q">问：{{item.question}}</p>
                            <p class="qa-a">答：{{item.answer}}</p>
                        </li>
                        <div class="qa-more-btn" @click="qaMore()"
                             v-if="qaList.length>3 && qaList.length != qaListLimit.length">
                            查看更多
                        </div>
                    </ul>
                </div>
                <div class="detail-doc">
                    <div class="detail-doc-tit detail-tit">
                        投保须知
                    </div>
                    <ul class="product-doc-box">
                        <li class="doc-list" v-for="(item, index) in productDocList" @click="goDocDetail(item.id)" :index="index">
                            <span class="doc-icon">{{index + 1}}</span>{{item.title}}
                        </li>
                    </ul>
                </div>
                <div class="detail-surrender">
                    <div class="detail-surrender-tit detail-tit">
                        理赔流程
                    </div>
                    <img class="detail-surrender-img" src="../../assets/image/lipei.png"/>
                </div>
            </div>
        </div>
        <mt-datetime-picker ref="datePicker" v-model="dateValue" type="date" :startDate="startDate" :endDate="endDate"
                            year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
                            @confirm="handleChange">
        </mt-datetime-picker>

        <div class="detail-footer flexBetween">
            <div class="poster-bar" @click="openProductPoster()">
                海报
            </div>
            <div class="share-bar" @click="openInviterQr()">
                分享
            </div>
            <div class="money-bar" v-if="userInfo.userType != 1">
                <div class="money">
                    ¥{{productDetail.price}}
                </div>
                <div class="share-money">
                    {{productDetail.commission}}享宝
                </div>
            </div>
            <div class="money-bar-unUser" v-if="userInfo.userType == 1">
                <div class="money">
                    ¥{{productDetail.price}}
                </div>
            </div>
            <div class="buy-bar" @click="goToNext()">
                立即购买
            </div>
        </div>

        <ul class="detail-nav-item flexBetween is-fixed" v-show="isFixed">
            <li class="detail-nav-list" :class="[navSelectIndex == 1 ? 'active' : '']" @click="btnScrollTo(1)">
                产品特色
            </li>
            <li class="detail-nav-list" :class="[navSelectIndex == 2 ? 'active' : '']" @click="btnScrollTo(2)">
                常见问题
            </li>
            <li class="detail-nav-list" :class="[navSelectIndex == 3 ? 'active' : '']" @click="btnScrollTo(3)">
                投保须知
            </li>
            <li class="detail-nav-list" :class="[navSelectIndex == 4 ? 'active' : '']" @click="btnScrollTo(4)">
                理赔流程
            </li>
        </ul>
        <div class="share-bg-box" v-if="inviterQr" @click="closeInviterQr()">
            <img src="../../assets/image/share-bg.png" alt=""/>
        </div>

        <mt-popup v-model="popupService" popup-transition="popup-fade" :closeOnClickModal="false" class="popup-service">
            <div class="popup-service-tit">
                <img src="../../assets/image/tel.png"/>联系客服
            </div>
            <div class="popup-service-content">
                <div class="service-list">
                    <h3>平台规则和使用问题请拨打：</h3>
                    <a href="tel:4008718701">400-871-8701</a>
                </div>
                <div class="service-list">
                    <h3>保险产品问题请拨打：</h3>
                    <a href="tel:4008118899">{{brand.fullName + '&nbsp;' + brand.tel}}</a>
                </div>
            </div>
            <div class="popup-close" @click="popupService=false">

            </div>
        </mt-popup>

        <mt-popup v-model="popupDoc" popup-transition="popup-fade" :closeOnClickModal="false" class="popup-doc">
            <div class="popup-doc-tit">
                {{docDetail.title}}
            </div>
            <div class="popup-doc-content" v-html="docDetail.content"></div>
            <div class="popup-close" @click="popupDoc=false"></div>
        </mt-popup>

        <mt-popup v-model="popupLogin" popup-transition="popup-fade" :closeOnClickModal="false" class="popup-login">
            <div class="popup-login-tit">
                注册登录信息
            </div>
            <div class="popup-login-content">
                <mt-field class="login-list" state="" :disableClear="true" label="" placeholder="请填写真实姓名" type="text"
                          v-model="newUser.name" @blur.native.capture="check('name',newUser)"></mt-field>
                <mt-field state="" :disableClear="true" label="" placeholder="手机号" type="number"
                          v-model="newUser.mobile" @blur.native.capture="check('mobile',newUser)"></mt-field>
                <div class="mint-cell-wrapper">
                    <div class="mint-cell-value">
                        <div class="mint-cell-value is-link">
                            <input type="number" v-model="newUser.code" placeholder="请输入验证码"/>
                        </div>
                        <div class="smsBtn" :class="[unSms == true ? 'active' : '']" @click="getSmsCode()">
                            {{smsText}}
                        </div>
                    </div>
                </div>
                <div class="pact-agree">
                    <input id="pactAgree" type="checkbox" class="agree-checkbox" v-model="newUser.isAgree">
                    <span class="weui-agree-text">
                        <a href="javascript:void(0);">已阅读并同意
                            <span v-on:click="goDocDetail(1)">《分享家会员服务协议》</span>
                    </a>
                    </span>
                </div>
                <div class="register-btn" :class="[canReg == true ? 'active' : '']" @click="submit()">
                    立即提交
                </div>
            </div>

            <div class="popup-close" @click="popupLogin=false"></div>
        </mt-popup>

    </div>

</template>
<script>
    import Service from '../../common/service'
    import Util from '../../common/util'
    import Global from '../../common/global'
    import Patterns from '../../common/patternRules'
    import {Toast} from 'mint-ui'
    import {MessageBox} from 'mint-ui'
    import {Popup} from 'mint-ui'

    let wxConfig = Global.wxConfig
    export default {
        data() {
            return {
                title: '',
                productDetail: [],
                docDetail: {},
                qaList: [],
                productDocList: [],
                dutyList: {},
                brand: {},
                choiceListLen: 0,
                limit: 10,
                qaListLimit: '',
                openQr: false,
                popupDoc: false,
                popupService: false,
                popupLogin: false,
                inviterQr: false,
                whichSubmit: '',
                isFans: 0,
                isFixed: false,
                productId: '',
                navSelectIndex: 1,
                navOffsetTop: 0,
                detailNavBarHeight: 0,
                urlParams: {},
                isChoiceAll: false,
                showHeader: false,
                showGoTop: false,
                disableClear: true,
                birthday: '',
                userInfo: {},
                newUser: {
                    name: '',
                    mobile: '',
                    code: '',
                    isAgree: true
                },
                dutyData: {},
                minData: '',
                dateValue: '',
                startDate: new Date('1900-01-01'),
                endDate: new Date(),
                smsText: '获取验证码',
                unSms: false,
                canReg: false,
                time: 59
            }
        },
        computed: {
            pokerNewUser() {
                return this.newUser
            }
        },
        watch: {
            '$route': 'getProductDetail',
            pokerNewUser: {
                handler(val, oldVal) {
                    if (val.name && val.mobile && val.code) {
                        console.log(val)
                        this.canReg = true
                    } else {
                        this.canReg = false
                    }
                },
                deep: true
            }
        },
        beforeRouteEnter(to, from, next) {
            Service.user().getinfo({}).then(response => {
                Util.localStorageUtil.set("access_token", response.data.token);
                Util.localStorageUtil.set("userInfo", response.data);
                Service.product().getProduct({}, to.params.productId).then(response => {
                    var productDetail = response.data
                    var imgUrl = productDetail.imageUrl
                    var title = productDetail.name
                    var desc = productDetail.introduce
                    wxConfig(to, title, desc, imgUrl)
                    next()
                }, err => {
                    next()
                })
            }, err => {
                next()
            });

        },
        methods: {
            getProductDetail() {
                var _this = this;
                Service.product().getProduct({}, _this.$route.params.productId).then(response => {
                    var productDetail = response.data;
                    console.log(productDetail)
                    //                  console.log(productDetail.optionList);
                    document.getElementsByTagName('title')[0].innerHTML = productDetail.name;
                    _this.productDetail = productDetail;
                    _this.qaList = productDetail.faqList;
                    _this.brand = productDetail.brand
                    //                  console.log(_this.qaList)
                    _this.productDocList = productDetail.clauseList;
                    _this.qaListLimit = productDetail.faqList.slice(0, 3);
                    for (let choiceList of productDetail.optionList) {
                        if (choiceList.type == 1) {
                            var minAge = choiceList.minValue;
                            var maxAge = choiceList.maxValue;
                            var maxDate = '';
                            var today = new Date();
                            var curYear = today.getFullYear();
                            var curDate = today.getDate();
                            if (choiceList.minUnit == 'year') {
                                maxDate = new Date().setFullYear(curYear - minAge)
                            } else {
                                maxDate = new Date().setDate(curDate - minAge)
                            }
                            var minDate = new Date().setFullYear(curYear - maxAge - 1);
                            minDate = new Date(minDate).setDate(new Date(minDate).getDate() + 1);
                            _this.minData = minDate;
                            _this.startDate = new Date(minDate);
                            _this.endDate = new Date(maxDate)
                        } else {
                            this.choiceListLen++
                        }
                    }
                    setTimeout(() => {
                        var navOffsetTop = document.querySelector('.detail-nav-item').offsetTop;
                        _this.navOffsetTop = navOffsetTop
                    }, 13)

                }, err => {

                })
            },
            qaMore() {
                this.qaListLimit = this.qaList
            },
            goDocDetail(docId) {
                Service.product().getDocDetail({}, docId).then(response => {
                    console.log(response)
                    this.popupDoc = true
                    this.docDetail = response.data
                }, err => {

                })
            },
            handleScroll() {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //document.documentElement获取数据
                    var tsOffsetTop = document.querySelector('.detail-ts').offsetTop - this.detailNavBarHeight - 40; //产品特色高度
                    var qaOffsetTop = document.querySelector('.detail-qa').offsetTop - this.detailNavBarHeight - 40; //常见问题高度
                    var docOffsetTop = document.querySelector('.detail-doc').offsetTop - this.detailNavBarHeight - 40; //投保须知高度
                    var surrenderOffsetTop = document.querySelector('.detail-surrender').offsetTop - this.detailNavBarHeight - 40; //理赔流程高度
                    //console.log(scrollTop+ '&'+this.detailNavBarHeight + '&' + this.navOffsetTop + '&' + tsOffsetTop + '&' + qaOffsetTop + '&' + docOffsetTop + "&" + surrenderOffsetTop)
                    if (this.navOffsetTop && scrollTop > this.navOffsetTop) {
                        this.isFixed = true
                        this.showGoTop = true
                    } else {
                        this.isFixed = false
                        this.showGoTop = false
                    }
                    if (scrollTop > 54) {
                        this.showHeader = true
                        this.title = this.productDetail.name
                    } else {
                        this.showHeader = false
                    }
                    if (scrollTop < qaOffsetTop) {
                        this.navSelectIndex = 1
                    } else if (qaOffsetTop <= scrollTop && scrollTop < docOffsetTop) {
                        this.navSelectIndex = 2
                    } else if (docOffsetTop <= scrollTop && scrollTop < surrenderOffsetTop) {
                        this.navSelectIndex = 3
                    } else if (surrenderOffsetTop <= scrollTop) {
                        this.navSelectIndex = 4
                    }
                }, 13);
            },
            closeFans() {
                this.isFans = 1
            },
            goTop() {
                $('html,body').animate({
                    scrollTop: 0
                }, 'normal', 'swing')
            },
            openPoup() {
                window.location.href = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU5ODYwMDk5Ng==&scene=126#wechat_redirect'
            },
            openProductPoster() {
                this.userInfo = Util.localStorageUtil.get("userInfo")
                if (this.userInfo.userType == 1) {
                    this.popupLogin = true
                    this.whichSubmit = 'poster'
                } else {
                    let urlParams = this.urlParams;
                    urlParams.name = this.$router.history.current.name;
                    urlParams.productId = this.$route.params.productId;
                    this.$router.push({
                        name: 'poster',
                        query: urlParams
                    })
                }
            },
            check: function (type, model) {
                let minLength, maxLength;
                if (type == 'name') {
                    minLength = 2,
                        maxLength = 5
                } else if (type == 'mobile') {
                    minLength = 11,
                        maxLength = 11
                }
                if (!model[type]) {
                    Toast({
                        message: '信息不能为空！',
                        duration: 1500,
                        position: 'top',
                    });
                } else if (model[type].length >= minLength && model[type].length <= maxLength) {
                    var on = Patterns[type].test(model[type]);
                    if (!on) {
                        Toast({
                            message: '您输入的信息有误，请重新输入！',
                            duration: 3000,
                            position: 'top',
                        });
                        model[type] = '';

                    }
                } else {
                    Toast({
                        message: '请输入正确的信息！',
                        duration: 1500,
                        position: 'top',
                    });
                    model[type] = '';
                }
            },
            getSmsCode() {
                if (!this.newUser.mobile) {
                    Toast({
                        message: '请输入手机号码！',
                        duration: 1000,
                        position: 'top',
                    });
                    return false
                } else {
                    if (!this.unSms) {
                        Service.user().getRegcode({
                            phone: this.newUser.mobile
                        }).then(response => {
                            this.msgCallback()
                        }, err => {

                        });
                    }
                }
            },
            msgCallback() {
                this.smsText = "59秒后重试";
                this.unSms = true;
                var smsTimer = setInterval(() => {
                    if (this.time > 0) {
                        this.time--;
                        this.smsText = this.time + "秒后重试";
                    }
                    if (this.time == 0) {
                        this.time = 59;
                        clearInterval(smsTimer); //停止计时器
                        this.smsText = "发送验证码";
                        this.unSms = false;
                    }
                }, 1000)
            },
            submit() {
                if (this.canReg) {
                    Service.user().reglogin({
                        phone: this.newUser.mobile,
                        code: parseInt(this.newUser.code),
                        realName: this.newUser.name,
                        shareUserId: this.$route.query.inviterid
                    }).then(response => {
                        console.log(response)
                        Util.localStorageUtil.set("access_token", response.data.token);
                        Util.localStorageUtil.set("userInfo", response.data);
                        this.popupLogin = false
                        if (this.whichSubmit == 'inviter') {
                            this.inviterQr = true
                            var imgUrl = this.productDetail.imageUrl
                            var title = this.productDetail.name
                            var desc = this.productDetail.introduce
                            var to = {
                                name: 'detail'
                            }
                            wxConfig(to, title, desc, imgUrl)
                        } else if (this.whichSubmit == 'poster') {
                            let urlParams = this.urlParams;
                            urlParams.name = this.$router.history.current.name;
                            urlParams.productId = this.$route.params.productId;
                            this.$router.push({
                                name: 'poster',
                                query: urlParams
                            })
                        }
                    }, err => {

                    })

                }

            },
            openInviterQr() {
                this.userInfo = Util.localStorageUtil.get("userInfo")
                if (this.userInfo.userType == 1) {
                    this.popupLogin = true
                    this.whichSubmit = 'inviter'
                } else {
                    this.inviterQr = true
                }
            },
            closeInviterQr() {
                this.inviterQr = false
            },
            openPicker(picker) {
                document.body.style.overflow = 'auto'; //解决vue弹出层touch穿透，主页面跟随抖动问题
                if (this.birthday) {
                    this.dateValue = new Date(this.birthday)
                } else {
                    this.dateValue = new Date('1978-06-15')
                }
                this.$refs[picker].open()
            },
            handleChange(value) {
                document.body.style.overflow = 'visible'; //解决vue弹出层touch穿透
                this.birthday = Util.formatDate.format(new Date(value));
                console.log(this.birthday)
                console.log(Util.formatDate.getAge(this.birthday))
                this.$set(this.dutyList, 'age', Util.formatDate.getAge(this.birthday))
                if (this.isChoiceAll) {
                    this.getProductPrice()
                }
            },
            btnScrollTo(navSelectIndex) {
                var tsOffsetTop = document.querySelector('.detail-ts').offsetTop - this.detailNavBarHeight; //产品特色高度
                var qaOffsetTop = document.querySelector('.detail-qa').offsetTop - this.detailNavBarHeight; //常见问题高度
                var docOffsetTop = document.querySelector('.detail-doc').offsetTop - this.detailNavBarHeight; //投保须知高度
                var surrenderOffsetTop = document.querySelector('.detail-surrender').offsetTop - this.detailNavBarHeight; //理赔流程高度
                var targetTop;
                //console.log(tsOffsetTop + '&' + qaOffsetTop + '&' + docOffsetTop + "&" + surrenderOffsetTop)
                if (navSelectIndex == 1) {
                    targetTop = tsOffsetTop
                } else if (navSelectIndex == 2) {
                    targetTop = qaOffsetTop
                } else if (navSelectIndex == 3) {
                    targetTop = docOffsetTop
                } else if (navSelectIndex == 4) {
                    targetTop = surrenderOffsetTop
                }

                $('html,body').animate({
                    scrollTop: targetTop
                }, 'normal', 'swing')
            },
            dutyIf(item, list) {
                if (list.condition) {
                    let template = list.condition.format(this.dutyList)
                    let result = this.evil(template)
                    if (!result && list.value && list.value == this.dutyList[item.code]) {
                        var name = item.code
                        var nodes = document.getElementsByName(name);
                        for (let i = 0; i < nodes.length; i++) {
                            $(nodes[i]).removeClass('active')
                        }
                        this.$delete(this.dutyList, item.code)
                    }
                    return !result
                } else {
                    return false
                }
            },
            evil(fn) {
                var Fn = Function
                return new Fn('return ' + fn)()
            },
            choiceDuty(index, item, list) {
                var _this = this;
                var name = item.code
                var nodes = document.getElementsByName(name);
                if (!this.birthday) {
                    Toast({
                        message: '请先选择出身日期！',
                        duration: 1500,
                    });
                    return false
                } else if (this.birthday) {
                    if (!this.dutyIf(item, list)) {
                        for (let i = 0; i < nodes.length; i++) {
                            $(nodes[i]).removeClass('active')
                        }
                        $(nodes[index]).addClass('active');
                        this.$set(_this.dutyList, name, list.value)

                        var dutyList = Object.values(_this.dutyList);

                        if (dutyList.length - 1 >= _this.choiceListLen) {
                            this.isChoiceAll = true;
                            this.getProductPrice()
                        } else {
                            this.isChoiceAll = false
                        }
                    } else {

                    }
                }
            },
            getProductPrice() {
                let dutyList = $.extend({}, {
                    birthday: this.birthday
                }, this.dutyList); //此方法不改变原数组
                Service.product().getProductPrice({
                    options: dutyList,
                    productId: this.$route.params.productId
                }).then(response => {
                    console.log(response)
                    this.productDetail.price = response.data.price
                    this.productDetail.commission = response.data.commission
                }, err => {

                })
            },
            goToNext() {
                if (!this.birthday) {
                    Toast({
                        message: '请选择出身日期！',
                        duration: 1500,
                    });
                } else if (!this.isChoiceAll) {
                    Toast({
                        message: '请选择保障内容！',
                        duration: 1500,
                    });
                } else {
//                  Service.user().getLoginCode({}).then(response => {
//                      console.log(response)
//                      if (response.errorCode == 0) {
//                          let urlParams = $.extend({}, {
//                              inviterid: this.urlParams.inviterid,
//                              loginCode: response.data
//                          }, this.dutyList); //此方法不改变原数组
//                          console.log(Util.httpParamSerialize(urlParams))
//                          let paramSer = Util.httpParamSerialize(urlParams)
//                          let nextUrl = '//' + Global.clientInfo.twoLevel + '/product/healthconfirm/' + this.$route.params.productId + '?' + paramSer
//                          window.location.href = nextUrl
//                      }
//                  }, err => {
//
//                  })
                    Toast({
                        message: '平台备案中，敬请期待！',
                        duration: 2000,
                    });
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
            var detailNavBarHeight = document.querySelector('.detail-nav-item').clientHeight;
            this.detailNavBarHeight = detailNavBarHeight
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll, true);
            clearInterval(this.timer)
            clearInterval(this.smsTimer)
        },
        created() {
            this.getProductDetail();
            this.urlParams = this.$route.query
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @charset "utf-8";
    $baseFontSize: 75;
    .container {
        margin-top: 0;
    }

    .go-top {
        display: block;
        position: fixed;
        width: 92rem/$baseFontSize;
        height: 92rem/$baseFontSize;
        bottom: 170rem/$baseFontSize;
        right: 40rem/$baseFontSize;
        z-index: 100;
        border-radius: 50%;
    }

    .product-detail-box {
        position: relative;
        .detail-icon {
            position: absolute;
            top: 28rem/$baseFontSize;
            width: 75rem/$baseFontSize;
            height: 75rem/$baseFontSize;
            opacity: .8;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .ab-home-icon {
            left: 40rem/$baseFontSize;
        }
        .ab-service-icon {
            right: 156rem/$baseFontSize;
        }
        .ab-user-icon {
            right: 40rem/$baseFontSize;
        }
        .ab-computer-name {
            position: absolute;
            top: 343rem/$baseFontSize;
            right: 0;
            width: 158rem/$baseFontSize;
            height: 44rem/$baseFontSize;
            background-color: #000000;
            border-radius: 22rem/$baseFontSize 0px 0px 22rem/$baseFontSize;
            opacity: .5;
            color: #FFFFFF;
            font-size: 24rem/$baseFontSize;
            line-height: 44rem/$baseFontSize;
            text-align: center;
        }
    }

    .product-wechat-tip {
        height: 80rem/$baseFontSize;
        background-color: #0abf9b;
        color: #FFFFFF;
        padding-left: 42rem/$baseFontSize;
        font-size: 24rem/$baseFontSize;
        line-height: 80rem/$baseFontSize;
        .sure {
            display: inline-block;
            width: 118rem/$baseFontSize;
            height: 52rem/$baseFontSize;
            background: #FAFAFA;
            color: #00a399;
            line-height: 52rem/$baseFontSize;
            border-radius: 4px;
            text-align: center;
            margin-left: 98rem/$baseFontSize;
            margin-right: 36rem/$baseFontSize;
        }
        .cancel {
            display: inline-block;
            width: 24rem/$baseFontSize;
            height: 24rem/$baseFontSize;
            position: relative;
            top: 2px;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }

    .product-detail-box {
        .product-img {
            width: 100%;
            height: 442rem/$baseFontSize;
            background-size: cover !important;
        }
        .product-detail-tit {
            font-size: 36rem/$baseFontSize;
            line-height: 60rem/$baseFontSize;
            font-weight: 600;
            padding-left: 40rem/$baseFontSize;
            margin: 10px 0;
        }
        .product-duty-box {
            .duty-list {
                padding: 0 40rem/$baseFontSize;
                font-size: 28rem/$baseFontSize;
                line-height: 60rem/$baseFontSize;
                margin-bottom: 30rem/$baseFontSize;
                .duty-list-name {
                    color: #929292;
                    min-width: 250rem/$baseFontSize;;
                }
                .duty-list-valueItem {
                    color: #3d3d3d;
                    width: 500rem/$baseFontSize;
                    max-width: 500rem/$baseFontSize;
                    text-align: right;
                    .list-field-core {
                        border: 0;
                        width: 174rem/$baseFontSize;
                        line-height: 60rem/$baseFontSize;
                        color: #3d3d3d;
                    }
                    .time-icon {
                        width: 42rem/$baseFontSize;
                        height: 42rem/$baseFontSize;
                        margin-top: 9rem/$baseFontSize;
                    }
                    .value-list {
                        display: inline-block;
                        width: auto;
                        height: 60rem/$baseFontSize;
                        padding: 0 26rem/$baseFontSize;
                        background-color: #dcdddd;
                        border-radius: 5px;
                        text-align: center;
                        color: #3D3D3D;
                        font-weight: 600;
                        margin-left: 28rem/$baseFontSize;
                        margin-bottom: 8px;
                        &[disabled] {
                            opacity: .5;
                            background-color: #dcdddd;
                        }
                    }
                }
                .active {
                    background-color: #0abf9b !important;
                    color: #FFFFFF !important;
                }
            }
        }
        .detail-tc {
            width: 100%;
            height: 10px;
            background-color: #FAFAFA;
        }
        .detail-content {
            padding-bottom: 100rem/$baseFontSize;
            .detail-tit {
                position: relative;
                font-size: 30rem/$baseFontSize;
                line-height: 120rem/$baseFontSize;
                color: #0abf9b;
                padding-left: 40rem/$baseFontSize;
                font-weight: 600;
                text-align: center;
                margin-top: 30rem/$baseFontSize;
                &::before {
                    content: '';
                    position: absolute;
                    left: 304rem/$baseFontSize;
                    top: 54rem/$baseFontSize;
                    width: 14rem/$baseFontSize;
                    height: 14rem/$baseFontSize;
                    background: #0abf9b;
                    border-radius: 50%;
                }
                &::after {
                    content: '';
                    position: absolute;
                    right: 266rem/$baseFontSize;
                    top: 54rem/$baseFontSize;
                    width: 14rem/$baseFontSize;
                    height: 14rem/$baseFontSize;
                    background: #0abf9b;
                    border-radius: 50%;
                }
            }
            .img-ts-box{
                img {
                    display: block;
                    border: 0;
                    margin: 0 auto;
                    width: 670rem/$baseFontSize;
                    box-shadow: 0px 0px 40px 6px rgba(175, 175, 175, 0.25);
                    border-radius: 15px;
                    height: auto;
                    margin-bottom: 38rem/$baseFontSize;
                    &:first-child {
                        width: 100%;
                        box-shadow:none;
                        border-radius:0;
                    }
                    &:nth-child(2) {
                        box-shadow:none;
                        border: solid 1px rgba(10, 191, 156, 0.32);
                    }
                    &:last-child {
                        width: 100%;
                        box-shadow:none;
                        border-radius:0;
                    }
                }
            }
            .qa-box {
                margin: 0 auto;
                width: 670rem/$baseFontSize;
                padding-bottom: 40rem/$baseFontSize;
                box-shadow: 0px 0px 40px 6px rgba(175, 175, 175, 0.25);
                border-radius: 10px;
                padding-top: 26rem/$baseFontSize;
                .qa-list {
                    margin-bottom: 30rem/$baseFontSize;
                    padding: 0 30rem/$baseFontSize;
                    .qa-q {
                        font-size: 30rem/$baseFontSize;
                        line-height: 60rem/$baseFontSize;
                        color: #3d3d3d;
                        margin-bottom: 6px;
                        padding-left: 60rem/$baseFontSize;
                        font-weight: 600;
                        background: url(../../assets/image/Q.png) left 15rem/$baseFontSize no-repeat;
                        background-size: 26rem/$baseFontSize 26rem/$baseFontSize;
                    }
                    .qa-a {
                        font-size: 28rem/$baseFontSize;
                        line-height: 40rem/$baseFontSize;
                        color: #929292;
                        padding-left: 60rem/$baseFontSize;
                        background: url(../../assets/image/A.png) left 6rem/$baseFontSize no-repeat;
                        background-size: 26rem/$baseFontSize 26rem/$baseFontSize;
                    }
                }
                .qa-more-btn {
                    width: 180rem/$baseFontSize;
                    height: 58rem/$baseFontSize;
                    margin: 0 auto;
                    border-radius: 5px;
                    border: solid 1px #0abf9b;
                    font-size: 24rem/$baseFontSize;
                    color: #0abf9b;
                    text-align: center;
                    line-height: 58rem/$baseFontSize;
                }
            }
            .product-doc-box {
                margin: 0 auto;
                width: 670rem/$baseFontSize;
                box-shadow: 0px 0px 40px 6px rgba(175, 175, 175, 0.25);
                border-radius: 10px;
                .doc-list {
                    .doc-icon {
                        display: inline-block;
                        text-align: center;
                        width: 36rem/$baseFontSize;
                        height: 36rem/$baseFontSize;
                        border-radius: 50%;
                        line-height: 36rem/$baseFontSize;
                        background-image: linear-gradient(-45deg, #00b4ff 0%, #0abf9b 100%), linear-gradient(#a4a4a4, #a4a4a4);
                        background-blend-mode: normal, normal;
                        font-weight: 600;
                        color: #FFFFFF;
                        margin-right: 26rem/$baseFontSize;
                    }
                    font-size: 30rem/$baseFontSize;
                    line-height: 60rem/$baseFontSize;
                    color: #3d3d3d;
                    font-weight: 600;
                    padding: 15rem/$baseFontSize 30rem/$baseFontSize;
                    margin-right: 30rem/$baseFontSize;
                    background: url(../../assets/image/goline.png) right center no-repeat;
                    background-size: 40rem/$baseFontSize 40rem/$baseFontSize;
                }
            }
            .detail-surrender-img {
                display: block;
                margin: 0 auto 70rem/$baseFontSize;
                width: 670rem/$baseFontSize;
                box-shadow: 0px 0px 40px 6px rgba(175, 175, 175, 0.25);
                height: auto;
                border-radius: 10px;
            }
        }
    }

    .detail-nav-item {
        padding: 0 40rem/$baseFontSize;
        border-bottom: solid 1px #eeeeee;
        box-sizing: border-box;
        &.is-fixed {
            top: 40px;
            right: 0;
            left: 0;
            position: fixed;
            z-index: 2;
            background-color: #FFFFFF;
        }
        .detail-nav-list {
            font-size: 30rem/$baseFontSize;
            line-height: 100rem/$baseFontSize;
            color: #929292;
            font-weight: 600;
            &:active {
                opacity: 0.4;
                transition: all 0.4s ease-out;
                transition-property: transform, opacity, -webkit-transform;
            }
            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 30rem/$baseFontSize;
                width: 52rem/$baseFontSize;
                height: 2px;
                background: #0abf9b;
                transform: scale(0, 1);
                transition: transform .3s ease;
            }
        }
        .active {
            position: relative;
            color: #0abf9b;
        }
        .active::before {
            transition: all .2s ease-in-out;
            transform: scale(1, 1);
        }
    }

    .detail-footer {
        bottom: 0;
        right: 0;
        left: 0;
        position: fixed;
        z-index: 1;
        height: 100rem/$baseFontSize;
        background-color: #FFFFFF;
        border-top: solid 1px #eeeeee;
        font-size: 28rem/$baseFontSize;
        line-height: 100rem/$baseFontSize;
        padding-left: 14rem/$baseFontSize;
        text-align: center;
        .poster-bar,
        .share-bar {
            display: inline-block;
            width: 136rem/$baseFontSize;
            max-width: 136rem/$baseFontSize;
            border-right: 6rem/$baseFontSize solid #0abf9b;
            height: 30rem/$baseFontSize;
            line-height: 30rem/$baseFontSize;
            margin-top: 35rem/$baseFontSize;
            color: #0abf9b;
        }
        .money-bar {
            width: 245rem/$baseFontSize;
            color: #ff8f34;
            .money {
                font-size: 42rem/$baseFontSize;
                line-height: 42rem/$baseFontSize;
                font-weight: 600;
                padding: 14rem/$baseFontSize 0 10rem/$baseFontSize 0;
            }
            .share-money {
                font-size: 24rem/$baseFontSize;
                line-height: 24rem/$baseFontSize;
            }
        }
        .money-bar-unUser {
            .money {
                width: 245rem/$baseFontSize;
                color: #ff8f34;
                font-size: 42rem/$baseFontSize;
                line-height: 100rem/$baseFontSize;
                font-weight: 600;
            }
        }
        .buy-bar {
            width: 234rem/$baseFontSize;
            height: 101%;
            color: #FFFFFF;
            background-image: linear-gradient(90deg, #0abf9b 0%, #14baff 100%), linear-gradient(#ffffff, #ffffff);
            background-blend-mode: normal, normal;
            position: relative;
            top: -1px;
            bottom: 0;
            &:active {
                opacity: .6;
            }
        }
    }

    .swiper-inner {
        width: 100%;
        height: 400px;
        padding-top: 50px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
    }

    .share-bg-box {
        z-index: 2018;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background: #000;
        overflow: hidden;
        img {
            display: block;
            border: none;
            width: 100%;
            height: auto;
        }
    }

    .popup-doc {
        top: 46%;
        width: 670rem/$baseFontSize;
        height: 1005rem/$baseFontSize;
        background-color: #ffffff;
        border-radius: 10px;
        .popup-doc-tit {
            font-size: 36rem/$baseFontSize;
            color: #3d3d3d;
            line-height: 60rem/$baseFontSize;
            font-weight: 600;
            text-align: center;
            margin-top: 50rem/$baseFontSize;
        }
        .popup-doc-content {
            width: 600rem/$baseFontSize;
            height: 835rem/$baseFontSize;
            overflow-x: hidden;
            margin: 0 auto;
            font-size: 28rem/$baseFontSize;
            color: #3d3d3d;
            line-height: 48rem/$baseFontSize;
            text-indent: 2em;
        }
    }

    .popup-service {
        top: 46%;
        width: 670rem/$baseFontSize;
        border-radius: 10px;
        .popup-service-tit {
            img {
                display: inline-block;
                width: 32rem/$baseFontSize;
                height: 32rem/$baseFontSize;
                margin-right: 14px;
            }
            font-size: 36rem/$baseFontSize;
            color: #FFFFFF;
            line-height: 88rem/$baseFontSize;
            font-weight: 600;
            text-align: center;
            background-color: #0abf9b;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        .popup-service-content {
            overflow: hidden;
            .service-list {
                width: 100%;
                border-bottom: solid 1px #e5e5e5;
                margin-top: 60rem/$baseFontSize;
                padding-bottom: 50rem/$baseFontSize;
                &:last-child {
                    border: 0;
                }
                h3 {
                    font-size: 30rem/$baseFontSize;
                    color: #3d3d3d;
                    line-height: 60rem/$baseFontSize;
                    font-weight: 600;
                    text-align: center;
                    margin-bottom: 12px;
                }
                a {
                    font-size: 30rem/$baseFontSize;
                    line-height: 60rem/$baseFontSize;
                    color: #0abf9b;
                    display: block;
                    text-align: center;
                }
            }
        }
    }

    .popup-login {
        top: 46%;
        width: 470rem/$baseFontSize;
        border-radius: 10px;
        padding: 0 61rem/$baseFontSize;
        .popup-login-tit {
            font-size: 36rem/$baseFontSize;
            color: #0abf9b;
            line-height: 136rem/$baseFontSize;
            font-weight: 600;
        }
        .popup-login-content {
            .mint-cell-wrapper {
                align-items: center;
                box-sizing: border-box;
                display: flex;
                font-size: 16px;
                line-height: 1;
                min-height: 48px;
                overflow: hidden;
                padding: 0 10px;
                width: 100%;
                .is-link {
                    width: 245rem/$baseFontSize;
                    font-size: 16px;
                    line-height: 25px;
                    margin-right: 2px;
                    input {
                        font-size: 16px;
                        line-height: 25px;
                        width: 100%;
                    }
                }
                .smsBtn {
                    width: 214rem/$baseFontSize;
                    font-size: 14px;
                    line-height: 39px;
                    text-align: center;
                    background-color: #0abf9b;
                    border-radius: 10px;
                    color: #FFFFFF;
                    &.active {
                        background-color: #dcdddd;
                    }
                }
            }
            .register-btn {
                width: 255rem/$baseFontSize;
                height: 74rem/$baseFontSize;
                background-color: #dcdddd;
                border-radius: 37px;
                font-size: 32rem/$baseFontSize;
                line-height: 74rem/$baseFontSize;
                text-align: center;
                margin: 0 auto;
                color: #FFFFFF;
                margin-bottom: 40rem/$baseFontSize;
                &.active {
                    background-image: linear-gradient(90deg, #0abf9b 0%, #14baff 100%), linear-gradient(#ffffff, #ffffff);
                    background-blend-mode: normal, normal;
                }
                &:active {
                    opacity: .6;
                }
            }
        }
    }

    .popup-close {
        position: absolute;
        left: 50%;
        margin-left: -27rem/$baseFontSize;
        bottom: -90rem/$baseFontSize;
        width: 54rem/$baseFontSize;
        height: 54rem/$baseFontSize;
        background: url(../../assets/image/close_icon.png) center center;
        background-size: 100% 100%;
    }

    .pact-agree {
        padding: 30rem/$baseFontSize 0rem/$baseFontSize;
        height: auto;
        .agree-checkbox {
            -webkit-appearance: none;
            appearance: none;
            border: 1px solid #D1D1D1;
            background-color: #fff;
            border-radius: 3px;
            width: 32rem/$baseFontSize;
            height: 32rem/$baseFontSize;
            position: relative;
            vertical-align: 0;
            top: 2px;
        }
        .agree-checkbox:checked:before {
            vertical-align: middle;
            text-decoration: inherit;
            content: "\2714";
            color: #0abf9b;
            font-size: 26rem/$baseFontSize;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -48%) scale(0.73);
            -webkit-transform: translate(-50%, -48%) scale(0.73);
        }
        span {
            position: relative;
        }
        a {
            font-size: 24rem/$baseFontSize;
            line-height: 36rem/$baseFontSize;
            color: #3D3D3D;
            span {
                color: #0068b6;
            }
        }
    }
</style>