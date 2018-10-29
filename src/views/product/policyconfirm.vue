<template>
    <div class="container">
        <div class="policyconfirm-box">
            <div class="item-box">
                <div class="item-tit">
                    投保计划
                </div>
                <div class="item-list" v-for="(list,index) in orderDetail.riskList">
                    <div class="cell-list">
                        <div class="cell-list-tit">产品名称</div>
                        <div class="cell-list-con">{{list.riskName}}</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">保险金额</div>
                        <div class="cell-list-con">{{list.insuredAmount}}元</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">保障期间</div>
                        <div class="cell-list-con">{{list.insuYearName}}</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">保费</div>
                        <div class="cell-list-con">{{list.premium}}元</div>
                    </div>
                </div>

            </div>
            <div class="item-box">
                <div class="item-tit">
                    投保人信息
                </div>
                <div class="cell-list">
                    <div class="cell-list-tit">投保人</div>
                    <div class="cell-list-con">{{applicant.name}}</div>
                </div>
                <div class="cell-list">
                    <div class="cell-list-tit">证件类型</div>
                    <div class="cell-list-con" v-if="applicant.idType == 1">身份证</div>
                    <div class="cell-list-con" v-if="applicant.idType == 2">护照</div>
                </div>
                <div class="cell-list">
                    <div class="cell-list-tit">证件号码</div>
                    <div class="cell-list-con">{{applicant.idNumber}}</div>
                </div>
                <div class="cell-list">
                    <div class="cell-list-tit">邮箱地址</div>
                    <div class="cell-list-con">{{applicant.email}}</div>
                </div>
                <div class="cell-list" style="margin-top: 14px;">
                    <div class="cell-list-tit" style="line-height: 20px;">居住地址</div>
                    <div class="cell-list-con" style="line-height: 20px;">
                        {{applicant.province}}{{applicant.city}}{{applicant.district}}{{applicant.address}}
                    </div>
                </div>
            </div>
            <div class="item-box">
                <div class="item-tit">
                    被保人信息
                </div>
                <div class="item-list" v-for="(list,index) in orderDetail.insuredList">
                    <div class="cell-list">
                        <div class="cell-list-tit">被保人</div>
                        <div class="cell-list-con">{{list.name}}</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">与投保人关系</div>
                        <div class="cell-list-con">{{getRelationStatus(list.relation)}}</div>
                    </div>
                    g
                    <div class="cell-list">
                        <div class="cell-list-tit">证件类型</div>
                        <div class="cell-list-con" v-if="list.idType == 1">身份证</div>
                        <div class="cell-list-con" v-if="list.idType == 2">护照</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">证件号码</div>
                        <div class="cell-list-con">{{list.idNumber}}</div>
                    </div>
                </div>

            </div>
            <div class="item-box">
                <div class="item-tit">
                    受益人人信息
                </div>
                <div class="item-list" v-if="orderDetail.insuredList.lenght"
                     v-for="(list,index) in orderDetail.insuredList">
                    <div class="cell-list">
                        <div class="cell-list-tit">受益人</div>
                        <div class="cell-list-con">指定受益人</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">与投保人关系</div>
                        <div class="cell-list-con">XX</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">证件类型</div>
                        <div class="cell-list-con">XX</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">证件号码</div>
                        <div class="cell-list-con">XX</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">收益顺序</div>
                        <div class="cell-list-con">XX</div>
                    </div>
                    <div class="cell-list">
                        <div class="cell-list-tit">收益份额</div>
                        <div class="cell-list-con">XX</div>
                    </div>
                </div>
                <div class="item-list" v-if="!orderDetail.insuredList.lenght"
                     v-for="(list,index) in orderDetail.insuredList">
                    <div class="cell-list">
                        <div class="cell-list-tit">受益人</div>
                        <div class="cell-list-con">法定受益人</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="sure-btn" @click="goPay()">
                确认无误、支付
            </div>
        </div>
    </div>
</template>
<script>
    import Util from '../../common/util'
    import Service from '../../common/service'
    import Global from '../../common/global'
    import Filter from '../../common/filter'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                limit: 30,
                orderDetail: {},
                applicant: {}
            }
        },
        watch: {},
        beforeRouteEnter(to, from, next) {
            console.log(to)
            if (to.query.loginCode) {
                Service.user().postLoginCode({
                    code: to.query.loginCode
                }).then(response => {
                    console.log(response)
                    if (response.data) {
                        Util.localStorageUtil.set("access_token", response.data.token);
                        Util.localStorageUtil.set("userInfo", response.data);
                        let queryObj = to.query
                        delete queryObj.loginCode
                        next({
                            name: 'policyconfirm',
                            params: to.params,
                            query: queryObj,
                            replace: true
                        })
                    }
                })
            } else {
                next()
            }
        },
        methods: {
            openToast() {

            },
            getRelationStatus(state) {
                return Filter.getRelationStatus(state)
            },
            getOrderDetail() {
                Service.order().getorderDetail({}, this.$route.query.orderId).then(res => {
                    console.log(res)
                    this.orderDetail = res.data
                    this.applicant = res.data.applicant
                }, err => {

                })
            },
            goPay() { //跳转到昆仑收银系统
                let callBackUrl = encodeURIComponent(Global.clientInfo.oneLevUrl + '/pay/result?orderNo=' + this.$route.query.payOrderNo + '&orderId=' + this.$route.query.orderId)
                window.location.href = Global.clientInfo.cashierUrl + '?orderNo=' + this.$route.query.payOrderNo + '&callbackUrl=' + callBackUrl
            }
        },
        beforeMount() {

        },
        mounted() {

        },
        destroyed() {

        },
        created() {
            document.getElementsByTagName('title')[0].innerHTML = '保单确认';
            this.getOrderDetail()
            console.log(this.$route.query)
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @charset "utf-8";
    $baseFontSize: 75;
    .policyconfirm-box {
        padding: 0 40rem/$baseFontSize 100rem/$baseFontSize;
        margin-top: -40rem/$baseFontSize;
        color: #929292;
        .item-box {
            background-color: #ffffff;
            box-shadow: 2px 4px 10px 4px rgba(175, 175, 175, 0.2);
            border-radius: 20rem/$baseFontSize;
            margin-bottom: 40rem/$baseFontSize;
            overflow: hidden;
            .item-tit {
                font-size: 32rem/$baseFontSize;
                color: #00A39A;
                line-height: 100rem/$baseFontSize;
                padding-left: 34rem/$baseFontSize;
            }
            .item-list {
                border-bottom: 2px solid #EEEEEE;
                &:last-child {
                    border: 0;
                }
            }
            .cell-list {
                box-sizing: border-box;
                display: flex;
                font-size: 28rem/$baseFontSize;
                line-height: 96rem/$baseFontSize;
                line-height: 1;
                height: 96rem/$baseFontSize;
                overflow: hidden;
                padding: 0 34rem/$baseFontSize;
                width: 100%;
            }
            .cell-list-tit {
                max-width: 105px;
                flex: 1;
                line-height: 96rem/$baseFontSize;
            }
            .cell-list-con {
                flex: 1;
                line-height: 96rem/$baseFontSize;
            }
        }
    }

    .footer {
        height: 100rem/$baseFontSize;
        width: 100%;
        bottom: 0;
        right: 0;
        left: 0;
        position: fixed;
        z-index: 1;
        .sure-btn {
            width: 100%;
            background-image: linear-gradient(90deg, #0abf9b 0%, #00b4ff 100%), linear-gradient(#0abf9b, #0abf9b);
            background-blend-mode: normal, normal;
            color: #FFFFFF;
            text-align: center;
            font-size: 28rem/$baseFontSize;
            line-height: 100rem/$baseFontSize;
            &:active {
                opacity: 0.6;
            }
        }
    }
</style>