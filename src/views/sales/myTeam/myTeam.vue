<template>
  <div class="myAddress">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">我属于的团队</x-header>
    <card header="我属于的团队">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>CEO</span>
          <br/>
          张三
        </div>
        <div class="vux-1px-r">
          <span>团队成员</span>
          <br/>
          188人
        </div>
        <div class="vux-1px-r">
          <span>本月业绩</span>
          <br/>
          9999件
        </div>
      </div>
    </card>
    <div class="address-list">
        <p class="list-top">月铭泽 &nbsp;&nbsp;&nbsp;&nbsp; 17666666666</p>
        <p class="list-bottom">浙江省杭州市滨江区西兴街道</p>    
        <img src="../../../assets/icon/edit.png" alt="">       
    </div>
  </div>
</template>

<script>
import { ViewBox, XHeader, Card } from "vux";
export default {
  name: "myAddress",
  components: {
    ViewBox,
    XHeader,
    Card
  },
  data() {
    return {
      
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.address-list {
  padding: 0.3rem 0.3rem;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
  p {
    padding: 0;
    text-align: left;
  }
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.3rem;
    width: .6rem;
  }
  .list-top {
    font-size: 16px;
    font-weight: 800;
  }
  .list-bottom {
    font-size: 12px;
  }
}
</style>
