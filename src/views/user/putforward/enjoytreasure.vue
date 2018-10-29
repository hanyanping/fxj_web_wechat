<style rel="stylesheet/scss" lang="scss" scoped>
    $bgcolor: #D51E12;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .treasureBox {
        margin: 20px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
        padding: 0 15px;
        .treasureTop {
            border-bottom: 1px solid #eee;
            padding: 15px 0;
            font-weight: 600;
            .applayMouth {
                font-size: 30rem/$baseFontSize;
                color: #929292;
            }
            .applayTotal {
                font-size: 30rem/$baseFontSize;
                color: #3d3d3d;
            }
        }
        .treasureBottom {
            padding: 15px 0;
            .flexLeft {
                .orderImg {
                    height: 32px;
                    width: 32px;
                    padding-right: 6px;
                    display: inline-block;
                    vertical-align: middle;
                }
                .applyDetail {
                    display: inline-block;
                    vertical-align: middle;
                    .applyStart {
                        font-size: 28rem/$baseFontSize;
                        color: #3d3d3d;
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
                color: #3d3d3d;
            }
        }

    }

    .toRull {
        margin-top: 18px;
        color: #017dac;
        text-align: center;
        font-size: 24rem/$baseFontSize;
    }

    .applyInfo {
        width: 100%;
        height: 100%;
        background: url("../../../assets/image/applyBac.png") no-repeat center center;
        background-size: 100% 100%;
        .isapply {
            text-align: center;
            font-size: 24rem/$baseFontSize;
            color: #3d3d3d;
            padding: 78rem/$baseFontSize 0 20rem/$baseFontSize;
        }
        .isApllyMoney {
            text-align: center;
            font-size: 72rem/$baseFontSize;
            color: #ff8f34;
            padding-bottom: 86rem/$baseFontSize;
            font-weight: 600;
        }
        .toAplay {
            height: 88rem/$baseFontSize;
            width: 314rem/$baseFontSize;
            background: -webkit-linear-gradient(left, #0abf9b, #00b4ff); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #0abf9b, #00b4ff); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #0abf9b, #00b4ff); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #0abf9b, #00b4ff); /* 标准的语法 */
            color: #fff;
            font-size: 28rem/$baseFontSize;
            font-weight: 600;
            line-height: 88rem/$baseFontSize;
            text-align: center;
            margin: 0 auto;
            border-radius: 22px;
        }
    }

    .loginSucess {
        text-align: center;
        .sucessLogo {
            height: 260rem/$baseFontSize;
            width: 260rem/$baseFontSize;
            margin-top: 150rem/$baseFontSize;
        }
        .sucessTextBox {
            margin: 26rem/$baseFontSize 0;
            font-stretch: normal;
            .sucessTextone {
                color: #3d3d3d;;
                font-size: 32rem/$baseFontSize;
            }
            .sucessTexttwo {
                color: #929292;;
                font-size: 24rem/$baseFontSize;
                margin: 20rem/$baseFontSize 0;
            }
        }
    }
</style>
<template>
    <div style="background:#F6F6F6;min-height: 100vh;">
        <div style="height:100vh;overflow: scroll;">
            <mt-loadmore :bottom-method="loadBottom" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmore"
                         :bottom-all-loaded="allLoaded">
                <div class="applyInfo">
                    <div class="isapply">可提现</div>
                    <div class="isApllyMoney">¥ {{accout}}</div>
                    <div class="toAplay" @click="goApply">立即提现</div>
                </div>
                <div class="toRull" @click="goRull">提现规则</div>
                <div v-for="item in Data" v-if="isData">
                    <div class="treasureBox">
                        <div class="flexBetween treasureTop">
                            <span class="applayMouth">{{item.time}}</span>
                            <span class="applayTotal">¥{{item.totalMoney}}</span>
                        </div>
                        <div class="flexBetween treasureBottom" v-for="items in item.arr">
                            <div class="flexLeft">
                                <img class='orderImg' src="../../../assets/image/gonglve.png">
                                <div class="applyDetail">
                                    <p class="applyStart">发起申请提现</p>
                                    <p class="applyTime">{{items.times}}</p>
                                </div>
                            </div>
                            <span class="appleyMoney">-{{items.amount}}</span>
                        </div>
                    </div>
                </div>
                <div v-else class="loginSucess">
                    <img class='sucessLogo' src="../../../assets/image/notixian.png">
                    <div class="sucessTextBox">
                        <p class="nosucessText sucessTexttwo">暂无提现数据哦～</p>
                    </div>
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
        name: "enjoytreasure",
        data() {
            return {
                accout: '',
                allLoaded: false,
                loadMore: false,
                lastId: '',
                concat: [],//合并数据
                Data: [],//渲染数据
                applyDate: [],
                isData: true
            }
        },
        created() {
            document.getElementsByTagName('title')[0].innerHTML = '享宝提现';
            this.orderList('');
        },
        mounted() {
            setTimeout(this.getAccout(), 13);
        },
        methods: {
            getAccout() {
                Service.user().getBalance({}).then(response => {
                    this.accout = response.data;
                }, err => {
                });
            },
            goRull() {
                this.$router.push({path: '/user/tixianrule'})
            },
            goApply() {
                //判断是否已经绑定银行卡
                Service.user().getbankCard({}).then(
                    response => {
                        console.log(response)
                        if (response.errorCode == 0) {
                            if (response.data === null) {
                                this.$router.push({'path': '/user/putforward/bindbankcard'})//未绑定
                            } else {
                                this.$router.push({'path': '/user/putforward/apply', query: {accout: this.accout}})//已经绑定
                            }
                        }
                    },
                    response => {
                    }
                );
            },
            loadBottom() {
                if (this.isData) {
                    if (this.loadMore == false) {
                        Toast('没有更多数据了');
                    } else {
                        this.orderList(this.lastId)
                    }
                    // this.allLoaded = true;// 若数据已全部获取完毕
                    this.$refs.loadmore.onBottomLoaded();
                }

            },
            orderList(lastId) {
                //调用接口获得数据
                //获取最后一个id
                Service.user().getWithdraw({
                    id: lastId
                }).then(
                    response => {
                        console.log(response)
                        if (response.errorCode == 0) {
                            if (response.data.length != 0) {
                                this.loadMore = true;

                                this.applyDate = response.data;
                                this.lastId = this.applyDate[this.applyDate.length - 1].id;
                                for (var i = 0; i < this.applyDate.length; i++) {
                                    this.applyDate[i].createDate = new Date(parseInt(this.applyDate[i].createDate));
                                    this.applyDate[i].year = this.applyDate[i].createDate.getFullYear();
                                    this.applyDate[i].month = this.applyDate[i].createDate.getMonth() + 1;
                                    this.applyDate[i].times = this.timetrans(this.applyDate[i].createDate)
                                }
                                this.$nextTick(() => {
                                    for (var i = 0; i < this.applyDate.length; i++) {
                                        this.concat.push(this.applyDate[i]);
                                    }
                                    console.log(this.concat);
                                    this.concatArr(this.concat)
                                })
                            } else {
                                if (this.lastId == '') {
                                    this.isData = false;
                                }
                                this.loadMore = false;
                                this.allLoaded = true;
                            }

                        }
                    },
                    response => {
                    }
                );
            },
            timetrans(d) {
                var getSeconds = '', getMinutes = '', getHours = '';
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
                var newTime = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
            concatArr(data) {
                var applyDate = data;
                var temp1 = [];
                var result1 = [];
                var result = {};
                temp1.push(applyDate[0]);
                for (var i = 1; i < applyDate.length; i++) {
                    var flag = 0;
                    for (var j = 0; j < temp1.length; j++) {
                        if ((applyDate[i].year == temp1[j].year) && (applyDate[i].month == temp1[j].month)) {
                            flag = 1;
                            break;
                        }
                    }
                    if (flag == 0) {
                        temp1.push(applyDate[i]);
                    }
                }
                for (var k = 0; k < temp1.length; k++) {
                    var array1 = [];
                    var array2 = [];
                    var count = 0;
                    for (var j = 0; j < applyDate.length; j++) {
                        if ((applyDate[j].year == temp1[k].year) && (applyDate[j].month == temp1[k].month)) {
                            array1.push(applyDate[j]);
                            count++;
                        }
                    }
                    result = {};
                    if (count > 1) {
                        result.arr = array1;
                        result1.push(result);
                    }
                    else {
                        array2.push(temp1[k]);
                        result.arr = array2;
                        result1.push(result);
                    }
                }

                var totla;
                for (var i = 0; i < result1.length; i++) {
                    totla = 0;
                    for (var j = 0; j < result1[i].arr.length; j++) {
                        totla += parseFloat(result1[i].arr[j].amount);
                        result1[i].time = result1[i].arr[j].month + '月'
                    }
                    result1[i].totalMoney = totla
                }

                this.$nextTick(() => {
                    this.Data = result1;
                    console.log(this.Data)
                });


            }
        }
    }
</script>


