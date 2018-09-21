<template>
  <div class="applyWithdraw">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">申请提现</x-header>
    <tab :line-width=2 active-color='#f74c31' v-model="index">
      <tab-item class="vux-center" selected>申请提现</tab-item>
      <tab-item class="vux-center">提现订单</tab-item>
    </tab>
    <swiper v-model="index" :show-dots="false" height="10rem">
      <swiper-item class="swiper-box">
        <group label-width="4.5em" label-margin-right="2em" label-align="left">
          <cell title="我的积分" value-align="left"><span style="color: #f74c31;">999</span></cell>
          <x-input title="提现积分" type="number" name="username" v-model="withDrawObj.quantity" placeholder="请输入"></x-input>
          <cell title="银行卡" value-align="left" is-link @click.native="showCardPopup = true">{{withDrawObj.cardName}}{{handleCardNo}}</cell>
          <!-- <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :placeholder="$t('please select')"></popup-picker> -->
          <!-- <popup-picker value-text-align="left" title="银行卡：" :data="cardList" v-model="cardValue" @on-show="onShow" @on-hide="onHide" @on-change="onChange" @on-shadow-change="onShadowChange"></popup-picker> -->
        </group>
        <x-button class="submit-btn" type="primary" @click.native="applyWithdraw">提交</x-button>
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
    <popup v-model="showCardPopup" position="bottom" max-height="50%">
      <group label-width="7em" label-margin-right="2em" label-align="left">
        <cell v-for="(i, idx) in bankCardList" value-align="left" :key="idx" :title="i.cardKind" is-link @click.native="selectCard(i)">{{i.cardId}}</cell>
      </group>
    </popup>
  </div>
</template>

<script>
import { ViewBox, XHeader, Tab, TabItem, Cell, Group, XInput, XButton, Popup, Swiper, SwiperItem } from "vux";
export default {
  name: "applyWithdraw",
  components: {
    ViewBox,
    XHeader,
    Tab,
    TabItem,
    Cell, 
    Group, 
    XInput,
    XButton,
    Popup,
    Swiper,
    SwiperItem
  },
  created() {
    this.queryUserBankCard();
    this.queryWithdraw();
  },
  computed: {
    handleCardNo: function () {
      return '****' + this.withDrawObj.cardNo.substr(this.withDrawObj.cardNo.substr.length - 6);
    }
  },
  data() {
    return {
      index: 0,
      withDrawObj: {
        quantity: '',
        cardNo: '',
        cardName: '',
        cardId: ''
      },
      showCardPopup: false,
      bankCardList: []
    };
  },
  methods: {
    queryUserBankCard() {
      this.$api
        .queryUserBankCard({})
        .then(data => {
          if (data.code === 200) {
            this.bankCardList = data.data.bankCards;
            this.withDrawObj.cardNo = this.bankCardList[0].cardId;
            this.withDrawObj.cardName = this.bankCardList[0].cardKind;
            this.withDrawObj.cardId = this.bankCardList[0].id;
          }       
        });
    },
    selectCard(item) {
      this.withDrawObj.cardNo = item.cardId;
      this.withDrawObj.cardName = item.cardKind;
      this.withDrawObj.cardId = item.id;
      this.showCardPopup = false;
    },
    applyWithdraw() {
      let queryObj = {
        cardId: this.withDrawObj.cardId,
        quantity: this.withDrawObj.quantity
      }
      this.$api
        .applyWithdraw(queryObj)
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("申请提现已提交", "top");
          }       
        });
    },
    queryWithdraw() {
      this.$api
        .queryWithdraw({
          pageNo: 1,
          pageSize: 10
        })
        .then(data => {
          if (data.code === 200) {
            
          }       
        });
    },
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
  background-color: #fff;
  .text-right {
    float: right;
  }
}
</style>
