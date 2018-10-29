<style lang="scss" scoped>
    $baseFontSize: 75;
    .loginSucess {
        text-align: center;
        .sucessLogo {
            height: 260rem/$baseFontSize;
            width: 260rem/$baseFontSize;
            margin-top: 150rem/$baseFontSize;
        }
        .sucessTextBox {
            margin: 40rem/$baseFontSize 0;
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
        .goGuanzhu {
            width: 150px;
            height: 42px;
            background-color: #ffffff;
            border-radius: 10px;
            border: solid 1px #0abf9b;
            font-size: 32rem/$baseFontSize;
            line-height: 42px;
            color: #0abf9b;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: 920rem/$baseFontSize;
        }
        .code {
            margin-top: 8px;
            .fxjCode {
                height: 152px;
                width: 152px;
            }
            .introduce {
                font-size: 24rem/$baseFontSize;
                color: #929292;
                margin-top: 6px;
            }
        }
    }
</style>
<template>
    <div class="loginSucess">
        <div v-if="isSucess">
            <img class='sucessLogo' src="../../../assets/image/applaySucess.png">
            <div class="sucessTextBox">
                <p class="sucessText sucessTextone">申请提交成功</p>
                <p class="nosucessText sucessTexttwo">提现收入实时到账，注意查收～</p>
            </div>
            <div class="goGuanzhu" @click="guanzhu">确定</div>
        </div>
        <div v-else>
            <img class='sucessLogo' src="../../../assets/image/noapplay.png">
            <div class="sucessTextBox">
                <p class="sucessText sucessTextone">提现申请失败</p>
                <p class="nosucessText sucessTexttwo">您的提现遇到了点问题，请稍后再试～</p>
            </div>
            <div class="goGuanzhu" @click="guanzhu">确定</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "loginsucess",
        data() {
            return {
                isSucess: true,
            }
        },
        created() {
            document.getElementsByTagName('title')[0].innerHTML = '余额提现';
            console.log(this.$route.query.success)
            if (this.$route.query.success == 'false') {
                this.isSucess = false
            } else {
                this.isSucess = true;
            }
        },
        methods: {
            guanzhu() {
                this.$router.push({path: '/user/person/personinfo'})
                // window.location.href = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU5ODYwMDk5Ng==&scene=126#wechat_redirect'
            }
        }
    }
</script>


