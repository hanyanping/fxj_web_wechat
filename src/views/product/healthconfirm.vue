<template>
    <div class="container">
        <mt-header fixed title="投保须知">
        </mt-header>
        <div class="policyconfirm-doctext">
            1、
            被保险人最近6个月是否存在以下症状或接受以下任一检查：咯血、便血、血尿、吞咽困难、胸痛、浮肿、蛋白尿、消瘦（非健身原因所致的体重减轻超过5公斤）、任何不明性质的肿瘤、肿块、结节、息肉；B超、CT、核磁共振、内窥镜、病理活检检查且被要求继续就诊？
            2      被保险人过去二年内是否住院治疗或手术（不包括剖腹产/顺产/鼻炎/急性胃肠炎/单次发作已痊愈的肺炎/上呼吸道感染引起住院）?
            3     
            被保险人是否曾经被诊断或正患有以下任意疾病:良、恶性肿瘤（含原位癌、癌前病变）、高血压（收缩压达到160mmHg或舒张压达到100mmHg）、心脏病（包括心功能不全、冠心病、心肌梗梗死、心肌病）、主动脉血管瘤；脑血管病（包括脑出血、脑中风、脑血管畸形）；肝硬化、慢性肝功能衰竭失代偿期、慢性活动性肝炎（包括乙型、丙型病毒性肝炎或携带者）、糖尿病、胰腺炎、胰腺囊肿；溃疡性结肠炎、萎缩性胃炎或胃溃疡；肺部疾病（包括肺结核、慢性阻塞性肺病、尘肺、弥漫性肺间质纤维化、呼吸衰竭）；先天性疾病、遗传性疾病、红斑狼疮、肾脏疾病（包括慢性肾炎、肾功能衰竭、多囊肾）、严重的血液疾病（包括白血病、血友病、再生障碍性贫血）；神经疾病（包括癫痫、多发性硬化、重症肌无力）；精神分裂症、抑郁症、脑炎后遗症或脑膜炎后遗症、阿尔茨海默病、帕金森病；性病、艾滋病及HIV阳性、接受过器官移植、法定传染病甲类或乙类；智力障碍、严重视力或听力障碍、脊柱或胸廓畸形、四肢、手足缺损或畸形、瘫痪或植物人状态；成瘾性药物、毒品中毒史
            ?
            4      被保险人正在申请或已生效的重大疾病累计保额是否大于等于100万?
            5      适用于女性被保险人：是否有医生建议被保险人针对乳房、子宫、卵巢、宫颈疾病进行定期复查或治疗
        </div>
        <div class="footer flexBetween">
            <div class="cancel-btn" @click="openToast()">
                是
            </div>
            <div class="sure-btn" @click="goInfoWrite()">
                没有以上情况，继续下单
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
                bannerList: [],
                productList: [],
                limit: 10,
                page: 1
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log(to)
            if (to.query.loginCode) {
                Service.user().postLoginCode({
                    code: to.query.loginCode
                }).then(response => {
                    console.log(response)
                    Util.localStorageUtil.set("access_token", response.data.token);
                    Util.localStorageUtil.set("userInfo", response.data);
                    let queryObj = to.query
                    delete queryObj.loginCode
                    next({
                        name: 'healthconfirm',
                        params: to.params,
                        query: queryObj,
                        replace: true
                    })
                })
            } else {
                next()
            }
        },
        watch: {},
        methods: {
            handleopen() {
                //console.log('handleopen');
            },
            handleClose() {
                //console.log('handleclose');
            },
            openToast() {
                Toast({
                    message: '不符合本产品投保条件，请重新确认信息或购买其他产品',
                    duration: 4000
                });
            },
            goInfoWrite() {
                this.$router.push({
                    name: 'infowrite',
                    params: {
                        productId: this.$route.params.productId
                    },
                    query: this.$route.query
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
            console.log(this.$route.query)
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
        border: solid 1px #eeeeee;
        .cancel-btn {
            width: 230rem/$baseFontSize;
            background: #FFFFFF;
            color: #00A399;
            text-align: center;
            font-size: 28rem/$baseFontSize;
            line-height: 100rem/$baseFontSize;
            &:active {
                opacity: 0.6;
            }
        }
        .sure-btn {
            width: 520rem/$baseFontSize;
            background-image: linear-gradient(90deg, #0abf9b 0%, #14baff 100%), linear-gradient(#ffffff, #ffffff);
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