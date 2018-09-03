<template>
  <div class="pointDetails">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">积分明细</x-header>
        <div class="tab-swiper">
          <div class="order-box vux-1px-b">
            <p>
              <span>积分：+1888</span>
              <span class="text-right">下线推广</span>
            </p>
            <p>
              <span>描述：下线xxxxx拿货</span>
            </p>
            <p>
              <span>时间：2018年8月8日</span>
            </p>
          </div>
          <div class="order-box vux-1px-b">
            <p>
              <span>积分：+1888</span>
              <span class="text-right">下线推广</span>
            </p>
            <p>
              <span>描述：下线xxxxx拿货</span>
            </p>
            <p>
              <span>时间：2018年8月8日</span>
            </p>
          </div>
          <div class="order-box vux-1px-b">
            <p>
              <span>积分：+1888</span>
              <span class="text-right">下线推广</span>
            </p>
            <p>
              <span>描述：下线xxxxx拿货</span>
            </p>
            <p>
              <span>时间：2018年8月8日</span>
            </p>
          </div>
        </div>
  </div>
</template>

<script>
import { ViewBox, XHeader, Cell, Group, XInput, XButton } from "vux";
export default {
  name: "pointDetails",
  components: {
    ViewBox,
    XHeader,
    Cell, 
    Group, 
    XInput,
    XButton,
  },
  data() {
    return {
      index: 0,
      withDrawObj: {
        quantity: '',
        cardNo: '2222'
      },
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
