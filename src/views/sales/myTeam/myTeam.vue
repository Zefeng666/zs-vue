<template>
  <div class="myAddress">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">我的团队</x-header>
    <card class="card-head" :header="{title: '团队信息'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span class="card-flex-top">CEO</span>
          <br/>
          <span class="card-flex-bottom">张三</span> 
        </div>
        <div>
          <span class="card-flex-top">团队成员</span>
          <br/>
          <span class="card-flex-bottom">188人</span> 
        </div>
      </div>
    </card>
    <card class="card-head" :header="{title: '本月业绩'}">
      <div slot="content" class="countup-box">
        <countup class="countup-number" :start-val="0" :end-val="9999" :duration="1.5"></countup>
        <span>件</span>
      </div>
    </card>
    <card class="card-head" :header="{title: '团队成员'}">
      <div slot="content" class="menber-box">
        <div class="menber-box-item vux-1px-b">
          <img class="menber-avator" src="../../../assets/avator.jpg" alt="">
          <p>月铭泽</p>
          <p>层级：3层子会员</p>
        </div>
        <div class="menber-box-item vux-1px-b">
          <img class="menber-avator" src="../../../assets/avator.jpg" alt="">
          <p>月铭泽</p>
          <p>层级：3层子会员</p>
        </div>
        <div class="menber-box-item vux-1px-b">
          <img class="menber-avator" src="../../../assets/avator.jpg" alt="">
          <p>月铭泽</p>
          <p>层级：3层子会员</p>
        </div>
      </div>
    </card>
    <!-- <div class="address-list">
        <p class="list-top">月铭泽 &nbsp;&nbsp;&nbsp;&nbsp; 17666666666</p>
        <p class="list-bottom">浙江省杭州市滨江区西兴街道</p>    
        <img src="../../../assets/icon/edit.png">       
    </div> -->
  </div>
</template>

<script>
import { ViewBox, XHeader, Card, Countup } from "vux";
export default {
  name: "myAddress",
  components: {
    ViewBox,
    XHeader,
    Card,
    Countup
  },
  data() {
    return {
      cardTitle: '我属于的团队'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card-head {
  text-align: left;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: .4rem 0;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 1px;
}
.card-flex-top {
  font-size: 16px;
}
.card-flex-bottom {
  font-size: 14px;
}
.countup-box {
  font-size: 16px;
  padding: .4rem 0;
  text-align: center;
  .countup-number {
    font-size: 20px;
  }
}
.menber-box {
  position: relative;
  .menber-box-item {
    padding: .4rem 0;
    .menber-avator {
      position: absolute;
      width: 1.2rem;
      left: .5rem;
      top: 50%;
      transform: translateY(-50%);
    }
    p {
      font-size: 14px;
      padding-left: 2.2rem;
    }
  }
}
</style>
