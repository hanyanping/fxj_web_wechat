<template>
    <div class="container">
        <div class="img-box" v-if="state == '2'">
            <img class="pay-state-img" src="../../assets/image/paySucess.png"/>
            <div class="pay-state-p">
                承保成功~
            </div>
        </div>
        <div class="img-box" v-else-if="state == '3'">
            <img class="pay-state-img" src="../../assets/image/payFail.png"/>
            <div class="pay-state-p">
                承保失败~
            </div>
            <div class="pay-state-tip">
                您的付款我们会原路返还，如有疑问 请联系：
                <a href="tel:4008118899">400-811-8899</a>
            </div>
            <div class="pay-state-reason">
                {{detail.statusDesc}}
            </div>
        </div>

        <div class="img-box" v-if="state == '1'">
            <img class="pay-state-img" src="../../assets/image/payFail.png"/>
            <div class="pay-state-p">
                待支付~
            </div>

        </div>
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
</template>
<script>
    import Util from '../../common/util'
    import Service from '../../common/service'
    import {Toast} from 'mint-ui'
    //  state Y:承保成功,N:承保失败,M:支付成功,需刷新订单状态,F支付失败
    export default {
        data() {
            return {
                state: '',
                detail: {}
            }
        },
        watch: {},
        methods: {
            orderDetail() {
                this.$router.push({
                    name: 'orderdetail',
                    query: {
                        orderId: this.$route.query.orderId,
                        payOrderNo: this.$route.query.orderNo
                    }
                })
            },
            getOrderState() {
                Service.order().getorderState({}, this.$route.query.orderId).then(response => {
                    console.log(response)
                    this.detail = response.data
                    this.state = response.data.status
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
            this.getOrderState()
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
        width: 260rem/$baseFontSize;
        height: 260rem/$baseFontSize;
    }

    .pay-state-p {
        display: inline-block;
        width: 100%;
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
        border: 1px solid #0abf9b;
        &.order-btn {
            margin-top: 168rem/$baseFontSize;
            color: #0abf9b
        }
        &.close-btn {
            background-image: linear-gradient(90deg, #0abf9b 0%, #00b4ff 100%), linear-gradient(#0abf9b, #0abf9b);
            background-blend-mode: normal, normal;
            color: #FFFFFF;
            margin-top: 40rem/$baseFontSize;
        }
        &:active {
            opacity: .6;
        }
    }
</style>