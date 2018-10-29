<style rel="stylesheet/scss" lang="scss" scoped>
    @charset "utf-8";
    $bgcolor: #D51E12;
    $fontFamily: pingfangSC,
    Arial,
    Helvetica,
    sans-serif;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .container {
        padding: 0 0 60px;
        margin-top: 0;
    }

    .back {
        position: relative;
        width: 100%;
        height: 396rem/$baseFontSize;
        background: url("../../assets/image/homeBac.png") no-repeat center center;
        background-size: 100% 100%;
        .logoBox {
            margin: 0 auto;
            padding-top: 42rem/$baseFontSize;
            text-align: center;
            .logo {
                height: 36rem/$baseFontSize;
                width: 133rem/$baseFontSize;
            }
        }
        .swiper-inner {
            width: 100%;
            position: absolute;
            bottom: 0;
            .swiper-slide {
                background-size: cover;
                background-color: rgba(255, 255, 255, 0);
                height: 276rem/$baseFontSize;
                width: 675rem/$baseFontSize;
                img {
                    height: 276rem/$baseFontSize;
                    width: 670rem/$baseFontSize;
                    border-radius: 10px;
                }
            }
        }
    }

    .product-list-tit {
        padding-left: 44rem/$baseFontSize;
        font-size: 28rem/$baseFontSize;
        color: #3d3d3d;
        font-weight: 600;
        margin: 42rem/$baseFontSize 0 17rem/$baseFontSize 0;
    }

    .product-box {
        text-align: center;
        .product-item {
            display: inline-block;
            width: 670rem/$baseFontSize;
            text-align: left;
        }
        .product-list {
            margin-bottom: 40rem/$baseFontSize;
            border-top: 0.5px solid rgba(175, 175, 175, 0.25);
            box-shadow: 0px 0px 40px 6px rgba(175, 175, 175, 0.25);
            border-radius: 10px;
            .img-box {
                width: 100%;
                height: 336rem/$baseFontSize;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px 10px 0 0;
                }
            }
            .item-pbox {
                padding: 30rem/$baseFontSize 40rem/$baseFontSize;
                .p-title {
                    font-size: 40rem/$baseFontSize;
                    font-weight: 600;
                    line-height: 60rem/$baseFontSize;
                    color: #3d3d3d;
                    margin-bottom: 10rem/$baseFontSize;
                }
                .item-money {
                    color: #ff8f34;
                    font-size: 42rem/$baseFontSize;
                    height: 60rem/$baseFontSize;
                    width: 100%;
                    padding-top: 20rem/$baseFontSize;
                    .promotionFee {
                        display: inline-block;
                        width: 159rem/$baseFontSize;
                        height: 59rem/$baseFontSize;
                        font-size: 24rem/$baseFontSize;
                        line-height: 59rem/$baseFontSize;
                        color: #ff8f34;
                        border: 1px solid #ff8f34;
                        border-radius: 5px;
                        text-align: center;
                    }
                    .d-text,
                    .fl {
                        font-size: 24rem/$baseFontSize;
                        line-height: 60rem/$baseFontSize;
                    }
                    .frtext {
                        font-weight: 600;
                    }
                }
            }
        }
        .product-feature {
            color: #929292;
            .feature-list {
                width: 50%;
                font-size: 24rem/$baseFontSize;
                line-height: 44rem/$baseFontSize;
                .iconLeaf {
                    height: 21rem/$baseFontSize;
                    width: 19rem/$baseFontSize;
                    display: inline-block;
                    vertical-align: middle;
                }
                span {
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .feature-list:nth-child(2n-1) {
                float: left;
            }
            .feature-list:nth-child(2n) {
                float: right;
                text-align: left;
            }
        }
    }

    .bottom {
        display: flex;
        justify-content: center;
        background: #fff;
        box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100rem/$baseFontSize;
        z-index: 100;
        // padding: 0 100rem/$baseFontSize;
        .iconBoxone {
            margin-right: 80rem/$baseFontSize;
        }
        .iconBoxtwo {
            margin-left: 80rem/$baseFontSize;
        }
        .iconBox {
            margin-top: -30rem/$baseFontSize;
            color: #d4d4d4;
            font-size: 22rem/$baseFontSize;
            .select {
                color: #0abf9b;
                margin-top: -14px;
            }
            .noselect {
                margin-top: -14px;
            }
            .icon {
                border-radius: 50%;
                height: 100rem/$baseFontSize;
                width: 100rem/$baseFontSize;
                /*<!--box-shadow:1px -6px 13px -3px rgba(106,106,106,0.25);-->*/
                box-shadow: 2px -27px 20px -6px rgba(209, 209, 209, 0.25);
            }
        }
    }
</style>
<template>
    <div class="container">
        <div class="back">
            <div class="logoBox">
                <img class="logo" src="../../assets/image/logoHome.png">
            </div>
            <div class="swiper-inner">
                <!-- swiper -->
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in bannerList" :key="index">
                        <a :href="item.href">
                            <img :src="item.imageUrl"/>
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="product-list-tit">
            精选产品
        </div>
        <div class="product-box">
            <ul class="product-item">
                <li class="product-list" v-for="(item,index) in productList" @click="getDetail(item)" :key="index">
                    <div class="img-box">
                        <img :src="item.imageUrl"/>
                    </div>
                    <div class="item-pbox">
                        <p class="p-title">
                            <span class="span-title" v-text="item.name"></span>
                        </p>
                        <ul class="product-feature clear">
                            <li class="feature-list" v-for="(item,index) in item.featureList" :key="index">
                                <img class="iconLeaf" src="../../assets/image/leaf.png">
                                <span>{{item.content}}</span>
                            </li>
                        </ul>
                        <p class="item-money clear">
                            <span class="fl promotionFee" v-if="userInfo.userType != 1">推广费{{item.promotionFee}}%</span>
                            <span class="fr">
								<span class="frtext">￥<span v-text="item.price"></span></span><span
                                    class="d-text"> 起</span>
                            </span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <div class="iconBox iconBoxone">
                <img class='icon' src="../../assets/image/selectHome.png">
                <p class="select">首页</p>
            </div>
            <div class="iconBox iconBoxtwo" @click="goPerson">
                <img class='icon' src="../../assets/image/noselectPerson.png">
                <p class="noselect">个人中心</p>
            </div>
        </div>
    </div>
</template>
<script>
    import Util from '../../common/util'
    import Global from '../../common/global'
    import Service from '../../common/service'
    import Store from '../../vuex/index'

    export default {
        data() {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    loop: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                },
                bannerList: [],
                productList: [],
                limit: 10,
                page: 1,
                userInfo: {}
            }
        },
        beforeRouteEnter(to, from, next) {
            Service.user().getinfo({}).then(response => {
                if (response.data) {
                    Util.localStorageUtil.set("access_token", response.data.token);
                    Util.localStorageUtil.set("userInfo", response.data);
                }
                next()
            }, err => {
                next()
            });

        },
        methods: {
            getBannerList() {
                var _this = this;
                Service.sys().getBanner({
                    limit: 100,
                    start: 1
                }, 'home').then(response => {
                    var bannerList = response.data.itemList;
                    _this.bannerList = bannerList
                }, err => {

                })
            },
            getProductList(productType) {
                var _this = this;
                Service.product().getProduct({}, 'hot').then(response => {
                    _this.productList = response.data
                }, err => {

                })
            },
            goPerson() {
                window.location.href = '/user/person/personinfo'
            },
            getDetail(item) {
                window.location.href = '/product/detail/' + item.id
            }
        },
        beforeMount() {
            this.currentPathName = this.$route.name;
            this.activeRoute = this.$route.matched[this.$route.matched.length - 1].path

        },
        mounted() {
            this.getBannerList();
            this.getProductList()
        },
        destroyed() {

        },
        created() {
            this.userInfo = Util.localStorageUtil.get("userInfo")
            document.getElementsByTagName('title')[0].innerHTML = '分享商城';
        }
    }
</script>


