<style rel="stylesheet/scss" lang="scss" scoped>
    $bgcolor: #D51E12;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .infodetail {
        padding: 5px 20px;

        .flexBetween {
            border-bottom: 1px solid #eee;
            padding: 0px 5px;
            line-height: 120rem/$baseFontSize;
            height: 120rem/$baseFontSize;
            font-size: 30rem/$baseFontSize;
            .iconText {
                display: inline-block;
                vertical-align: middle;
                color: #3d3d3d;
            }
            .icon {
                vertical-align: middle;
                height: 124rem/$baseFontSize;
                width: 124rem/$baseFontSize;
                border-radius: 50%;
            }
            .frText {
                color: #929292;
            }
        }
    }
</style>
<template>
    <div>
        <div class="infodetail">
            <div class="flexBetween" style="padding:20px 5px;">
                <span class="iconText">微信头像</span>
                <img class="icon" :src="personData.headImageUrl"/>
            </div>
            <div class="flexBetween">
                <span class="iconText">微信昵称</span>
                <span class="frText">{{decodeURIComponent(personData.nickname)}}</span>
            </div>
            <div class="flexBetween">
                <span class="iconText">姓名</span>
                <span class="frText">{{personData.realName}}</span>
            </div>
            <div class="flexBetween">
                <span class="iconText">手机号</span>
                <span class="frText">{{personData.phone}}</span>
            </div>
            <div class="flexBetween">
                <span class="iconText">身份证号</span>
                <span class="frText">{{personData.idNumber}}</span>
            </div>
            <div class="flexBetween">
                <span class="iconText">银行卡号</span>
                <span class="frText">{{personData.cardNumber}}</span>
            </div>
            <div class="flexBetween">
                <span class="iconText">所属银行</span>
                <span class="frText">{{personData.bankName}}</span>
            </div>
        </div>
    </div>

</template>

<script>
    import Util from '../../../common/util'
    import {Loadmore, Toast} from 'mint-ui';
    import Service from '../../../common/service'

    export default {
        name: "infodetail",
        data() {
            return {
                personData: {},
                idCard: '',
                bankCard: ''
            }
        },
        created() {
            document.getElementsByTagName('title')[0].innerHTML = '个人中心';
            this.bankCard = this.plusXing(this.bankCard, 4, 4);

        },
        mounted() {
            this.getPersonInfo()
        },
        methods: {
            getPersonInfo() {
                Service.user().getpersonDetail({}).then(response => {
                    console.log(response);
                    if (response.errorCode == 0) {
                        this.personData = response.data;
                    }
                }, err => {
                });
            },
            plusXing(str, frontLen, endLen) {
                var len = str.length - frontLen - endLen;
                var xing = '';
                for (var i = 0; i < len; i++) {
                    xing += '*';
                }
                return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
            },
            goBack() {
                history.back(-1);
            }
        }
    }
</script>


