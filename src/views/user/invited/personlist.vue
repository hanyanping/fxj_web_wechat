<style rel="stylesheet/scss" lang="scss" scoped>
    $bgcolor: #D51E12;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .iconInfo {
        width: 100%;
        height: 383rem/$baseFontSize;
        background: url("../../../assets/image/personBac.png") no-repeat center center;
        background-size: 100% 100%;
        /*background-size: cover;*/
        position: relative;
        color: #fff;
        .speadInfoTop {
            width: 185rem/$baseFontSize;
            height: 52rem/$baseFontSize;
            line-height: 52rem/$baseFontSize;
            position: absolute;
            background: #fff;
            border-radius: 13px 0 0 13px;
            color: #000;
            right: 0;
            bottom: 76rem/$baseFontSize;
            font-weight: 700;
            .borderRed {
                border-radius: 50%;
                background: #e82600;
                color: #fff;
                display: inline-block;
                height: 36rem/$baseFontSize;
                width: 36rem/$baseFontSize;
                line-height: 36rem/$baseFontSize;
                text-align: center;
                margin: 0 6px;
            }
            .borderSpan {

            }
        }
    }

    .iconInfoBottom {
        .lineWeight {
            line-height: 66rem/$baseFontSize;
            font-weight: 900;
            .backline {
                display: inline-block;
                vertical-align: middle;
                height: 15px;
                width: 3px;
                background: #dcdddd;
                border-radius: 3px;
            }
        }
        .money {
            font-size: 32rem/$baseFontSize;
            font-weight: 600;
            line-height: 32rem/$baseFontSize;
        }
        .moneyExplain {
            font-size: 12px;
            color: #929292;
        }
    }

    .infoList {
        background: #fff;
        margin: 10px 0;
        padding: 15px 20px;
        text-align: center;
        color: #3d3d3d;
        .xianbaoImg {
            height: 35px;
            width: 35px;
            margin-bottom: 6px;
        }
    }

    .order {
        padding: 0 20px;
        background: #fff;
        .orderBox {
            background: #fff;
            position: relative;
            top: -38rem/$baseFontSize;
            padding: 50rem/$baseFontSize 0;
            border-radius: 10px;
            box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
            text-align: center;
            .moneyExplain {
                font-size: 12px;
                padding-top: 6px;
                color: #636363;
            }
        }
    }

    .personBox {
        padding: 26rem/$baseFontSize 0 40rem/$baseFontSize 40rem/$baseFontSize;
        .nodataBox {
            text-align: center;
            img {
                height: 240rem/$baseFontSize;
                width: 240rem/$baseFontSize;
                margin-top: 50rem/$baseFontSize;
            }
            p {
                margin: 26rem/$baseFontSize 0;
                text-align: center;
                font-size: 24rem/$baseFontSize;
                font-weight: normal;
                font-stretch: normal;
                line-height: 48rem/$baseFontSize;
                color: #929292;
            }
        }
        .personTitle {
            color: #3d3d3d;
            font-size: 30rem/$baseFontSize;
        }
        .flBox {
            width: 156rem/$baseFontSize;
            height: 195rem/$baseFontSize;
            border: solid 1px #dcdddd;
            border-radius: 10px;
            margin-right: 14rem/$baseFontSize;
            padding-top: 35rem/$baseFontSize;
            text-align: center;
            margin-top: 26rem/$baseFontSize;
            position: relative;
        }
        .nickurl {
            height: 92rem/$baseFontSize;
            width: 92rem/$baseFontSize;
            border-radius: 50%;
        }
        .vipicon {
            position: absolute;
            top: 22rem/$baseFontSize;
            left: 22rem/$baseFontSize;
            height: 36rem/$baseFontSize;
            width: 36rem/$baseFontSize;
        }
        .nickName {
            color: #3d3d3d;
            font-size: 24rem/$baseFontSize;
            padding-top: 20rem/$baseFontSize;
        }
    }

    .buttonBox {
        position: fixed;
        bottom: 0;
        height: 100rem/$baseFontSize;
        width: 100%;
        color: #fff;
        font-size: 28rem/$baseFontSize;
        line-height: 100rem/$baseFontSize;
        background: #0abf9b;
        text-align: center;
        .buttonText {
            display: inline-block;
            width: 49%;
        }
        .bottonRight {
            /*margin-left: 50%;*/
            border-left: 1px solid #eeeeee;
        }
    }

    .srcoll {
        margin-bottom: 100rem/$baseFontSize;
    }

    .zhegai {
        position: fixed;
        background: rgba(0, 0, 0, 0.6);
        height: 100vh;
        z-index: 105;
        width: 100%;
        text-align: center;
        .zhegaiIcon {
            margin: 0 auto;
            width: 100%;
        }
    }
</style>
<template>
    <div style="height: 100vh;">
        <div class="speadInfo">
            <div v-if="isShow" class="zhegai" @click="hideZhegai">
                <img class='zhegaiIcon' src="../../../assets/image/share-bg.png">
            </div>
            <div class="iconInfo">
                <div class="speadInfoTop" @click="goStrategy">
                    <span class="borderRed">?</span>
                    <span class="borderSpan">享宝攻略</span>
                </div>
            </div>
            <div class="order">
                <div class="orderBox flexAround iconInfoBottom">
                    <div style="text-align: center;">
                        <p class="money">{{peopleNumber}}</p>
                        <p class="moneyExplain">累计邀请(人)</p>
                    </div>
                    <div class="lineWeight"><span class="backline"></span></div>
                    <div style="text-align: center;">
                        <p class="money">{{totalBonus}}</p>
                        <p class="moneyExplain">累计邀约贡献奖励(元)</p>
                    </div>
                </div>
            </div>
            <div class="srcoll">
                <mt-loadmore :bottom-method="loadBottom" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmore"
                             :bottom-all-loaded="allLoaded">
                    <div class="personBox">
                        <h3 class="personTitle">会员列表</h3>
                        <div class="clear" v-if="nodata">
                            <div class="fl flBox" v-for="item in concatData">
                                <img class="nickurl"
                                     :src="item.headImageUrl">
                                <img class="vipicon" v-if='item.userType == 3' src="../../../assets/image/vipIcon.png">
                                <p class="nickName">{{decodeURIComponent(item.nickname)}}</p>
                            </div>
                        </div>
                        <div class="nodataBox" v-else>
                            <img src="../../../assets/image/noperson.png">
                            <p>暂无会员数据哦～</p>
                        </div>
                    </div>
                </mt-loadmore>
            </div>
            <div class="buttonBox flexAround">
                <span class=" buttonText" @click="goBanner">海报邀约</span>
                <span style="border-radius: 3px;font-weight:800;">|</span>
                <span class=" buttonText" @click="showZhegai">分享注册页面链接</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {Loadmore, Toast} from 'mint-ui';
    import Util from '../../../common/util'
    import Service from '../../../common/service'
    import Global from '../../../common/global'

    let wxConfig = Global.wxConfig
    export default {
        name: "personlist",
        data() {
            return {
                totalBonus: '',
                peopleNumber: '',
                isShow: false,
                page: 1,
                size: 16,
                allLoaded: false,
                moreData: true,
                concatData: [],
                orderDate: [],
                nodata: true,
                userInfo: ''
            }
        },
        beforeRouteEnter(to, from, next) {
            var imgUrl = 'https://ifxj-img.oss-cn-shenzhen.aliyuncs.com/share.png';
            var title = '分享即借力，创富并不难', desc = '分享家，优质产品，超高推广奖励';
            wxConfig(to, title, desc, imgUrl)
            next()
        },
        created() {
        },
        mounted() {
            document.getElementsByTagName('title')[0].innerHTML = '我的团队';
            this.userInfo = Util.localStorageUtil.get("userInfo");
            if (this.userInfo.userType == 1) {//未登录
                this.$router.push({path: '/user/login', query: {"cbpath": '/user/invited/personlist'}})
            }
            this.personList();
            this.teamInfo()

        },
        methods: {
            goStrategy() {
                this.$router.push({'path': '/user/treasurestrate'})
            },
            teamInfo() {
                Service.user().getTeamInfo({}).then(response => {
                    this.peopleNumber = response.data.peopleNumber;
                    this.totalBonus = response.data.totalBonus;
                }, err => {
                });
            },
            hideZhegai() {
                this.isShow = false;
            },
            showZhegai() {
                this.isShow = true;

            },
            goBanner() {//邀请海报
                this.$router.push({path: '/activity/invitedposter'})
            },
            loadBottom() {
                this.page++;
                if (this.moreData) {
                    this.personList()
                } else {
                    Toast('没有更多数据了');
                }
                this.$refs.loadmore.onBottomLoaded();
            },
            personList() {
                //调用接口获得数据
                Service.user().getTeamlist({
                    page: this.page,
                    size: this.size
                }).then(response => {
                    if (response.data.records.length != 0) {
                        this.nodata = true;
                        this.orderDate = response.data.records;
                        this.$nextTick(() => {
                            for (var i = 0; i < this.orderDate.length; i++) {
                                this.orderDate[i].nickname = this.orderDate[i].nickname.substring(0, 5);
                                this.concatData.push(this.orderDate[i]);
                            }
                            console.log(this.concatData)
                        })
                    }
                    if (response.data.records.length < this.size) {
                        if (response.data.records.length == 0 && this.page == 1) {
                            this.nodata = true;
                        }
                        this.moreData = false;
                        this.allLoaded = true;
                    }
                }, err => {
                });
            }
        }
    }
</script>

