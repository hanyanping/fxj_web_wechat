<style rel="stylesheet/scss" lang="scss" scoped>
    $bgcolor: #D51E12;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .bindBox {
        padding: 25px 20px;
        .bindTop {
            padding-left: 32rem/$baseFontSize;
            height: 44px;
            line-height: 44px;
            color: #fff;
            font-size: 32rem/$baseFontSize;
            border-top: 1px solid;
            border-radius: 10px 10px 0 0;
            background: -webkit-linear-gradient(left, #0abf9b, #00b4ff); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #0abf9b, #00b4ff); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #0abf9b, #00b4ff); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #0abf9b, #00b4ff); /* 标准的语法 */
        }
        .bindBottom {
            padding: 5px 32rem/$baseFontSize;
            border-radius: 0 0 10px 10px;
            box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
            .inputBox {
                padding: 30rem/$baseFontSize 0;
                .lableText {
                    color: #929292;
                    display: inline-block;
                    width: 112rem/$baseFontSize;
                    font-size: 28rem/$baseFontSize;
                    vertical-align: middle;
                }
                .inputText {
                    color: #3d3d3d;
                    padding-left: 60rem/$baseFontSize;
                    font-size: 28rem/$baseFontSize;
                    width: 355rem/$baseFontSize;
                }
            }
            .selectBox {
            }
            .sure {
                margin: 10px auto;
                text-align: center;
                color: #fff;
                background: -webkit-linear-gradient(left, #0abf9b, #00b4ff); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(right, #0abf9b, #00b4ff); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(right, #0abf9b, #00b4ff); /* Firefox 3.6 - 15 */
                background: linear-gradient(to right, #0abf9b, #00b4ff); /* 标准的语法 */
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

    .footer {
        color: #ff8f34;
        font-size: 22rem/$baseFontSize;
        margin-top: 20px;
    }
</style>
<template>
    <div>
        <div class="bindBox">
            <div class="bindTop">卡号信息</div>
            <div class="bindBottom">
                <div class="inputBox">
                    <span class="lableText">持卡人</span>
                    <input class='inputText' @keyup="nameTest" @blur="blurName" v-model='accountName' type="text"
                           placeholder="只可绑定用户本人的银行卡">
                </div>
                <div class="inputBox">
                    <span class="lableText">开户银行</span>
                    <select v-model="binkCode" class='inputText selectBox'>
                        <option value="">请选择</option>
                        <option v-for="item in binkArr" :value="item.id" :key='item'>{{item.name}}</option>
                    </select>
                </div>
                <div class="inputBox">
                    <span class="lableText">银行卡号</span>
                    <input @keyup='changeBink' v-model="cardNumber" @blur='cardTest' class='inputText' type="tel"
                           maxlength="25"
                           placeholder="请绑定持卡人本人的银行卡">
                </div>
                <div class="inputBox">
                    <span class="lableText">身份证</span>
                    <input class='inputText' v-model="idNumber" @blur='idTest' type="text" placeholder="请输入本人身份证号码">
                </div>
                <div class="sure" v-if="isShow" @click="submitBink">确认</div>
                <div class="sure noShow" v-else>确认</div>
            </div>
            <div class="footer">
                <span>为保证资金安全，请严格按照指引绑定银行卡</span>
            </div>
        </div>
    </div>
</template>
<script>
    import Util from '../../../common/util'
    import Service from '../../../common/service'
    import {Toast} from 'mint-ui';
    import Patterns from '../../../common/patternRules'

    export default {
        name: "bindbankcard",
        data() {
            return {
                binkArr: [],
                binkCode: '',
                isShow: false,
                accountName: '',
                bankName: '',
                cardNumber: '',
                idNumber: '',
            }
        },
        created() {
            document.getElementsByTagName('title')[0].innerHTML = '余额提现';
            this.getBink();
            console.log(333)
        },
        mounted() {
            if (!this.binkCode) {
                $('.selectBox').css("color", "#dcdddd")
            }
            $(".selectBox").find("option").css("color", "#3d3d3d");

            this.goApply();
        },
        watch: {
            'binkCode': function () {
                if (this.binkCode == '') {
                    $(".selectBox").css("color", "#dcdddd");
                    this.isShow = false;
                } else {
                    this.vertify()
                    $(".selectBox").css("color", "#3d3d3d")
                }
                $(".selectBox").find("option").css("color", "#3d3d3d")
            }
        },
        methods: {
            goApply() {
                //判断是否已经绑定银行卡
                Service.user().getbankCard({}).then(
                    response => {
                        if (response.errorCode == 0) {
                            if (response.data === null) {
                                // this.$router.push({'path': '/user/putforward/bindbankcard'})//未绑定
                            } else {
                                this.$router.push({'path': '/user/putforward/apply', query: {accout: this.accout}})//已经绑定
                            }
                        }
                    },
                    response => {
                    }
                );
            },
            nameTest() {
                var name = this.accountName;
                if (!((Patterns.name).test(this.accountName))) {
                    Toast('请输入中文姓名')
                    return;
                }
                this.accountName = name.replace(/[^\u4e00-\u9fa5|,]+/, '').substring(0, 8);
                if (this.accountName.length > 1) {
                    this.vertify()
                } else {
                    this.isShow = false;
                }
            },
            blurName() {
                if (this.accountName.length < 2) {
                    this.isShow = false;
                    Toast('请输入真实姓名')
                } else {
                    this.vertify()
                }
            },
            cardTest() {
                var pattern = Patterns.bankCard;
                var cardNumber = this.cardNumber.replace(/\s+/g, "");
                console.log(cardNumber)
                if (pattern.test(cardNumber) == false) {
                    Toast('请输入正确银行卡号');
                    this.isShow = false;
                } else {
                    this.vertify()
                }
            },
            idTest() {
                // var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                this.idNumber = this.idNumber.replace(/\s+/g, "");
                if (this.idNumber.length > 18) {
                    this.idNumber = this.idNumber.substring(0, 18)
                }
                if ((Patterns.idNum).test(this.idNumber) === false) {
                    Toast('请输入正确身份证号')
                    this.isShow = false;
                } else {
                    this.vertify()
                }
            },
            vertify() {
                if (this.accountName.length > 1) {
                    if (this.binkCode != '') {
                        if (this.cardNumber.length != 0) {
                            if (this.idNumber.length != 0) {
                                this.isShow = true;
                            } else {
                                this.isShow = false;
                            }
                        } else {
                            this.isShow = false;
                        }
                    } else {
                        this.isShow = false;
                    }
                } else {
                    this.isShow = false;
                }
            },
            changeBink() {
                var maxValue = 23;
                this.cardNumber = this.cardNumber.replace(/[^\d\s]/g, "");
                this.cardNumber = this.cardNumber.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ").substring(0, maxValue);
            },
            submitBink() {
                var pattern = Patterns.bankCard;
                var reg = Patterns.idNum;
                var cardNumber = this.cardNumber.replace(/\s+/g, "");
                console.log(cardNumber)
                if (!((Patterns.name).test(this.accountName))) {
                    Toast('请输入中文姓名')
                } else if (this.accountName.length < 2) {
                    Toast('请输入正确中文姓名')
                } else if (this.binkCode == '') {
                    Toast('请选择开户银行')
                } else if (cardNumber == '') {
                    Toast('请输入银行卡号');
                } else if (pattern.test(cardNumber) == false) {
                    Toast('请输入正确银行卡号');
                } else if (reg.test(this.idNumber) === false) {
                    Toast('请输入正确身份证号')
                } else if (this.idNumber == '') {
                    Toast('请输入身份证号')
                } else {
                    for (var i = 0; i < this.binkArr.length; i++) {
                        if (this.binkCode == this.binkArr[i].id) {
                            this.bankName = this.binkArr[i].name;
                        }
                    }
                    Service.user().postbankCard({
                        accountName: this.accountName,
                        bankName: this.bankName,
                        cardNumber: cardNumber,
                        idNumber: this.idNumber
                    }).then(response => {
                        if (response.errorCode == 0) {
                            this.$router.push({path: '/user/putforward/apply'})
                        }
                    }, err => {
                    });
                }
            },
            getBink() {
                Service.sys().getBank({}).then(
                    response => {
                        if (response) {
                            this.binkArr = response.data;
                        }
                    },
                );
            },

        }
    }
</script>


