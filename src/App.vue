<template>
    <transition name="bounce">
        <div id="app">
            <loading v-if="isLoading"></loading>
            <router-view></router-view>
        </div>
    </transition>
</template>

<script>
    import Store from './vuex/index';
    import Loading from './components/loading';

    export default {
        name: 'app',
        computed: {
            isLoading: function () {
                return Store.state.isLoading
            }
        },
        components: {
            Loading,
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    @charset "utf-8";
    $bgcolor: #D51E12;
    $fontFamily: PingFang SC, Microsoft YaHei UI, Microsoft YaHei,"微软雅黑", Arial, sans-serif;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    #app {
        font-family: $fontFamily;
        -webkit-text-size-adjust: 100%;
    }

    /* 覆盖mint-ui的primary颜色，改为自己UI的主题色 */

    $color-primary: #0abf9b;

    .mint-header {
        background-color: #FFFFFF;
        padding: 0 40rem/$baseFontSize;
        color: #0abf9b;
        border-bottom: 1px solid #EEEEEE;
        .mint-header-title {
            flex: 1.5;
            font-size: 32rem/$baseFontSize;
        }
        img {
            width: 40rem/$baseFontSize;
            height: 40rem/$baseFontSize;
        }
    }

    .mint-swipe-items-wrap {
        position: relative;
        overflow: hidden;
        width: 670rem/$baseFontSize;
        height: 332rem/$baseFontSize;
        left: 50%;
        top: 54%;
        transform: translate(-50%, -50%);
    }

    .mint-cell-wrapper {
        & {
            background-image: none;
            padding: 0 30rem/$baseFontSize 0 40rem/$baseFontSize;
        }
        .mint-field-other {
            display: none;
            position: absolute;
            top: auto;
            top: 66rem/$baseFontSize;
            left: 125px;
            right: 40rem/$baseFontSize;
            z-index: 10;
            font-size: 22rem/$baseFontSize;
            line-height: 1.2;
            color: #ff8f34;
            &.is-show {
                display: block;
            }
        }

    }

    .popup-login-content {
        .mint-cell-wrapper {
            padding: 0 !important;
            border-bottom: 1px solid #e5e5e5;
        }
    }

    .mint-cell-title {
        position: relative;
        top: -1px;
    }

    .mint-toast {
        z-index: 2099;
    }

    .picker-item.picker-selected {
        color: #0abf9b;
    }

    .mint-button:not(.is-disabled):active::after {
        opacity: .2 /* .6 */
    }

    .mint-button--primary {
        background-color: $color-primary;
    }

    .mint-button--primary.is-plain {
        border: 1px solid $color-primary;
        color: $color-primary
    }

    .mint-badge.is-primary {
        background-color: $color-primary
    }

    .mint-switch-input:checked + .mint-switch-core {
        border-color: $color-primary;
        background-color: $color-primary;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 3px solid $color-primary;
        color: $color-primary;
    }

    .mint-tabbar > .mint-tab-item.is-selected {
        color: $color-primary;
    }

    .mint-searchbar-cancel {
        color: $color-primary;
    }

    .mint-checkbox-input:checked + .mint-checkbox-core {
        background-color: $color-primary;
        border-color: $color-primary;
    }

    .mint-radio-input:checked + .mint-radio-core {
        background-color: $color-primary;
        border-color: $color-primary;
    }

    .mt-range-progress {
        background-color: $color-primary;
    }

    .mt-progress-progress {
        background-color: $color-primary;
    }

    .mint-msgbox-confirm {
        color: $color-primary;
    }

    .mint-msgbox-confirm:active {
        color: $color-primary;
    }

    .mint-datetime-action {
        color: $color-primary;
        width: 33%;
        font-weight: 600;
    }

    .mint-header {
        height: 50px;
        .mint-button {
            top: 2px;
        }
    }

    .container {
        background: #FFFFFF;
        margin-top: 40px;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-out .2s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0);
        }
    }
</style>