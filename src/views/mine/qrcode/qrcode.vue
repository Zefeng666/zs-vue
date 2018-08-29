<template>
  <div class="myqrcode">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">我的推荐码</x-header>
    <div class="mine-msg">
      <img class="avator" src="../../../assets/avator.jpg">
      <p>月铭泽</p>
      <p>CEO</p>
    </div>
    <qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
  </div>
</template>

<script>
import { ViewBox, XHeader, Qrcode } from "vux";
export default {
  name: "myqrcode",
  components: {
    ViewBox,
    XHeader,
    Qrcode
  },
  data() {
    return {
      value: ''
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mine-msg {
  position: relative;
  vertical-align: middle;
  padding-top: 1rem;
  margin-bottom: 1rem;
  p {
    text-align: left;
    padding-left: 50%;
    font-size: 18px;
  }
}
.avator {
  width: 15%;
  position: absolute;
  top: 40%;
  left: 30%;
}
</style>
