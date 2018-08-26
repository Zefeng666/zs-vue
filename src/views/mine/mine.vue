<template>
  <div class="mine">
    <div class="mine-msg">
      <img class="avator" src="../../assets/avator.jpg" alt="">
      <p>微信昵称：月铭泽</p>
      <p>性别： 男</p>
    </div>
    <group>
      <cell class="my-cell" title="我的地址" value-align="left" link="/myAddress"></cell>
      <cell class="my-cell" title="我的银行卡" value-align="left" link="/myBankCard"></cell>
      <cell class="my-cell" title="我的推荐码" value-align="left" link="/qrcode"></cell>
      <cell class="my-cell" title="我的身份证" value-align="left" link="/myIdCard"></cell>
    </group>
    <tabbar :activeIndex="1"></tabbar>
  </div>
</template>

<script>
import { ViewBox, Cell, Group, XHeader } from "vux";
import Tabbar from "@/components/Tabbar";
export default {
  name: "mine",
  components: {
    ViewBox,
    Tabbar,
    Cell,
    Group,
    XHeader
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
  color: #42b983;
}
.mine-msg {
  position: relative;
  vertical-align: middle;
  padding-top: 1rem;
  margin-bottom: 1rem;
  p {
    text-align: left;
    padding-left: 40%;
    font-size: 18px;
  }
}
.avator {
  width: 20%;
  position: absolute;
  top: 30%;
  left: 10%;
}
.my-cell {
  padding-top: .4rem;
  padding-bottom: .4rem;
}
</style>
