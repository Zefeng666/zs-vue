<template>
  <div class="sales">
    <div class="sale-box">
      <div class="sale-box-header">
        <span>您的可提金额：</span>
        <span class="float-right">等级：CEO</span>
      </div>
      <countup class="countup-box" :start-val="0" :end-val="9999" :duration="1.5"></countup>
      <span>元</span>
      <card>
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span class="card-top-text">您的推荐人</span>
            <br/>
            <span class="card-bottom-text">锤子</span> 
          </div>
          <div class="vux-1px-r">
            <span class="card-top-text">您最近的代理</span>
            <br/>
            <span class="card-bottom-text">锤子</span> 
          </div>
          <div class="vux-1px-r">
            <span class="card-top-text">您最近的CEO</span>
            <br/>
            <span class="card-bottom-text">锤子</span> 
          </div>
          <div>
            <span class="card-top-text">代理地区</span>
            <br/>
            <span class="card-bottom-text">杭州</span> 
          </div>
        </div>
      </card>

    </div>
    <group>
      <cell class="my-cell" title="我要拿货" value-align="left" link="/getGoods"></cell>
      <!-- <cell class="my-cell" title="我的团队" value-align="left" link="/myTeam"></cell> -->
      <cell class="my-cell" title="申请提现" value-align="left" link="/applyWithdraw"></cell>
      <cell class="my-cell" title="积分明细" value-align="left" link="/pointDetails"></cell>
    </group>
    <tabbar :activeIndex="0"></tabbar>
  </div>
</template>

<script>
import { ViewBox, Cell, Group, Card, Countup } from "vux";
import Tabbar from "@/components/Tabbar";
export default {
  name: "sales",
  components: {
    ViewBox,
    Tabbar,
    Cell,
    Group,
    Card,
    Countup
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sale-box {
  background-color: #fff;
}
.sale-box-header {
  font-size: 16px;
  color: #2c3e50;
  padding: .2rem 0.4rem;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;
  text-align: left;
  .float-right {
    float: right;
    color: #999;
  }
}
.countup-box {
  display: inline-block;
  color: #f74c31;
  font-size: 36px;
  margin-top: .3rem;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: .4rem 0;
}
.card-top-text {
  font-size: 12px;
}
.card-bottom-text {
  font-size: 14px;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 1px;
}
.card-demo-flex span {
  /* color: #f74c31; */
}
.my-cell {
  padding-top: .4rem;
  padding-bottom: .4rem;
}
</style>
