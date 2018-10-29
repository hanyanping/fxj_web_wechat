<template>
    <div class="container">
        <mt-header fixed title="保险条款">
        </mt-header>
        <div class="policyconfirm-doctext">

        </div>
        <div class="footer flexBetween">
            <div class="sure-btn" @click="goInfoWrite()">
                已阅读
            </div>
        </div>
    </div>
</template>
<script>
    import Util from '../../common/util'
    import Service from '../../common/service'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                docDetail: {}
            }
        },
        methods: {
            getDocDetail() {
                Service.product().getDocDetail({}, this.$route.params.docId).then(response => {
                    console.log(response)
                    this.docDetail = response.data
                    document.getElementsByClassName('mint-header-title')[0].innerHTML = response.data.name;
                    document.getElementsByTagName('title')[0].innerHTML = response.data.name;
                }, err => {

                })
            },
            goInfoWrite() {
                this.$router.go(-1)
            }
        },
        mounted() {

        },
        destroyed() {

        },
        created() {
            this.getDocDetail()
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @charset "utf-8";
    $baseFontSize: 75;
    .policyconfirm-doctext {
        padding: 40rem/$baseFontSize 40rem/$baseFontSize 100rem/$baseFontSize;
        font-size: 24rem/$baseFontSize;
        line-height: 60rem/$baseFontSize;
        color: #727070;
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
            background-image: -webkit-gradient(linear, 0 100%, 0 0, from(#00a199), to(#0268b7));
            background-image: -webkit-linear-gradient(90deg, #00a199 0%, #0268b7 100%);
            background-image: -moz-linear-gradient(90deg, #00a199 0%, #0268b7 100%);
            background-image: -o-linear-gradient(90deg, #00a199 0%, #0268b7 100%);
            background-image: linear-gradient(90deg, #00a199 0%, #0268b7 100%), linear-gradient(#ffffff, #ffffff);
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