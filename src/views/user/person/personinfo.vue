<style rel="stylesheet/scss" lang="scss" scoped>
    $bgcolor: #D51E12;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .speadInfo {
        position: relative;
    }

    .personInfoTop {
        background: #fff;
        text-align: center;
        color: #0abf9b;
        font-size: 32rem/$baseFontSize;
        height: 40px;
        line-height: 40px;
        /*position: fixed;*/
        /*top: 0;*/
        /*width: 100%;*/
        .productImg {
            height: 20px;
            width: 19px;
            position: absolute;
            left: 20px;
            padding: 10px 0;
        }
        .title {
            display: inline-block;
            vertical-align: middle;
        }
    }

    .iconInfo {
        width: 100%;
        height: 325rem/$baseFontSize;
        background: url("../../../assets/image/gerenzhongxin_beijing.png") no-repeat center center;
        background-size: 100% 100%;
        /*background-size: cover;*/
        color: #fff;
        .speadInfoTop {
            width: 100%;
            padding-top: 80rem/$baseFontSize;
            padding-bottom: 132rem/$baseFontSize;
            .personName {
                height: 60px;
                line-height: 60px;
                .name {
                    font-size: 48rem/$baseFontSize;
                    font-weight: 700;
                }
                .nameClass {
                    line-height: 24px;
                    font-size: 28rem/$baseFontSize;
                }
            }
            .personIcon {
                height: 56px;
                width: 56px;
                border-radius: 50%;
                border: 2px solid #fff;
            }
            .headBox {
                position: relative;
                .personIcon {
                    height: 56px;
                    width: 56px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                }
                .vip {
                    position: absolute;
                    height: 35px;
                    width: 35px;
                    top: -8px;
                    left: -8px;
                    z-index: 100;
                }
            }
        }
        .iconInfoTop {
            padding-top: 45px;
            .personName {
                height: 60px;
                .name {
                    line-height: 35px;
                    font-size: 48rem/$baseFontSize;
                    font-weight: 700;
                }
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
        .nameClass {
            font-size: 32rem/$baseFontSize;
            color: #3d3d3d;
            font-weight: 800;
            line-height: 66rem/$baseFontSize;
        }
        .money {
            color: #3d3d3d;
            font-size: 32rem/$baseFontSize;
            font-weight: 600;
            line-height: 32rem/$baseFontSize;
            .personText {
                font-size: 24rem/$baseFontSize;
                font-weight: 600;
                display: inline-block;
                line-height: 24rem/$baseFontSize;
            }
        }
        .moneyExplain {
            font-size: 12px;
            color: #929292;
        }
    }

    .wealth {
        padding: 6px 20px 4px;
        margin-top: -23px;
        /*border-top: 10px solid #fafafa;*/
        background: #fff;
        .wealthTop {
            color: #3d3d3d;
            line-height: 40px;
            .wealthTopLeft {
                display: inline-block;
                vertical-align: middle;
                span {
                    display: inline-block;
                    vertical-align: middle;
                }
                .myWealth {
                    font-size: 30rem/$baseFontSize;
                    font-weight: 700;
                }
                .applayWealth {
                    font-size: 24rem/$baseFontSize;
                }
            }
            .wealthTopRight {
                display: inline-block;
                vertical-align: middle;
                span {
                    display: inline-block;
                    vertical-align: middle;
                }
                .tixianIcon {
                    padding-left: 5px;
                    height: 20px;
                    width: 20px;
                    vertical-align: middle;
                }
            }
        }
        .wealthBottom {
            /*margin-top: 20px;*/
            padding: 20px;
            /*border: 1px solid #fff;*/
            /*border-radius: 10px;*/
            /*box-shadow:0px 0px 15px 6px rgba(209,209,209,0.25);*/
            text-align: center;
            .weathmoney {
                font-size: 32rem/$baseFontSize;
                color: #ff8f34;
                font-weight: 700;
            }
            .moneyExplain {
                font-size: 12px;
                padding-top: 6px;
                color: #929292;
            }
        }
    }

    .infoList {
        background: #fff;
        margin: 20rem/$baseFontSize 0;
        padding: 15px 20px;
        text-align: center;
        color: #3d3d3d;
        a {
            color: #3d3d3d;
        }
        .xianbaoImg {
            height: 45px;
            width: 45px;
            margin-bottom: 6px;
        }
    }

    .share {
        width: 100%;
        height: 122rem/$baseFontSize;
        background: url('../../../assets/image/guanggao_beijing.png') no-repeat center center;
        background-size: 100% 100%;
        margin-top: 20rem/$baseFontSize;
        margin-bottom: 40rem/$baseFontSize;
        .shareBox {
            padding: 22rem/$baseFontSize 20px;
            line-height: 42rem/$baseFontSize;
            .shareTitle {
                font-size: 30rem/$baseFontSize;
                color: #fff;
                font-weight: 600;
            }
            .shareText {
                color: #fff;
                font-size: 24rem/$baseFontSize;
            }
        }
        /*.buttonBox{*/
        /*<!--line-height: 164rem/$baseFontSize;-->*/
        .shareButton {
            display: inline-block;
            vertical-align: middle;
            color: #e75858;
            background: #fff;
            height: 60rem/$baseFontSize;
            line-height: 60rem/$baseFontSize;
            width: 147rem/$baseFontSize;
            margin: 31rem/$baseFontSize 20px;
            text-align: center;
            font-size: 24rem/$baseFontSize;
            border-radius: 5px;
        }
        /*}*/

        a:active {
            background: red;
        }
    }

    .order {
        padding: 0 20px;
        background: #fff;
        .orderBoxOne {
            background: #fff;
            position: relative;
            top: -68rem/$baseFontSize;
            padding: 26px;
            border-radius: 10px;
            box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
            text-align: center;
            .orderTop {
                // padding: 0 0 20px;
                // border-bottom: 1px solid #eeeeee;
                // display: flex;
                .orderbefore {
                    position: relative;
                    width: 50%;
                }
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
                // .orderbefore:after {
                //     content: '';
                //     position: absolute;
                //     background: #eeeeee;
                //     display: inline-block;
                //     height: 100rem/$baseFontSize;
                //     width: 1px;
                //     margin-top: -30rem/$baseFontSize;
                //     bottom: -20px;
                //     right: 0;
                // }
                .orderafter {
                    width: 50%;
                }
            }
            .orderBottom {
                padding: 20px 0px 0px;
                display: flex;
                .orderbeforetwo {
                    position: relative;
                    width: 50%;
                }
                .orderbeforetwo:after {
                    content: '';
                    position: absolute;
                    background: #eeeeee;
                    display: inline-block;
                    height: 100rem/$baseFontSize;
                    width: 1px;
                    margin-top: -30rem/$baseFontSize;
                    top: -5px;
                    right: 0;
                }
                .orderafter {
                    width: 50%;
                }
            }
            .weathmoney {
                font-size: 32rem/$baseFontSize;
                color: #ff8f34;
                font-weight: 700;
                line-height: 32rem/$baseFontSize;
            }
            .moneyExplain {
                font-size: 12px;
                padding-top: 6px;
                color: #636363;
            }
        }
        .orderBox {
            background: #fff;
            position: relative;
            top: -68rem/$baseFontSize;
            padding: 26px;
            border-radius: 10px;
            box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
            text-align: center;
            .vip2 {
                position: absolute;
                height: 40px;
                width: 40px;
                top: 0;
                left: 0;
            }
            .orderTop {
                padding: 0 25px 20px;
                border-bottom: 1px solid #eeeeee;
            }
            .orderBottom {
                padding: 20px 25px 0px;
            }
            .weathmoney {
                font-size: 32rem/$baseFontSize;
                color: #ff8f34;
                font-weight: 700;
                line-height: 32rem/$baseFontSize;
            }
            .moneyExplain {
                font-size: 12px;
                padding-top: 6px;
                color: #636363;
            }
        }
    }

    .orderManage {
        margin-top: 10px;
        background: #fff;
        padding: 40rem/$baseFontSize;
        height: 45px;
        line-height: 45px;
        color: #3d3d3d;
        font-size: 30rem/$baseFontSize;
        .orderIcon {
            height: 45px;
            width: 45px;
            vertical-align: middle;
            margin-right: 10px;
        }
        .goOrder {
            height: 20px;
            width: 20px;
            vertical-align: middle;
        }
    }

    .helpcenter {
        margin-top: 20rem/$baseFontSize;
        background: #fff;
        padding: 25rem/$baseFontSize 40rem/$baseFontSize;
        height: 50rem/$baseFontSize;
        line-height: 40rem/$baseFontSize;
        color: #3d3d3d;
        font-size: 28rem/$baseFontSize;
        .helpIcon {
            height: 40rem/$baseFontSize;
            width: 40rem/$baseFontSize;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
        }
        span {
            display: inline-block;
            vertical-align: middle;
        }
        .gohelpcenter {
            width: 36rem/$baseFontSize;
            height: 36rem/$baseFontSize;
            vertical-align: middle;
        }
    }

    .bottom {
        background: #fff;
        margin-top: 60px;
        box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100rem/$baseFontSize;
        z-index: 100;
        display: flex;
        justify-content: center;
        .iconBoxone {
            margin-right: 80rem/$baseFontSize;
        }
        .iconBoxtwo {
            margin-left: 80rem/$baseFontSize;
        }
        .iconBox {
            margin-top: -25rem/$baseFontSize;
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
    <div style="background: #fafafa;height: 100vh;">
        <div class="speadInfo" v-if="isSpead">
            <div class="iconInfo">
                <div style="padding:0 20px;">
                    <div class="speadInfoTop flexBetween" @click="goInfodetail">
                        <div class="personName">
                            <p class="name">{{userInfo.realName}}（{{userInfo.nickname}}）</p>
                        </div>

                        <div class="headBox">
                            <img v-if="userInfo.userType == 3" class='vip' src="../../../assets/image/vip.png">
                            <img class='personIcon' :src="userInfo.headImageUrl">
                        </div>
                    </div>
                </div>
            </div>
            <div class="order">
                <div class="orderBox flexBetween iconInfoBottom" @click="goPersonrule">
                    <div class="nameClass" v-if="userInfo.userType == 3">
                        分享家
                    </div>
                    <div class="nameClass" v-if="userInfo.userType == 2">
                        分享者
                    </div>
                    <div class="lineWeight"><span class="backline"></span></div>
                    <div style="text-align: center;">
                        <p class="money">{{infoData.salesAmount}}</p>
                        <p class="moneyExplain">推广值(元)</p>
                    </div>
                    <div style="text-align: center;">
                        <p class="money">{{infoData.teamPeopleNumber}}</p>
                        <p class="moneyExplain">直接邀约(人)</p>
                    </div>
                </div>
            </div>
            <div class="wealth">
                <div class="wealthTop flexBetween">
                    <div class="wealthTopLeft"><span class='myWealth' style="font-weight: 700;">我的财富</span></div>
                    <div class="wealthTopRight" @click="gobindbankcard"><span class='applayWealth'>申请提现</span><img
                            class="tixianIcon" src="../../../assets/image/goline.png">
                    </div>
                </div>
                <div class="wealthBottom flexBetween">
                    <div>
                        <p class="weathmoney">{{infoData.totalIncome}}</p>
                        <p class="moneyExplain">累计收入(元)</p>
                    </div>
                    <div class="lineWeight">
                        <p class="weathmoney">{{infoData.settlingAmount}}</p>
                        <p class="moneyExplain">结算中(元)</p>
                    </div>
                    <div>
                        <p class="weathmoney">{{infoData.balance}}</p>
                        <p class="moneyExplain">可提现(元)</p>
                    </div>
                </div>
            </div>
            <div class="infoList flexBetween">
                <a href='/user/invited/personlist'>
                    <img class='xianbaoImg' src="../../../assets/image/tuandui.png">
                    <p>团队邀约</p>
                </a>
                <div @click="goStrategy">
                    <img class='xianbaoImg' src="../../../assets/image/gonglue.png">
                    <p>享宝攻略</p>
                </div>
                <div @click="goEnjoytreasure">
                    <img class='xianbaoImg' src="../../../assets/image/mingxi.png">
                    <p>享宝明细</p>
                </div>
                <div @click="goOrderlist">
                    <img class='xianbaoImg' src="../../../assets/image/guanli.png">
                    <p>订单管理</p>
                </div>
            </div>
            <div class="helpcenter">
                <div class="clear" @click="gohelpcenter">
                    <img class="helpIcon" src="../../../assets/image/helpicon.png">
                    <span>帮助中心</span>
                    <div class=" fr">
                        <img class="gohelpcenter" src="../../../assets/image/goline.png">
                    </div>
                </div>
            </div>
            <div class="share flexBetween">
                <div class="flexBetween">
                    <div class='shareBox'>
                        <p class="shareTitle">分享即借力，利他也惠己</p>
                        <p class="shareText">好友出单获超值奖励，您获得高额推广费</p>
                    </div>
                    <!--<div class="buttonBox">-->
                    <span class="shareButton" @click="goinvited">去邀请</span>
                    <!--</div>-->
                </div>
            </div>
            <div style='height: 50px;width:100%'></div>
        </div>
        <div class="consum" v-else>
            <div class="iconInfo">
                <div style="padding:0 20px;">
                    <div class="speadInfoTop flexBetween" @click="goInfodetail">
                        <div class="personName">
                            <p class="name">{{userInfo.realName}}（{{decodeURIComponent(userInfo.nickname)}}）</p>
                        </div>
                        <img class='personIcon' :src="userInfo.headImageUrl">
                    </div>
                </div>
            </div>
            <div class="order">
                <div class="orderBoxOne">
                    <div class="orderTop flexBetween">
                        <div class="orderbefore">
                            <p class="weathmoney">{{totalPremium}}</p>
                            <p class="moneyExplain">累计保费 (元)</p>
                        </div>
                        <div class="lineWeight"><span class="backline"></span></div>
                        <div class="orderafter">
                            <p class="weathmoney">{{totalOrder}}</p>
                            <p class="moneyExplain">累计保单 (单)</p>
                        </div>
                    </div>
                    <!-- <div class="orderBottom flexBetween">
                        <div class="orderbeforetwo">
                            <p class="weathmoney">5</p>
                            <p class="moneyExplain">保障中(单)</p>
                        </div>
                        <div class="orderafter">
                            <p class="weathmoney">6</p>
                            <p class="moneyExplain">已到期(单)</p>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="orderManage">
                <div class="clear" @click="goOrderlist">
                    <img class="orderIcon" src="../../../assets/image/guanli.png">
                    <span>订单管理</span>
                    <div class=" fr">
                        <img class="goOrder" src="../../../assets/image/goline.png">
                    </div>
                </div>
            </div>
            <div class="helpcenter">
                <div class="clear" @click="gohelpcenter">
                    <img class="helpIcon" src="../../../assets/image/helpicon.png">
                    <span>帮助中心</span>
                    <div class=" fr">
                        <img class="gohelpcenter" src="../../../assets/image/goline.png">
                    </div>
                </div>
            </div>
            <div style='height: 50px;width:100%'></div>
        </div>
        <div class="bottom">
            <a class="iconBox iconBoxone" @click="goHome">
                <img class='icon' src="../../../assets/image/noselectHome.png">
                <p class="noselect">首页</p>
            </a>
            <a class="iconBox iconBoxtwo">
                <img class='icon' src="../../../assets/image/selectPerson.png">
                <p class="select">个人中心</p>
            </a>
        </div>
    </div>
</template>

<script>
    import Util from '../../../common/util'
    import {Loadmore, Toast} from 'mint-ui';
    import Service from '../../../common/service'

    export default {
        name: "personinfo",
        data() {
            return {
                isSpead: false,
                userInfo: '',
                infoData: '',
                totalPremium: '',
                totalOrder: ''
            }
        },
        created() {
            this.getuserinfo()
        },
        mounted() {
            document.getElementsByTagName('title')[0].innerHTML = '个人中心';
            this.getPersonInfo()
        },
        methods: {
            getuserinfo() {
                Service.user().getinfo({}).then(response => {
                    console.log(response);
                    this.userInfo = response.data;
                    if (this.userInfo) {
                        console.log(this.userInfo.userType)
                        if (this.userInfo.userType == 1) {
                            this.isSpead = false;
                            this.customerInfo()
                        } else {
                            this.isSpead = true;
                        }
                    }
                }, err => {
                });
            },
            customerInfo() {
                Service.order().getcountInfo({}).then(response => {
                    console.log(response);
                    if(response.data.totalPremium === null){
                        this.totalPremium = 0;
                    }else{
                        this.totalPremium = response.data.totalPremium;
                    }
                    this.totalOrder = response.data.totalOrder;

                }, err => {
                });
            },
            getPersonInfo() {
                Service.user().getcenterInfo({}).then(response => {
                    if (response.errorCode == 0) {
                        this.infoData = response.data;
                    }
                }, err => {
                });
            },
            gohelpcenter() {
                this.$router.push({'path': '/user/person/helpcenter'})
            },
            goHome() {
                this.$router.push({'path': '/'})
            },
            goInfodetail() {
                this.$router.push({'path': '/user/person/infodetail'})
            },
            goStrategy() {
                this.$router.push({'path': '/user/treasurestrate'})
            },
            goPersonrule() {
                this.$router.push({'path': '/user/person/personrule'})
            },
            goinvited() {
                this.$router.push({'path': '/activity/invitedposter'})
            },
            gobindbankcard() {
                this.$router.push({'path': '/user/putforward/enjoytreasure'})
            },
            goEnjoytreasure() {
                this.$router.push({'path': '/user/putforward/enjoydetail'})
            },
            goOrderlist() {
                this.$router.push({'path': '/user/order/orderlist'})
            },
            goPersonlist() {
                this.$router.push({'path': '/user/invited/personlist'})
            }
        }
    }
</script>



