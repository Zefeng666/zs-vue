<template>
  <div class="applyWithdraw">
    <x-header :left-options="{backText: ''}">申请提现</x-header>
    <tab :line-width=2 active-color='#f74c31' v-model="index">
      <tab-item class="vux-center" selected>申请提现</tab-item>
      <tab-item class="vux-center">提现订单</tab-item>
    </tab>
    <swiper v-model="index" :show-dots="false">
      <swiper-item>
        <group>
          <cell title="我的积分" value="1111" value-align="left"></cell>
          <x-input title="提现积分" name="username" :value="withDrawObj.quantity"></x-input>
          <cell title="我的积分" value="1111"></cell>
        </group>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center">Container2</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { ViewBox, XHeader, Card, Tab, TabItem, Swiper, SwiperItem, Cell, Group, XInput } from "vux";
export default {
  name: "applyWithdraw",
  components: {
    ViewBox,
    XHeader,
    Card,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Cell, 
    Group, 
    XInput
  },
  data() {
    return {
      index: 0,
      withDrawObj: {
        quantity: 0,
        cardNo: '2222'
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
