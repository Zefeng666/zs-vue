<template>
  <div class="myBankCard">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">我的银行卡<router-link to="/editBankCard" slot="right">添加</router-link></x-header>
    <div class="card-list">
        <p class="list-top">中国建设银行 ******6666</p>
        <p class="list-bottom">持卡人：张三 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认</p>    
        <img src="../../../assets/icon/edit.png" alt="">       
    </div>
  </div>
</template>

<script>
import { ViewBox, XHeader, Card } from "vux";
export default {
  name: "myBankCard",
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
.card-list {
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
