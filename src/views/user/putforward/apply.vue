<style rel="stylesheet/scss" lang="scss" scoped>
    $bgcolor: #D51E12;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .applyBox {
        padding: 25px 20px;
        .bindTop {
            padding: 25px 20px;
            color: #fff;
            font-size: 28rem/$baseFontSize;
            border-radius: 10px 10px 0 0;
            background: -webkit-linear-gradient(left, #0abf9b, #00b4ff); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #0abf9b, #00b4ff); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #0abf9b, #00b4ff); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #0abf9b, #00b4ff); /* 标准的语法 */
            line-height: 60rem/$baseFontSize;
            .applyTop {
                color: #fff;
                font-weight: 600;
            }
            .applyMiddle {
                color: #fff;
            }
        }
        .bindBottom {
            padding: 5px 20px;
            border-radius: 0 0 10px 10px;
            box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
            .inputBox {
                padding: 25px 0 0px;
                .lableText {
                    color: #3d3d3d;
                    font-size: 32rem/$baseFontSize;
                }
                .moneyInput {
                    border-bottom: 1px solid #eee;
                    margin: 20px 0 15px;
                    position: relative;
                    .moneyIcon {
                        position: absolute;
                        font-size: 88rem/$baseFontSize;
                        font-weight: 600;
                        color: #3d3d3d;
                    }
                    .inputText {
                        color: #3d3d3d;
                        width: 80%;
                        font-weight: 600;
                        padding-left: 45px;
                        font-size: 90rem/$baseFontSize;
                    }
                }
            }
            .moneyText {
                color: #929292;
                font-size: 24rem/$baseFontSize;
                .all {
                    color: #0abf9b;
                    font-size: 28rem/$baseFontSize
                }
            }
            .moneyOver {
                color: #ff8f34;
                font-size: 24rem/$baseFontSize
            }
            .sure {
                margin: 20px auto;
                text-align: center;
                color: #fff;
                background: -webkit-linear-gradient(left, #0abf9b, #00b4ff); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(right, #0abf9b, #00b4ff); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(right, #0abf9b, #00b4ff); /* Firefox 3.6 - 15 */
                background: linear-gradient(to right, #0abf9b, #00b4ff); /* 标准的语法 */
                font-size: 28rem/$baseFontSize;
                width: 314rem/$baseFontSize;
                height: 88rem/$baseFontSize;
                border-radius: 25px;
                line-height: 88rem/$baseFontSize;
            }
            .noShow {
                background-color: #dcdddd;
            }
        }
    }

    ::-webkit-input-placeholder { /* WebKit browsers */
        color: #dcdddd;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #dcdddd;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #dcdddd;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color: #dcdddd;
    }
</style>
<template>
    <div style=" width: 100%;">
        <div class="applyBox">
            <div class="bindTop">
                <p class="applyTop">到账账户</p>
                <p class="applyMiddle">持卡人: {{binkData.accountName}}</p>
                <p class="applyMiddle">银行卡号: {{binkData.cardNumber}}</p>
            </div>
            <div class="bindBottom">
                <div class="inputBox">
                    <p class="lableText">提现金额</p>
                    <div class="moneyInput">
                        <span class="moneyIcon">¥</span> <input class='inputText' @keyup="inputMoney"
                                                                v-model="changeMoney" type="number">
                    </div>
                </div>
                <div class="moneyText" v-if="isAll">
                    最多提现 {{allMoney}} 元<span class="all" @click="selctMoney"> (全部)</span>
                </div>
                <div class="moneyText moneyOver" v-if="isRull">
                    最小提现金额为1元
                </div>
                <div class="moneyText moneyOver" v-if="isChange">
                    免费提现{{count}}次，超出次数则按2元/次缴纳手续费
                </div>
                <div class="moneyText moneyOver" v-if="isOver">
                    输入金额超出提现余额
                </div>
                <div class="sure" v-if="isShow" @click="apply">确认</div>
                <div class="sure noShow" v-else>确认</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import Util from '../../../common/util'
    import Service from '../../../common/service'
    import Patterns from '../../../common/patternRules'

    export default {
        name: "apply",
        data() {
            return {
                binkNum: '',
                isAll: true,
                isRull: false,
                isChange: false,
                isOver: false,
                isShow: false,
                allMoney: 240,
                changeMoney: '',
                binkData: {},
                count: ''

            }
        },
        created() {
            document.getElementsByTagName('title')[0].innerHTML = '余额提现';
            this.getbankCard();
            // this.allMoney = this.$route.query.accout ;
        },
        mounted() {

        },
        watch: {
            'binkCode': function () {
                if (this.binkCode == '') {
                    $(".selectBox").css("color", "#dcdddd");
                } else {
                    $(".selectBox").css("color", "#3d3d3d")
                }
                $(".selectBox").find("option").css("color", "#3d3d3d")
            }
        },
        methods: {
            getbankCard() {
                Service.user().getwithdraw({}).then(
                    response => {
                        if (response.errorCode == 0) {
                            this.binkData = response.data.bankCard;
                            this.allMoney = response.data.balance;
                            this.count = response.data.total;
                            this.binkData.cardNumber = this.plusXing(this.binkData.cardNumber, 0, 4).replace(/(.{4})/g, "$1 ");
                        }
                    },
                    response => {
                    }
                );
            },
            apply() {
                if (!((Patterns.money).test(this.changeMoney))) {
                    Toast("请输入合理金额")
                } else {
                    Service.user().postWithdraw({
                        amount: this.changeMoney
                    }).then(response => {
                        console.log(response.errorCode)
                        if (response.errorCode == 0) {
                            this.$router.push({'path': '/user/putforward/applysucess', query: {success: "true"}})
                        } else {
                            this.$router.push({'path': '/user/putforward/applysucess', query: {success: "false"}})
                        }
                    }, err => {
                    });

                }
            },
            inputMoney() {
                if (this.changeMoney >= 1) {
                    if (this.changeMoney > this.allMoney) {
                        this.isAll = false;
                        this.isOver = true;
                        this.isChange = false;
                        this.changeMoney = this.allMoney
                    } else {
                        this.isAll = false;
                        this.isOver = false;
                        this.isChange = true
                    }
                    this.isShow = true;
                } else if (this.changeMoney < 1 && this.changeMoney > 0) {
                    this.isShow = false;
                    this.isAll = false;
                    this.isOver = false;
                    this.isChange = false;
                    this.isRull = true;
                } else {
                    this.isShow = false;
                    this.isAll = true;
                    this.isOver = false;
                    this.isChange = false;
                    this.isRull = false;
                }
            },
            selctMoney() {
                this.changeMoney = this.allMoney;
                this.isShow = true;
            },
            plusXing(str, frontLen, endLen) {
                var len = str.length - frontLen - endLen;
                var xing = '';
                for (var i = 0; i < len; i++) {
                    xing += '*';
                }
                return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
            },
        }
    }
</script>


