<template>
    <div class="">
        <div class="swiper-inner">
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide v-for='item in posterList' :key='item'>
                    <div>
                        <img :src="item"/>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <p class="poster-p3">
            长按您想要的海报，可以保存和分享哦！
        </p>
    </div>
</template>
<script>
    import Service from '../../common/service'
    import Util from '../../common/util'
    import {Toast} from 'mint-ui'
    import Global from '../../common/global'

    export default {
        data() {
            return {
                posterList: [],
                swiperOption: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 20,
                    loop: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                },
                productId: '',
                url: ''

            }
        },
        created() {
            this.urlParams = this.$route.query;
            document.getElementsByTagName('title')[0].innerHTML = '产品海报';
            this.productId = this.$route.query.productId;
            var host = window.location.host
            var protocol = document.location.protocol;
            this.url = protocol + '//' + host + '/product/detail/' + this.productId;
            this.getBannerList()
        },
        watch: {},
        methods: {
            handleopen() {
                //console.log('handleopen');
            },
            handleClose() {
                //console.log('handleclose');
            },
            getBannerList() {
                Service.product().getProductPosterList({}, this.productId).then(response => {
                    for (var i = 0; i < response.data.length; i++) {
                        this.getpostList(response.data[i].id)
                    }
                }, err => {

                })
            },
            getpostList(id) {
                var data = document.location.protocol + Global.requestUrl + '/prod/poster/' + id + '/image?url=' + encodeURIComponent(this.url);
                this.posterList.push(data);
                console.log(this.posterList)
            }
        },
        mounted() {
        },
        destroyed() {

        },

    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @charset "utf-8";
    $baseFontSize: 75;
    .swiper-inner {
        width: 100%;
        padding-top: 100rem/$baseFontSize;
        margin-bottom: 100rem/$baseFontSize;
    }

    .swiper-slide {
        background-size: cover;
        background-color: rgba(255, 255, 255, 0);
        width: 550rem/$baseFontSize;
        height: 838rem/$baseFontSize;
        img {
            height: 838rem/$baseFontSize;
            width: 550rem/$baseFontSize;
            border-radius: 10px;
        }
    }

    .poster-p3 {
        font-size: 26rem/$baseFontSize;
        line-height: 60rem/$baseFontSize;
        color: #0abf9b;
        text-align: center;
    }
</style>
