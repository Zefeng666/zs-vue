<template>
  <div class="getGoods">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">申请拿货</x-header>
    <tab :line-width=2 active-color='#f74c31' v-model="index">
      <tab-item class="vux-center" selected>申请拿货</tab-item>
      <tab-item class="vux-center">历史订单</tab-item>
    </tab>
    <swiper v-model="index" :show-dots="false" height="10rem">
      <swiper-item class="swiper-box">
        <group label-width="4.5em" label-margin-right="2em" label-align="right">
          <x-input title="申请数量" type="number" name="username" :value="withDrawObj.quantity" placeholder="请输入"></x-input>
          <x-address class="addresstitle" :title="addressTitle" value-text-align="left"  :list="addressData"  placeholder="请选择地址" inline-desc="" :hide-district="true"></x-address>
          <!-- <popup-picker value-text-align="left" title="银行卡：" :data="cardList" v-model="cardValue" @on-show="onShow" @on-hide="onHide" @on-change="onChange" @on-shadow-change="onShadowChange"></popup-picker> -->
        </group>
        <x-button class="submit-btn" type="primary">提交</x-button>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper">
          <div class="order-box vux-1px-b">
            <p>
              <span>申请积分：1888分</span>
              <span class="text-right">通过</span>
            </p>
            <p>
              <span>银行卡号：30000000000099909</span>
            </p>
            <p>
              <span>创建时间：2018年8月8日</span>
            </p>
          </div>
          <div class="order-box vux-1px-b">
            <p>
              <span>申请积分：1888分</span>
              <span class="text-right">通过</span>
            </p>
            <p>
              <span>银行卡号：30000000000099909</span>
            </p>
            <p>
              <span>创建时间：2018年8月8日</span>
            </p>
          </div>
          <div class="order-box vux-1px-b">
            <p>
              <span>申请积分：1888分</span>
              <span class="text-right">通过</span>
            </p>
            <p>
              <span>银行卡号：30000000000099909</span>
            </p>
            <p>
              <span>创建时间：2018年8月8日</span>
            </p>
          </div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { ViewBox, XHeader, Tab, TabItem, Swiper, SwiperItem, Cell, Group, XInput, PopupPicker, XButton, Box, XAddress,
  ChinaAddressV4Data, } from "vux";
export default {
  name: "getGoods",
  components: {
    ViewBox,
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Cell, 
    Group, 
    XInput,
    PopupPicker,
    XButton,
    Box,
    XAddress,
    ChinaAddressV4Data,
  },
  data() {
    return {
      index: 0,
      withDrawObj: {
        quantity: '',
        cardNo: '2222'
      },
      addressData: ChinaAddressV4Data,
      addressTitle: "代理地区",
      cardList: [['中国建设银行 ****2222', '中国建设银行 ****2223', '中国建设银行 ****2224']],
      cardValue: ['中国建设银行 ****2222']
    };
  },
  methods: {
    onShow () {
      console.log(this.cardValue);     
    },
    onHide () {
      console.log(this.cardValue);        
    },
    onChange () {

    },
    onShadowChange () {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.submit-btn {
  width: 90%;
  margin-right: 5%;
  margin-top: 1rem;
}
.order-box {
  text-align: left;
  font-size: 14px;
  padding: .3rem .4rem;
  .text-right {
    float: right;
  }
}
</style>
