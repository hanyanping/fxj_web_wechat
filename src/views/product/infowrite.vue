<template>
    <div class="container">
        <div class="infowrite-box">
            <div class="infowrite-item-box appnt-box">
                <div class="infowrite-item-tit">
                    投保人信息
                </div>
                <mt-field state="" :disableClear="this.disableClear" class="appnt-name" label="姓名" placeholder="请输入姓名"
                          v-model="appnt.name" @focus.native.capture="showParrent('.appnt-name')"
                          @blur.native.capture="check('name',appnt,'.appnt-name')" type="text">
                    姓名与证件相符保障您的权益
                </mt-field>
                <a class="mint-cell mint-field">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">证件类型</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="mint-cell-value is-link">
                                <select name="" class="mint-field-core text-right" v-model="appnt.idType">
                                    <option value="1">身份证</option>
                                    <option value="2">护照</option>
                                </select>
                            </div>
                        </div>
                        <i class="mint-cell-allow-right"></i>
                    </div>
                </a>
                <mt-field state="" :disableClear="this.disableClear" label="证件号码" placeholder="请输入证件号码" type="number"
                          v-model="appnt.idNum" @blur.native.capture="check('idNum',appnt)">

                </mt-field>
                <a class="mint-cell mint-field" v-if="appnt.idType == 1">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">证件有效期</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="value-list margin-l appnt-certVaildity active"
                                 @click="checkCertVaildity('appnt',1)">
                                短期
                            </div>
                            <div class="value-list appnt-certVaildity" @click="checkCertVaildity('appnt',2)">
                                长期
                            </div>
                        </div>
                    </div>
                </a>
                <a class="mint-cell mint-field" v-if="appnt.idType == 1 && appnt.certVaildity == 1">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">选择有效期</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="mint-cell-value is-link" @click="openPicker('appntCertDatePicker')">
                                <input placeholder="请选择日期" type="datetime" class="list-field-core" readonly="readonly"
                                       v-model="appnt.certDate">
                                <img class="time-icon" src="../../assets/image/rili.png"/>
                            </div>
                        </div>
                    </div>
                </a>
                <a class="mint-cell mint-field" v-if="appnt.idType != 1">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">出生日期</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="mint-cell-value is-link" @click="openPicker('appntDatePicker')">
                                <input placeholder="请选择日期" type="datetime" class="list-field-core" readonly="readonly"
                                       v-model="appnt.birthday">
                                <img class="time-icon" src="../../assets/image/rili.png"/>
                            </div>
                        </div>
                    </div>
                </a>
                <a class="mint-cell mint-field" v-if="appnt.idType != 1">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">性&nbsp;&nbsp;别</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="value-list margin-l appnt-sex" @click="checkSex('appnt',1)">
                                男
                            </div>
                            <div class="value-list appnt-sex" @click="checkSex('appnt',2)">
                                女
                            </div>
                        </div>
                    </div>
                </a>
                <mt-field state="" :disableClear="this.disableClear" label="手机号码" class="appnt-mobile"
                          placeholder="请输入手机号码" type="tel" v-model="appnt.mobile"
                          @focus.native.capture="showParrent('.appnt-mobile')"
                          @blur.native.capture="check('mobile',appnt,'.appnt-mobile')">
                    正确填写手机号码，理赔时很关键哦
                </mt-field>

                <mt-field state="" :disableClear="this.disableClear" label="电子邮箱" class="appnt-mail"
                          placeholder="请输入您的电子邮箱" type="email" v-model="appnt.mail"
                          @focus.native.capture="showParrent('.appnt-mail')"
                          @blur.native.capture="check('mail',appnt,'.appnt-mail')">
                    正确邮箱用于接收电子保单
                </mt-field>
                <a class="mint-cell mint-field">
                    <div class="mint-cell-left"></div>
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">所在地区</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="mint-cell-value is-link" @click="choiceArea">
                                <input placeholder="请选择省市" type="text" class="mint-field-core text-right"
                                       readonly="readonly" v-model="appnt.areaText">
                            </div>
                        </div>
                        <i class="mint-cell-allow-right"></i>
                        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
                            <div class="picker-toolbar">
                                <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
                                <span class="mint-datetime-action mint-datetime-confirm"
                                      @click="selectaddress">确定</span>
                            </div>
                            <mt-picker :slots="slots" value-key="text" @change="onCityChange"></mt-picker>
                        </mt-popup>
                    </div>
                </a>
                <mt-field state="" :disableClear="this.disableClear" label="详细地址" placeholder="街道、楼牌号等" type="textarea"
                          rows="1" v-model="appnt.address" @blur.native.capture="check('address',appnt)"></mt-field>
            </div>
            <div class="infowrite-item-box insureds-box">
                <div class="infowrite-item-tit">
                    被保人信息
                </div>
                <a class="mint-cell mint-field">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">为谁投保</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="mint-cell-value is-link">
                                <select name="" class="mint-field-core text-right" v-model="insureds.relationType">
                                    <option value="0">请选择被保人</option>
                                    <option value="1">本人</option>
                                    <option value="2">配偶</option>
                                    <option value="3">父母</option>
                                    <option value="4">子女</option>
                                </select>
                            </div>
                        </div>
                        <i class="mint-cell-allow-right"></i>
                    </div>
                </a>
                <div class="" v-if="insureds.relationType != 0 && insureds.relationType != 1">
                    <mt-field state="" :disableClear="this.disableClear" label="被保人姓名" placeholder="请输入姓名"
                              v-model="insureds.name" @blur.native.capture="check('name',insureds)"
                              type="text"></mt-field>
                    <a class="mint-cell mint-field">
                        <div class="mint-cell-wrapper">
                            <div class="mint-cell-title">
                                <span class="mint-cell-text">证件类型</span>
                            </div>
                            <div class="mint-cell-value">
                                <div class="mint-cell-value is-link">
                                    <select name="" class="mint-field-core text-right" v-model="insureds.idType">
                                        <option value="1">身份证</option>
                                        <option value="2">护照</option>
                                    </select>
                                </div>
                            </div>
                            <i class="mint-cell-allow-right"></i>
                        </div>
                    </a>
                    <mt-field state="" :disableClear="this.disableClear" label="证件号码" placeholder="请输入证件号码"
                              type="number" v-model="insureds.idNum"
                              @blur.native.capture="check('idNum',insureds)"></mt-field>
                    <a class="mint-cell mint-field" v-if="insureds.idType == 1">
                        <div class="mint-cell-wrapper">
                            <div class="mint-cell-title">
                                <span class="mint-cell-text">证件有效期</span>
                            </div>
                            <div class="mint-cell-value">
                                <div class="value-list margin-l insureds-certVaildity active"
                                     @click="checkCertVaildity('insureds',1)">
                                    短期
                                </div>
                                <div class="value-list insureds-certVaildity" @click="checkCertVaildity('insureds',2)">
                                    长期
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="mint-cell mint-field" v-if="insureds.idType == 1 && insureds.certVaildity == 1">
                        <div class="mint-cell-wrapper">
                            <div class="mint-cell-title">
                                <span class="mint-cell-text">选择有效期</span>
                            </div>
                            <div class="mint-cell-value">
                                <div class="mint-cell-value is-link" @click="openPicker('insCertDatePicker')">
                                    <input placeholder="请选择日期" type="datetime" class="list-field-core"
                                           readonly="readonly" v-model="insureds.certDate">
                                    <img class="time-icon" src="../../assets/image/rili.png"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="mint-cell mint-field" v-if="insureds.idType != 1">
                        <div class="mint-cell-wrapper">
                            <div class="mint-cell-title">
                                <span class="mint-cell-text">出生日期</span>
                            </div>
                            <div class="mint-cell-value">
                                <div class="mint-cell-value is-link" @click="openPicker('insDatePicker')">
                                    <input placeholder="请选择日期" type="datetime" class="list-field-core"
                                           readonly="readonly" v-model="insureds.birthday">
                                    <img class="time-icon" src="../../assets/image/rili.png"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="mint-cell mint-field" v-if="insureds.idType != 1">
                        <div class="mint-cell-wrapper">
                            <div class="mint-cell-title">
                                <span class="mint-cell-text">性&nbsp;&nbsp;别</span>
                            </div>
                            <div class="mint-cell-value">
                                <div class="value-list margin-l insureds-sex" @click="checkSex('insureds',1)">
                                    男
                                </div>
                                <div class="value-list insureds-sex" @click="checkSex('insureds',2)">
                                    女
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="infowrite-item-box bnf-box">
                <div class="infowrite-item-tit">
                    受益人信息
                </div>
                <a class="mint-cell mint-field">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">受益人类型</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="mint-cell-value is-link" v-if="productDetail.canChooseBeneficiary">
                                <!--<div class="mint-cell-value is-link">-->
                                <select name="" class="mint-field-core text-right" v-model="bnf.relationType">
                                    <option value="100">法定受益人</option>
                                    <option value="1">指定受益人</option>
                                </select>
                            </div>
                            <div class="mint-cell-value is-link" v-else="!productDetail.canChooseBeneficiary">
                                <select name="" class="mint-field-core text-right" v-model="bnf.relationType">
                                    <option value="100">法定受益人</option>
                                </select>
                            </div>
                        </div>
                        <i class="mint-cell-allow-right"></i>
                    </div>
                </a>
                <div v-if="bnf.relationType == 1">
                    <div class="addBnfBtn" @click="addBnf()">
                        <span class="bg-btn"></span><span class="text-btn">新增受益人信息</span>
                    </div>
                    <mt-popup v-model="addBnfModel" popup-transition="popup-fade" class="addBnf-popup">
                        <div class="infowrite-item-tit">
                            受益人信息
                        </div>
                        <a class="mint-cell mint-field">
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <span class="mint-cell-text">受益人类型</span>
                                </div>
                                <div class="mint-cell-value">
                                    <div class="mint-cell-value is-link">
                                        <select name="" class="mint-field-core text-right" v-model="bnf.relationType">
                                            <option value="1">指定受益人</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="mint-cell mint-field">
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <span class="mint-cell-text">与被保人关系</span>
                                </div>
                                <div class="mint-cell-value">
                                    <div class="mint-cell-value is-link">
                                        <select name="" class="mint-field-core text-right" v-model="bnf.relationType">
                                            <option value="1">本人</option>
                                            <option value="2">配偶</option>
                                            <option value="3">子女</option>
                                            <option value="4">父母</option>
                                            <option value="5">其它法定受益人</option>
                                        </select>
                                    </div>
                                </div>
                                <i class="mint-cell-allow-right"></i>
                            </div>
                        </a>
                        <mt-field state="" :disableClear="this.disableClear" label="受益人姓名" placeholder="请输入受益人姓名"
                                  v-model="bnf.name" @blur.native.capture="check('name',bnf)" type="text"></mt-field>
                        <a class="mint-cell mint-field">
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <span class="mint-cell-text">证件类型</span>
                                </div>
                                <div class="mint-cell-value">
                                    <div class="mint-cell-value is-link">
                                        <select name="" class="mint-field-core text-right" v-model="bnf.idType">
                                            <option value="1">身份证</option>
                                            <option value="2">护照</option>
                                        </select>
                                    </div>

                                </div>
                                <i class="mint-cell-allow-right"></i>
                            </div>
                        </a>
                        <mt-field state="" :disableClear="this.disableClear" label="证件号码" placeholder="请输入证件号码"
                                  type="number" v-model="bnf.idNum"
                                  @blur.native.capture="check('idNum',bnf)"></mt-field>
                        <a class="mint-cell mint-field" v-if="bnf.idType != 1">
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <span class="mint-cell-text">出生日期</span>
                                </div>
                                <div class="mint-cell-value">
                                    <div class="mint-cell-value is-link" @click="openPicker('bnfDatePicker')">
                                        <input placeholder="请选择日期" type="datetime" class="list-field-core"
                                               readonly="readonly" v-model="bnf.birthday">
                                        <img class="time-icon" src="../../assets/image/rili.png"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="mint-cell mint-field" v-if="bnf.idType != 1">
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <span class="mint-cell-text">性&nbsp;&nbsp;别</span>
                                </div>
                                <div class="mint-cell-value">
                                    <div class="value-list margin-l bnf-sex" @click="checkSex('bnf',1)">
                                        男
                                    </div>
                                    <div class="value-list bnf-sex" @click="checkSex('bnf',2)">
                                        女
                                    </div>
                                </div>
                            </div>
                        </a>
                        <mt-field state="" :disableClear="this.disableClear" label="份额" placeholder="请填写份额"
                                  type="number" v-model="bnf.lot"></mt-field>
                        <mt-field state="" :disableClear="this.disableClear" label="收益顺序" placeholder="请填写收益顺序"
                                  type="text" v-model="bnf.sequence"></mt-field>
                        <div class="addBnf-footer flexBetween">
                            <div class="cancel-bar bar" @click="closeBtnPopup()">
                                取消
                            </div>
                            <div class="sure-bar bar" @click="sureThisBnf()">
                                确认
                            </div>
                        </div>
                    </mt-popup>

                </div>

            </div>
            <div class="infowrite-item-box bank-box">
                <div class="infowrite-item-tit">
                    续期缴费信息
                </div>
                <a class="mint-cell mint-field">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">开户银行</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="mint-cell-value is-link">
                                <select name="" class="mint-field-core text-right" v-model="bank.code">
                                    <option value="0">请选择开户行</option>
                                    <option :value="list.code" v-for="(list,index) in bankList">{{list.name}}</option>
                                </select>
                            </div>
                        </div>
                        <i class="mint-cell-allow-right"></i>
                    </div>
                </a>
                <mt-field state="" :disableClear="this.disableClear" label="账户名" placeholder="请输入帐户名"
                          v-model="appnt.name" readonly="readonly" disableClear></mt-field>
                <mt-field state="" :disableClear="this.disableClear" label="银行卡号" placeholder="请输入银行卡号"
                          v-model="bank.bankCard" @blur.native.capture="check('bankCard',bank)"
                          type="number"></mt-field>
                <mt-field state="" :disableClear="this.disableClear" label="确认卡号" placeholder="请再次输入银行卡号"
                          v-model="bank.bankCardAgain"
                          @blur.native.capture="checkBankAgain(bank.bankCard,bank.bankCardAgain)"
                          type="number"></mt-field>
            </div>
            <div class="infowrite-item-box plan-box">
                <div class="infowrite-item-tit">
                    保障计划
                </div>
                <a class="mint-cell mint-field" v-for="(item,index) in productDetail.optionList" v-if="item.type == 2"
                   :key="index">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">{{item.name}}</span>
                        </div>
                        <div class="mint-cell-value">
                            <div class="mint-cell-value is-link">
                                <select name="" class="mint-field-core text-right" v-model="plan[item.code]">
                                    <option v-for="(list,index) in item.itemList" :value="list.value" :key="index">
                                        {{list.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <i class="mint-cell-allow-right"></i>
                    </div>
                </a>
            </div>

            <div class="pact-agree">
                <input id="pactAgree" type="checkbox" class="agree-checkbox" v-model="appnt.isAgree">
                <span class="weui-agree-text">
	                <a href="javascript:void(0);">我已经阅读
	                	<span v-for="docItem in productDocList" v-on:click="openUniversalDoc(docItem.id)">《{{docItem.title}}》,</span> 理解并同意其全部内容
                </a>
                </span>
            </div>
        </div>
        <mt-datetime-picker ref="appntDatePicker" v-model="dateValue" type="date" :startDate="startDate"
                            :endDate="endDate" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
                            @confirm="appntBirChange">
        </mt-datetime-picker>
        <mt-datetime-picker ref="insDatePicker" v-model="dateValue" type="date" :startDate="startDate"
                            :endDate="endDate" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
                            @confirm="insBirChange">
        </mt-datetime-picker>
        <mt-datetime-picker ref="bnfDatePicker" v-model="dateValue" type="date" :startDate="startDate"
                            :endDate="endDate" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
                            @confirm="bnfBirChange">
        </mt-datetime-picker>
        <mt-datetime-picker ref="appntCertDatePicker" v-model="certDateValue" type="date" :startDate="certStartDate"
                            :endDate="certEndDate" year-format="{value} 年" month-format="{value} 月"
                            date-format="{value} 日" @confirm="appntCertVaildityChange">
        </mt-datetime-picker>
        <mt-datetime-picker ref="insCertDatePicker" v-model="certDateValue" type="date" :startDate="certStartDate"
                            :endDate="certEndDate" year-format="{value} 年" month-format="{value} 月"
                            date-format="{value} 日" @confirm="insCertVaildityChange">
        </mt-datetime-picker>
        <mt-popup v-model="popupDoc" popup-transition="popup-fade" :closeOnClickModal="false" class="popup-doc">
            <div class="popup-doc-tit">
                {{docDetail.title}}
            </div>
            <div class="popup-doc-content" v-html="docDetail.content"></div>
            <div class="popup-close" @click="popupDoc=false"></div>
        </mt-popup>
        <mt-popup v-model="popupArtificial" popup-transition="popup-fade" :closeOnClickModal="false"
                  class="popup-artificial">
            <div class="popup-artificial-content">
                您的订单已经进入人工核保中，</br>稍后您可以在订单列表页了解核保结果。
            </div>
            <div class="popup-orderList" @click="goOrderList()">
                前往订单管理页
            </div>
        </mt-popup>
        <div class="footer flexBetween">
            <div class="cancel-btn" @click="openToast()">
                保费合计
            </div>
            <div class="money-btn" @click="openToast()">
                ￥{{productDetail.price}} <span class="text" v-if="!realMoney">起</span>
            </div>
            <div class="sure-btn" @click="buyAction()">
                确认提交
            </div>
        </div>
    </div>
</template>
<script>
    import Util from '../../common/util'
    import Service from '../../common/service'
    import Global from '../../common/global'
    import Patterns from '../../common/patternRules'
    import {Toast} from 'mint-ui'

    let address = {};
    let provinceCodeList = {};
    let cityCodeList = {};

    let APIProvinceList = [];
    let APICityList = [];
    let APIAddressList = [];

    export default {
        data: () => ({
            productDetail: {},
            popupVisible: false,
            areaPicker: '',
            areaList: {},
            cityList: [],
            bankList: [],
            productDocList: [],
            success: 'success',
            realMoney: '',
            addBnfModel: false,
            disableClear: true,
            popupDoc: false,
            popupArtificial: false,
            docDetail: {},
            appnt: {
                name: '',
                idNum: '',
                idType: '1',
                sex: '',
                mobile: '',
                mail: '',
                birthday: '',
                privinceName: '',
                provinceId: '',
                cityName: '',
                cityId: '',
                areaName: '',
                address: '',
                areaText: '',
                isAgree: true,
                certVaildity: 1,
                certDate: ''
            },
            insureds: {
                relationType: '0',
                name: '',
                idNum: '',
                idType: '1',
                birthday: '',
                sex: '',
                certVaildity: 1,
                certDate: ''
            },
            bnf: {
                sequence: '',
                relationType: '100',
                name: '',
                idNum: '',
                idType: '1',
                lot: '',
                birthday: '',
                sex: ''
            },
            bnfList: [],
            bank: {
                code: '0',
                bankCard: '',
                bankCardAgain: '',
            },
            plan: {},
            citySlots: [{
                flex: 1,
                values: Object.keys(address),
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: Object.values(address)[0],
                className: 'slot3',
                textAlign: 'center'
            }],
            slots: [{
                flex: 1,
                values: APIProvinceList,
                defaultIndex: 10,
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: APICityList,
                defaultIndex: 0,
                className: 'slot3',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot4'
            }, {
                flex: 1,
                values: APIAddressList,
                defaultIndex: 0,
                className: 'slot5',
                textAlign: 'center'
            }],
            docOptions: [{
                label: '我已阅读',
                value: '1'
            }],
            checkDocValue: "0",
            minData: '',
            dateValue: '',
            certDateValue: '',
            startDate: new Date('1900-01-01'),
            certStartDate: new Date(),
            endDate: new Date(),
            certEndDate: new Date('2099-12-31'),
        }),
        created() {
            this.loadAreaList()
            this.getProductDetail()
            this.getBank()
            console.log(this.$route.query);
            this.plan = Util.copy(this.$route.query, this.plan)
            document.getElementsByTagName('title')[0].innerHTML = '信息填写';
        },
        computed: {
            pokerInsRelationType() {
                return this.insureds.relationType
            }
        },
        watch: {
            pokerInsRelationType: function (val, oldval) {
                if (val != oldval && val != 1) {//被保人不是本人时，更换被保人需清空信息
                    this.insureds.name = ''
                    this.insureds.idType = 1
                    this.insureds.idNum = ''
                    this.insureds.birthday = ''
                    this.insureds.sex = ''
                    this.insureds.certVaildity = 1
                    this.insureds.certDate = ''
                }
            }
        },
        methods: {
            loadAreaList: function () {
                Service.product().getProductAreaList({}, this.$route.params.productId).then(response => {
                    if (response.data) {
                        APIProvinceList = response.data;
                        APICityList = APIProvinceList[0].children;
                        APIAddressList = APICityList[0].children;
                        this.slots[0].values = APIProvinceList;
                        this.slots[2].values = APICityList;
                        this.slots[4].values = APIAddressList
                    }
                })
            },
            getProductDetail() {
                var _this = this;
                Service.product().getProduct({}, _this.$route.params.productId).then(response => {
                    var productDetail = response.data;
                    console.log(productDetail);
                    document.getElementsByTagName('title')[0].innerHTML = productDetail.name;
                    _this.productDetail = productDetail;
                    _this.productDocList = productDetail.statementList
                    for (let choiceList of productDetail.optionList) {
                        if (choiceList.type == 1) {
                            var minAge = choiceList.minValue;
                            var maxAge = choiceList.maxValue;
                            var maxDate = '';
                            var today = new Date();
                            var curYear = today.getFullYear();
                            var curDate = today.getDate();
                            if (choiceList.minUnit == 'year') {
                                maxDate = new Date().setFullYear(curYear - minAge)
                            } else {
                                maxDate = new Date().setDate(curDate - minAge)
                            }
                            var minDate = new Date().setFullYear(curYear - maxAge - 1);
                            minDate = new Date(minDate).setDate(new Date(minDate).getDate() + 1);
                            _this.minData = minDate;
                            _this.startDate = new Date(minDate);
                            _this.endDate = new Date(maxDate)
                        }
                    }
                }, err => {

                })
            },
            getBank: function () {
                Service.sys().getBank({}).then(res => {
                    this.bankList = res.data
                }, err => {

                })
            },
            addBnf: function () {
                this.addBnfModel = true
                this.bnf.relationType = 1
            },
            closeBtnPopup: function () {
                this.addBnfModel = false
            },
            sureThisBnf: function () {
                this.addBnfModel = false
            },
            choiceArea: function () {
                document.body.style.overflow = 'auto'; //解决vue弹出层touch穿透，主页面跟随抖动问题
                this.popupVisible = true
                // 设置默认选中
            },
            check: function (type, model, className) {
                let minLength, maxLength;
                if (type == 'name') {
                    minLength = 2,
                        maxLength = 5
                } else if (type == 'address') {
                    minLength = 7,
                        maxLength = 50
                } else if (type == 'mobile') {
                    minLength = 11,
                        maxLength = 11
                } else if (type == 'mail') {
                    minLength = 5,
                        maxLength = 50
                } else if (type == 'idNum') {
                    minLength = 15,
                        maxLength = 18
                } else if (type == 'bankCard') {
                    minLength = 13,
                        maxLength = 19
                }
                if (!model[type]) {
                    Toast({
                        message: '信息不能为空！',
                        duration: 1500,
                    });
                } else if (model[type].length >= minLength && model[type].length <= maxLength) {
                    var on = Patterns[type].test(model[type]);
                    if (!on) {
                        Toast({
                            message: '您输入的信息有误，请重新输入！',
                            duration: 3000,
                        });
                        model[type] = '';

                    }
                } else {
                    Toast({
                        message: '请输入正确的信息！',
                        duration: 1500,
                    });
                    model[type] = '';
                }
                $(className).find('.mint-field-other').removeClass('is-show');
            },
            checkSex: function (type, value) {
                this[type].sex = value
                var name = type + '-sex'
                var nodes = document.getElementsByClassName(name);
                for (let i = 0; i < nodes.length; i++) {
                    $(nodes[i]).removeClass('active')
                }
                $(nodes[value - 1]).addClass('active');
            },
            checkCertVaildity: function (type, value) {
                this[type].certVaildity = value
                var name = type + '-certVaildity'
                var nodes = document.getElementsByClassName(name);
                for (let i = 0; i < nodes.length; i++) {
                    $(nodes[i]).removeClass('active')
                }
                $(nodes[value - 1]).addClass('active');
            },
            checkBankAgain: function (oldVal, newVal, className) {
                if (oldVal !== newVal) {
                    Toast({
                        message: '卡号输入不一致，请重新输入！',
                        duration: 1500,
                    });
                    this.bank.bankCardAgain = '';
                }
            },
            showParrent: function (className) {
                $(className).find('.mint-field-other').addClass('is-show');
            },
            openUniversalDoc: function (docId) { //条款详情
                Service.product().getStatementDocDetail({}, docId).then(response => {
                    console.log(response)
                    this.popupDoc = true
                    this.docDetail = response.data
                }, err => {

                })
            },
            cancleaddress: function () {
                document.body.style.overflow = 'visible'; //解决vue弹出层touch穿透
                this.popupVisible = false;
                if (this.appnt.privinceName !== '' && this.appnt.cityName !== '') {
                    this.areaPicker.setSlotValue(0, this.appnt.privinceName);
                    this.areaPicker.setSlotValue(2, this.appnt.cityName);
                    this.areaPicker.setSlotValue(4, this.appnt.areaName)
                }
            },
            selectaddress: function () {
                document.body.style.overflow = 'visible'; //解决vue弹出层touch穿透
                this.popupVisible = false;
                this.appnt.privinceName = this.addressProvince;
                this.appnt.cityName = this.addressCity;
                this.appnt.areaName = this.addressArea;
                this.appnt.areaText = this.appnt.privinceName + '-' + this.appnt.cityName + '-' + this.appnt.areaName;
                console.log(this.appnt.areaText)
            },
            onCityChange: function (picker, values) {
                this.areaPicker = picker;
                if (!values[0]) {
                    this.$nextTick(() => {
                        if (this.myAdress) {
                            // 赋默认值
                        } else {
                            let APIAddressListArr = [];
                            picker.setValues([APIProvinceList[0], APICityList[0], APIAddressList[0]])
                        }
                    });
                } else {
                    picker.setSlotValues(1, values[0].children);
                    let town = [];
                    if (values[1]) {
                        town = values[1].children;
                    }
                    picker.setSlotValues(2, town);
                    this.addressProvince = values[0].text;
                    this.addressCity = values[1].text;
                    this.addressArea = values[2].text;
                }
            },
            openPicker(picker) {
                document.body.style.overflow = 'auto'; //解决vue弹出层touch穿透，主页面跟随抖动问题
                this.$refs[picker].open()
            },
            appntBirChange(value) {
                document.body.style.overflow = 'visible'; //解决vue弹出层touch穿透
                this.appnt.birthday = Util.formatDate.format(new Date(value));
            },
            insBirChange(value) {
                document.body.style.overflow = 'visible'; //解决vue弹出层touch穿透
                this.insureds.birthday = Util.formatDate.format(new Date(value));
            },
            bnfBirChange(value) {
                document.body.style.overflow = 'visible'; //解决vue弹出层touch穿透
                this.bnf.birthday = Util.formatDate.format(new Date(value));
            },
            appntCertVaildityChange(value) {
                document.body.style.overflow = 'visible'; //解决vue弹出层touch穿透
                this.appnt.certDate = Util.formatDate.format(new Date(value));
            },
            insCertVaildityChange(value) {
                document.body.style.overflow = 'visible'; //解决vue弹出层touch穿透
                this.insureds.certDate = Util.formatDate.format(new Date(value));
            },
            buyCheck() {
                let appntAll, insAll, bnfAll;
                if (this.appnt.idType == 1) {
                    if (this.appnt.certVaildity != 1) {
                        appntAll = this.appnt.name && this.appnt.idNum && this.appnt.certVaildity && this.appnt.mail && this.appnt.mobile && this.appnt.privinceName && this.appnt.address
                    } else {
                        appntAll = this.appnt.name && this.appnt.idNum && this.appnt.certVaildity && this.appnt.certDate && this.appnt.mail && this.appnt.mobile && this.appnt.privinceName && this.appnt.address
                    }
                } else {
                    appntAll = this.appnt.name && this.appnt.birthday && this.appnt.sex && this.appnt.idNum && this.appnt.mail && this.appnt.mobile && this.appnt.privinceName && this.appnt.address
                }
                if (this.insureds.idType == 1) {
                    if (this.insureds.certVaildity != 1) {
                        insAll = this.insureds.name && this.insureds.idNum && this.insureds.certVaildity
                    } else {
                        insAll = this.insureds.name && this.insureds.idNum && this.insureds.certVaildity && this.insureds.certDate
                    }

                } else {
                    insAll = this.insureds.name && this.insureds.birthday && this.insureds.sex && this.insureds.idNum
                }
                if (this.bnf.idType == 1) {
                    bnfAll = this.bnf.name && this.bnf.idNum && this.bnf.lot && this.bnf.sequence
                } else {
                    bnfAll = this.bnf.name && this.bnf.birthday && this.bnf.sex && this.bnf.idNum && this.bnf.lot && this.bnf.sequence
                }
                if (!appntAll) {
                    Toast({
                        message: '请完善投保人信息！',
                        duration: 3000,
                    });
                    return false
                } else if (this.insureds.relationType == 0) {
                    Toast({
                        message: '请选择被保人！',
                        duration: 3000,
                    });
                    return false
                } else if (this.insureds.relationType != 1 && !insAll) {
                    Toast({
                        message: '请完善被保人信息！',
                        duration: 3000,
                    });
                    return false
                } else if (this.bnf.relationType != 100 && !bnfAll) {
                    Toast({
                        message: '请完善受益人信息！',
                        duration: 3000,
                    });
                    return false
                } else if (!(this.bank.code != 0 && this.bank.bankCard && this.bank.bankCardAgain)) {
                    Toast({
                        message: '请银行卡信息！',
                        duration: 3000,
                    });
                    return false
                } else if (!this.appnt.isAgree) {
                    Toast({
                        message: '请阅读保险条款！',
                        duration: 3000,
                    });
                    return false
                } else {
                    return true
                }
            },
            buyAction() {
                let canBuy = this.buyCheck();
                if (this.insureds.relationType == 1) {
                    this.insureds.name = this.appnt.name
                    this.insureds.idType = this.appnt.idType
                    this.insureds.idNum = this.appnt.idNum
                    this.insureds.birthday = this.appnt.birthday
                    this.insureds.sex = this.appnt.sex,
                        this.insureds.certVaildity = this.appnt.certVaildity,
                        this.insureds.certDate = this.appnt.certDate
                }
                if (canBuy) {
                    let optionArr = [];
                    let index = 0;
                    for (let itemName in this.plan) {
                        let optionObj = {};
                        optionObj.optionCode = itemName;
                        optionObj.value = this.plan[itemName];
                        optionArr[index] = optionObj;
                        index++
                    }

                    Service.order().postOrder({
                        applicant: {
                            name: this.appnt.name, //姓名
                            idType: this.appnt.idType, //证件类型
                            idNumber: this.appnt.idNum, //证件号码
                            birthdate: this.appnt.idType == 1 ? "" : this.appnt.birthday,
                            gender: this.appnt.idType == 1 ? "" : this.appnt.sex,
                            idValidType: this.appnt.certVaildity,
                            idExpireDate: this.appnt.certVaildity == 1 ? this.appnt.certDate : "",
                            phone: this.appnt.mobile, //手机号
                            email: this.appnt.mail, //邮箱
                            province: this.appnt.privinceName, //省
                            city: this.appnt.cityName, //市
                            district: this.appnt.areaName, //区
                            address: this.appnt.address, //详细地址
                        },
                        beneficiaryList: this.bnf.relationType == 100 ? [] : [{
                            idNumber: this.bnf.idNum,
                            idType: this.bnf.idType,
                            birthdate: this.bnf.idType == 1 ? "" : this.bnf.birthday,
                            gender: this.bnf.idType == 1 ? "" : this.bnf.sex,
                            name: this.bnf.name,
                            type: this.bnf.relationType
                        }],
                        insuredList: [{
                            idNumber: this.insureds.idNum,
                            idType: this.insureds.idType,
                            birthdate: this.insureds.idType == 1 ? "" : this.insureds.birthday,
                            gender: this.insureds.idType == 1 ? "" : this.insureds.sex,
                            name: this.insureds.name,
                            relation: this.insureds.relationType,
                            idValidType: this.insureds.certVaildity,
                            idExpireDate: this.insureds.certVaildity == 1 ? this.insureds.certDate : "",
                        }],
                        optionList: optionArr,
                        payment: {
                            accountName: this.appnt.name,
                            bankName: this.bank.code,
                            cardNumber: this.bank.bankCard
                        },
                        productId: this.$route.params.productId,
                        shareUserId: this.$route.params.inviterid
                    }).then(response => {
                        console.log(response)
                        if (response.data.status == 1) {
                            this.popupArtificial = true
                        } else if (response.data.status == 3) {
                            this.$router.push({
                                name: 'policyconfirm',
                                query: {
                                    orderId: response.data.id,
                                    payOrderNo: response.data.payOrderNo
                                }
                            })
                        }
                    }, err => {

                    })
                }
            },
            goOrderList() {
                this.popupArtificial = false
                window.location.href = Global.clientInfo.oneLevUrl + '/user/order/orderlist'
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @charset "utf-8";
    $baseFontSize: 75;
    .infowrite-box {
        padding: 0 40rem/$baseFontSize 100rem/$baseFontSize;
        margin-top: -40rem/$baseFontSize;
        color: #929292;
        .infowrite-item-box {
            background-color: #ffffff;
            box-shadow: 0 5px 15px 3px rgba(175, 175, 175, 0.2);
            border-radius: 20rem/$baseFontSize;
            margin-bottom: 40rem/$baseFontSize;
            overflow: hidden;
            .infowrite-item-tit {
                font-size: 18px;
                color: #0abf9b;
                line-height: 50px;
                padding-left: 40rem/$baseFontSize;
            }
            select {
                color: #3D3D3D;
            }
        }
    }

    .addBnfBtn {
        width: auto;
        font-size: 26rem/$baseFontSize;
        line-height: 140rem/$baseFontSize;
        color: #0abf9b;
        text-align: center;
        border-top: 1px solid #EEEEEE;
        .bg-btn {
            margin-right: 18rem/$baseFontSize;
            display: inline-block;
            width: 26rem/$baseFontSize;
            height: 26rem/$baseFontSize;
            background: url(../../assets/image/add-icon.png) no-repeat center center;
            background-size: 100% 100%;
            position: relative;
            top: 1px;
        }
        &:active {
            opacity: .5;
        }
    }

    .addBnf-popup {
        width: 670rem/$baseFontSize;
        height: auto;
        border-radius: 10px;
        .addBnf-footer {
            border-top: solid 1px #eeeeee;
            box-sizing: border-box;
            .bar {
                flex: 1;
                font-size: 28rem/$baseFontSize;
                line-height: 100rem/$baseFontSize;
                text-align: center;
            }
            .cancel-bar {
                color: #00a399;
                &:active {
                    opacity: .5;
                }
            }
            .sure-bar {
                color: #FFFFFF;
                background-image: linear-gradient(90deg, #0abf9b 0%, #14baff 100%), linear-gradient(#ffffff, #ffffff);
                background-blend-mode: normal, normal;
                border-bottom-right-radius: 10px;
                &:active {
                    opacity: .5;
                }
            }
        }
    }

    .mint-popup-bottom {
        width: 100%;
        overflow: hidden;
    }

    .mint-cell-wrapper {
        & {
            background-image: none;
        }
        .mint-cell-value {
            img {
                position: relative;
                right: 20px;
                top: -2px;
                width: 40rem/$baseFontSize;
                height: 40rem/$baseFontSize;
            }
            .value-list {
                width: 100rem/$baseFontSize;
                height: 64rem/$baseFontSize;
                background-color: #dcdddd;
                border-radius: 5px;
                text-align: center;
                line-height: 64rem/$baseFontSize;
                color: #3d3d3d;
                &.margin-l {
                    margin-right: 24rem/$baseFontSize;
                }
                &.active {
                    background-color: #0abf9b !important;
                    color: #FFFFFF !important;
                }
            }
        }
    }

    .mint-cell {
        & {
            background-image: none;
            overflow: visible;
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
        background: #FFFFFF;
        border: 1px solid #EEEEEE;
        .cancel-btn {
            width: 60rem/$baseFontSize;
            min-width: 60rem/$baseFontSize;
            padding: 20rem/$baseFontSize 40rem/$baseFontSize;
            background: #FFFFFF;
            color: #929292;
            text-align: center;
            font-size: 28rem/$baseFontSize;
            line-height: 30rem/$baseFontSize;
            &:active {
                opacity: 0.6;
            }
        }
        .money-btn {
            width: 300rem/$baseFontSize;
            color: #ff8f34;
            text-align: center;
            font-size: 42rem/$baseFontSize;
            line-height: 100rem/$baseFontSize;
            margin-right: 30rem/$baseFontSize;
            font-weight: 600;
            .text {
                font-size: 24rem/$baseFontSize;
                font-weight: 100;
            }
        }
        .sure-btn {
            width: 320rem/$baseFontSize;
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

    .pact-agree {
        padding: 0 30rem/$baseFontSize 30rem/$baseFontSize;
        height: auto;
        .agree-checkbox {
            -webkit-appearance: none;
            appearance: none;
            border: 1px solid #D1D1D1;
            background-color: #fff;
            border-radius: 3px;
            width: 32rem/$baseFontSize;
            height: 32rem/$baseFontSize;
            position: relative;
            vertical-align: 0;
            top: 2px;
        }
        .agree-checkbox:checked:before {
            vertical-align: middle;
            text-decoration: inherit;
            content: "\2714";
            color: #0abf9b;
            font-size: 26rem/$baseFontSize;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -48%) scale(0.73);
            -webkit-transform: translate(-50%, -48%) scale(0.73);
        }
        span {
            position: relative;
        }
        a {
            font-size: 24rem/$baseFontSize;
            line-height: 36rem/$baseFontSize;
            color: #3D3D3D;
            span {
                color: #0068b6;
            }
        }
    }

    .popup-doc {
        top: 46%;
        width: 670rem/$baseFontSize;
        height: 1005rem/$baseFontSize;
        background-color: #ffffff;
        border-radius: 10px;
        .popup-doc-tit {
            font-size: 36rem/$baseFontSize;
            color: #3d3d3d;
            line-height: 60rem/$baseFontSize;
            font-weight: 600;
            text-align: center;
            margin-top: 50rem/$baseFontSize;
        }
        .popup-doc-content {
            width: 600rem/$baseFontSize;
            height: 835rem/$baseFontSize;
            overflow: auto;
            margin: 0 auto;
            font-size: 28rem/$baseFontSize;
            color: #3d3d3d;
            line-height: 48rem/$baseFontSize;
            text-indent: 2em;
        }
    }

    .popup-close {
        position: absolute;
        left: 308rem/$baseFontSize;
        bottom: -90rem/$baseFontSize;
        width: 54rem/$baseFontSize;
        height: 54rem/$baseFontSize;
        background: url(../../assets/image/close_icon.png) center center;
        background-size: 100% 100%;
    }

    .popup-artificial {
        top: 46%;
        width: 582rem/$baseFontSize;
        height: 433rem/$baseFontSize;
        background-color: #ffffff;
        border-radius: 10px;
        .popup-artificial-content {
            width: 100%;
            text-align: center;
            font-size: 28rem/$baseFontSize;
            line-height: 60rem/$baseFontSize;
            color: #3d3d3d;
            margin-top: 100rem/$baseFontSize;
        }
        .popup-orderList {
            width: 300rem/$baseFontSize;
            height: 84rem/$baseFontSize;
            margin: 0 auto;
            font-size: 28rem/$baseFontSize;
            line-height: 84rem/$baseFontSize;
            color: #FFFFFF;
            background-image: linear-gradient(90deg, #0abf9b 0%, #00b4ff 100%), linear-gradient(#0abf9b, #0abf9b);
            background-blend-mode: normal, normal;
            border-radius: 10px;
            text-align: center;
            margin-top: 80rem/$baseFontSize;
        }
    }
</style>