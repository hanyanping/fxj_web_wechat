<template>
    <div class="container">
        <div class="img-box" v-if="state == 'Y'">
            <img class="pay-state-img" src="../../assets/image/paySucess.png"/>
            <div class="pay-state-p">
                承保成功~
            </div>
        </div>
        <div class="img-box" v-else-if="state == 'M'">
            <img class="pay-state-img" src="../../assets/image/paySucess.png"/>
            <div class="pay-state-p">
                支付成功~
            </div>
            <div class="pay-state-tip">
                努力承保中~，请稍后
            </div>
        </div>
        <div class="img-box" v-else-if="state == 'N'">
            <img class="pay-state-img" src="../../assets/image/payFail.png"/>
            <div class="pay-state-p">
                承保失败~
            </div>
            <div class="pay-state-tip">
                您的付款我们会原路返还，如有疑问 请联系：
                <a href="tel:400999000">400 999 000</a>
            </div>
            <div class="pay-state-reason">
                承保失败原因承保失败原因承保失败 承保失败原因承保失败原因承保失败 原因承保失败原因承保失败原因原因 承保失败原因
            </div>
        </div>
        <div class="" v-if="state != 'M'">
            <div>
                <div class="btn order-btn" @click="orderDetail()">
                    查看订单信息
                </div>
            </div>
            <div>
                <div class="btn close-btn" @click="goMain()">
                    完成
                </div>
            </div>

        </div>
        <div class="" v-else-if="state == 'M'">
            <div>
                <div class="btn order-btn" @click="reloadState">
                    刷新状态
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Util from '../../common/util'
    import Service from '../../common/service'
    import {Toast} from 'mint-ui'
    //	state Y:承保成功,N:承保失败,M:支付成功,需刷新订单状态
    export default {
        data() {
            return {
                state: ''
            }
        },
        watch: {},
        methods: {
            orderDetail() {
                this.$router.push({
                    name: 'orderdetail',
                    query: {
                        id: this.$route.query.orderid
                    }
                })
            },
            reloadState() {
                this.state = 'Y'
            },
            getOrderState() {
                Service.order().getorderDetail({}, this.$route.query.orderid).then(response => {
                    console.log(response)
                }, err => {

                })
            },
            goMain() {
                this.$router.push({
                    name: 'home',
                })
            }
        },
        beforeMount() {

        },
        mounted() {

        },
        destroyed() {

        },
        created() {
            console.log(this.$route.params);
            this.state = this.$route.params.result
            this.reloadState()
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @charset "utf-8";
    $baseFontSize: 75;
    .container {
        text-align: center;
    }

    .img-box {
        padding-top: 78rem/$baseFontSize;
    }

    .pay-state-img {
        display: inline-block;
        width: 408rem/$baseFontSize;
        height: 255rem/$baseFontSize;
    }

    .pay-state-p {
        display: inline-block;
        width: 400rem/$baseFontSize;
        font-size: 32rem/$baseFontSize;
        line-height: 36rem/$baseFontSize;
        color: #3D3D3D;
        margin-top: 40rem/$baseFontSize;
    }

    .pay-state-tip {
        display: inline-block;
        width: 400rem/$baseFontSize;
        font-size: 24rem/$baseFontSize;
        line-height: 36rem/$baseFontSize;
        color: #3D3D3D;
        margin-top: 20rem/$baseFontSize;
    }

    .pay-state-reason {
        display: inline-block;
        width: 400rem/$baseFontSize;
        font-size: 24rem/$baseFontSize;
        line-height: 36rem/$baseFontSize;
        color: #929292;
    }

    .btn {
        display: inline-block;
        width: 300rem/$baseFontSize;
        border-radius: 10px;
        text-align: center;
        font-size: 32rem/$baseFontSize;
        line-height: 84rem/$baseFontSize;
        border: 1px solid #05a19a;
        &.order-btn {
            margin-top: 168rem/$baseFontSize;
            color: #00A39A
        }
        &.close-btn {
            background-color: #05a19a;
            color: #FFFFFF;
            margin-top: 40rem/$baseFontSize;
        }
        &:active {
            opacity: .6;
        }
    }
</style>