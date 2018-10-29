<style rel="stylesheet/scss" lang="scss" scoped>
    $bgcolor: #D51E12;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .treasureBox {
        margin: 20px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 10px 31px 6px rgba(175, 175, 175, 0.2);
        .treasureTop {
            padding: 15px;
            background: #fff;
            border-radius: 10px 10px 0 0;
            border-top: 0.5px solid rgba(209, 209, 209, 0.25);
            font-weight: 600;
            font-size: 32rem/$baseFontSize;
            .applayMouth {
                color: #3d3d3d;
                font-weight: 600;
            }
            .applayTotal {
                color: #ff8f34;
            }
            .finish {
                color: #0abf9b;
            }
            .fail {
                color: #ed5050;
            }
            .black {
                color: #929292;
            }
        }
        .failYuanyin {
            background: #fff;
            padding: 15px;
            .failText {
                background: #FFF1F1;
                color: #ed5050;
                padding: 15px;
                line-height: 20px;
                font-size: 24rem/$baseFontSize;
                border-radius: 5px;
            }
        }
        .titleBox {
            background: -webkit-linear-gradient(left, #ebedee, #fafafa); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #ebedee, #fafafa); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #ebedee, #fafafa); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #ebedee, #fafafa, #fdfbfb); /* 标准的语法 */
            font-size: 28rem/$baseFontSize;
            color: #3d3d3d;
            padding: 15px 15px 0 15px;
            .titleName {
                padding-bottom: 15px;
            }
        }
        .treasureBottom {
            padding: 12px 15px;
            .flexLeft {
                .orderImg {
                    height: 32px;
                    width: 32px;
                    padding-right: 6px;
                    display: inline-block;
                    vertical-align: middle;
                }
                .applyDetail {
                    /*display: inline-block;*/
                    /*vertical-align: middle;*/
                    .applyStart {
                        font-size: 28rem/$baseFontSize;
                        color: #3d3d3d;
                        padding-bottom: 3px;
                    }
                    .applyTime {
                        font-size: 24rem/$baseFontSize;
                        color: #929292;
                    }
                }

            }
            .appleyMoney {
                line-height: 40px;
                font-size: 30rem/$baseFontSize;
                color: #fff;
                display: inline-block;
                background: #0abf9b;
                width: 137rem/$baseFontSize;
                text-align: center;
                border-radius: 5px;
            }
        }
    }

    .enjoydetail {
        padding: 15px 20px 0;
        height: 52rem/$baseFontSize;
        .detailTitle {
            color: #525252;
            font-size: 28rem/$baseFontSize;
            height: 52rem/$baseFontSize;
            line-height: 52rem/$baseFontSize;
        }
        .borderBox {
            border-radius: 10px;
            border: 1px solid #eeeeee;
            height: 52rem/$baseFontSize;
            line-height: 52rem/$baseFontSize;
            width: 140rem/$baseFontSize;
            text-align: center;
            .mouthText {
                display: inline-block;
                vertical-align: middle;
                font-weight: 600;
                font-size: 24rem/$baseFontSize;
                color: #3d3d3d;
            }
            .down {
                height: 7px;
                width: 12px;
                display: inline-block;
                vertical-align: middle;
                padding-left: 5px;
            }
        }
    }

    .mounthBox {
        position: fixed;
        height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
        margin-top: 2px;
        .mouthList {
            padding: 68rem/$baseFontSize 0 37rem/$baseFontSize 37rem/$baseFontSize;
            background: #fff;
            width: 100%;
            .mouth {
                display: inline-block;
                vertical-align: middle;
                width: 140rem/$baseFontSize;
                height: 60rem/$baseFontSize;
                line-height: 60rem/$baseFontSize;
                text-align: center;
                border-radius: 10px;
                background: #eee;
                font-size: 32rem/$baseFontSize;
                color: #3d3d3d;
                margin-right: 35rem/$baseFontSize;
                margin-bottom: 25rem/$baseFontSize;
            }
            .mouthone {
                color: #fff;
                background: #0abf9b;
            }
        }
    }

    .loginSucess {
        text-align: center;
        .sucessLogo {
            height: 260rem/$baseFontSize;
            width: 260rem/$baseFontSize;
            margin-top: 250rem/$baseFontSize;
        }
        .sucessTextBox {
            margin: 26rem/$baseFontSize 0;
            font-size: 24rem/$baseFontSize;
            font-weight: normal;
            font-stretch: normal;
            line-height: 48rem/$baseFontSize;
            color: #929292;
            .sucessTextone {
                color: #0abf9b;
                font-size: 42rem/$baseFontSize;
                line-height: 64rem/$baseFontSize;
            }
        }
        .goGuanzhu {
            width: 150px;
            height: 84rem/$baseFontSize;
            background-color: #ffffff;
            border-radius: 10px;
            border: solid 1px #0abf9b;
            font-size: 32rem/$baseFontSize;
            line-height: 84rem/$baseFontSize;
            color: #0abf9b;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: 920rem/$baseFontSize;
        }
        .lijiguanzhu {
            background: #0abf9b;
            color: #fff;
            top: 809rem/$baseFontSize;
        }
        .code {
            margin-top: 8px;
            .fxjCode {
                height: 152px;
                width: 152px;
            }
            .introduce {
                font-size: 24rem/$baseFontSize;
                color: #929292;
                margin-top: 6px;
            }
        }
    }

    .mint-loadmore-bottom {
        margin-bottom: -40px;
    }
</style>
<template>
    <div style="min-height: 100vh;">
        <div style="height:100vh;overflow: scroll;">
            <mt-loadmore :bottom-method="loadBottom" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmore"
                         :bottom-all-loaded="allLoaded">
                <div class="enjoydetail flexBetween">
                    <span class="detailTitle">累积享宝: 3,500元</span>
                    <div class="borderBox">
                        <span class="mouthText">{{selectMouth}}月</span>
                        <img class="down" v-if='!isShow' @click="showmouth" src="../../../assets/image/down.png">
                        <img class="down" v-if='isShow' @click="showmouth" src="../../../assets/image/upicon.png">
                    </div>
                </div>
                <div class="mounthBox" v-if='isShow' @click.stop="showmouth">
                    <div class="mouthList clear">
                        <div v-for="item in dateList">
                            <span ref="mouthspan" class="mouthone mouth fl" v-if="item.mouth == selectMouth"
                                  @click="clickMouth(item.mouth,item.time,$event)">{{item.mouth}}月</span>
                            <span ref="mouthspan" class="mouth fl" v-else
                                  @click="clickMouth(item.mouth,item.time,$event)">{{item.mouth}}月</span>
                        </div>
                    </div>
                </div>
                <div v-if="hasData" v-for="item in concatData">
                    <div class="treasureBox">
                        <div class="flexBetween treasureTop">
                            <span class="applayMouth">{{item.title}}</span>
                            <span class="applayTotal" v-if="item.sourceType == '3'">-{{item.amount}}</span>
                            <span class="applayTotal finish" v-else>+{{item.amount}}</span>
                        </div>
                        <div class="titleBox" v-if="item.sourceType == '1' || item.sourceType == '2'">
                            <p class="titleName">订单号: {{item.id}}</p>
                            <p class="titleName">产品名称: {{item.productName}}</p>
                            <p class="titleName">保费: {{item.orderAmount}}元</p>
                            <p class="titleName">投保人: {{item.applicantName}}</p>
                        </div>
                        <div class="titleBox" v-if="item.sourceType == '3' || item.sourceType == '4'">
                            <p class="titleName">提现编号: {{item.id}}</p>
                        </div>
                        <div class="treasureBottom" v-if="item.sourceType == '1' || item.sourceType == '2'">
                            <div class="flexLeft">
                                <div class="applyDetail flexBetween">
                                    <span class="applyTime">交易日期: {{item.createDate}}</span>
                                    <span class="applyTime fr">出单人: {{decodeURIComponent(item.salesUser)}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="treasureBottom" v-if="item.sourceType == '3' || item.sourceType == '4'">
                            <div class="flexLeft">
                                <div class="applyDetail flexBetween">
                                    <span class="applyTime">提现日期: {{item.createDate}}</span>
                                    <span class="applyTime fr">提现人: {{decodeURIComponent(item.salesUser)}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!hasData" class="nodata loginSucess">
                    <img class='sucessLogo' src="../../../assets/image/noDetail.png">
                    <div class="sucessTextBox">
                        暂无明细数据哦～
                        <!--<p class="sucessText sucessTextone"></p>-->
                        <!--<p  class="sucessText">无形的保险,有力的保障，快去为自己买一份保障吧</p>-->
                    </div>
                    <!--<div  class="goGuanzhu" >去看看</div>-->
                </div>
            </mt-loadmore>
        </div>

    </div>
</template>

<script>
    import {Loadmore, Toast} from 'mint-ui';
    import Util from '../../../common/util'
    import Service from '../../../common/service'

    export default {
        name: "enjoydetail",
        data() {
            return {
                hasData: true,
                page: 1,
                size: 10000000,
                allLoaded: true,
                lastId: '',
                concatData: [],//合并数据
                Data: [],//渲染数据
                orderDate: [],
                moreData: true,
                dateList: [],
                selectMouth: '',
                isShow: false,
                mouth: '',
                isSame: true
            }
        },
        created() {
            document.getElementsByTagName('title')[0].innerHTML = '享宝明细';
            var oldTime = new Date().getTime(); //得到毫秒数
            console.log(oldTime);
            var newTime = new Date(oldTime); //就得到普通的时间了
            var mouth = newTime.getMonth() + 1;
            mouth = mouth < 10 ? "0" + mouth : mouth;
            this.mouth = newTime.getFullYear() + '-' + mouth + '-01';
            this.mouth = this.mouth.toString()
            this.getMouth()
            this.orderList();
        },
        methods: {
            showmouth() {
                this.isShow = !this.isShow;
            },
            clickMouth(mouth, time, event) {
                this.selectMouth = mouth;
                if (event.currentTarget.className.indexOf("mouthone") == -1) {
                    for (var i = 0; i < this.$refs.mouthspan.length; i++) {
                        this.$refs.mouthspan[i].className = 'mouth fl';
                    }
                    event.currentTarget.className = 'mouthone mouth fl'
                }
                if (this.mouth == time) {
                    this.isSame = true;
                } else {
                    this.isSame = false;
                }
                this.mouth = time;
                this.orderList();
            },
            getMouth() {
                var d = new Date();
                var result = [];
                var currenMouth = {
                    'time': d.getFullYear() + "-" + (d.getMonth() + 1) + '-01',
                    'mouth': d.getMonth() + 1,
                    id: 0
                }
                this.selectMouth = d.getMonth() + 1;
                for (var i = 0; i < 11; i++) {
                    d.setMonth(d.getMonth() - 1);
                    var m = d.getMonth() + 1;
                    // m = m < 10 ? "0" + m : m;
                    var obj = {};
                    obj.time = d.getFullYear() + "-" + m + '-01'
                    obj.mouth = m;
                    obj.id = i + 1;
                    result.unshift(obj);
                    // result.push(d.getFullYear() + "年" + m + '月');
                }
                result.push(currenMouth);
                this.dateList = result;
            },
            goOrderdetail(id) {
                this.$router.push({path: '/user/order/orderdetail', query: {id: id}});
            },
            loadBottom() {
                if (this.moreData) {
                    this.orderList()
                } else {
                    Toast('没有更多数据了');
                }
                this.$refs.loadmore.onBottomLoaded();
            },
            orderList() {
                //调用接口获得数据
                Service.user().getAccount({
                    page: this.page,
                    size: this.size,
                    month: this.mouth
                }).then(response => {
                    console.log(response)
                    if (response.data.records.length != 0) {
                        this.hasData = true;
                        this.orderDate = response.data.records;
                        for (var i = 0; i < this.orderDate.length; i++) {
                            this.orderDate[i].createDate = this.timetrans(new Date(parseInt(this.orderDate[i].createDate)));
                        }

                        if (!(this.isSame)) {
                            this.concatData = [];
                            this.page = 1;
                            this.allLoaded = false;
                        }
                        this.allLoaded = true;//不可上拉加载
                        this.$nextTick(() => {
                            for (var i = 0; i < this.orderDate.length; i++) {
                                this.concatData.push(this.orderDate[i]);
                            }
                            console.log(this.concatData)
                        })
                    }
                    if (response.data.records.length == 0) {
                        this.moreData = false;
                        this.allLoaded = true;
                        if (this.page == 1) {
                            this.hasData = false;
                        }
                        if (!(this.isSame)) {//更换不同的月
                            this.concatData = [];
                            this.page = 1;
                            this.allLoaded = true;
                            this.hasData = false;
                        }
                    }
                }, err => {
                });

            },
            timetrans(d) {
                var getSeconds = '', getMinutes = '', getHours = '';
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
                var newTime = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
            goPay() {//直接跳转到去支付页面
                console.log(3333)
            }
        }
    }
</script>


