<template>
  <div class="myAddress">
    <x-header :left-options="{backText: ''}">我的地址<router-link to="/editAddress" slot="right">新增地址</router-link></x-header>
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
