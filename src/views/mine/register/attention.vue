<template>
  <div class="myqrcode">
    <!-- <x-header class="vux-1px-b" :left-options="{backText: ''}">我的推荐码</x-header> -->
    <p class="mine-head">您已注册成功，请关注公众号进入个人中心操作~</p>
    <div class="mine-msg">
      <img class="avator" src="../../../assets/qrcode.jpg">
    </div>
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
  created () {
    this.queryUser()
  },
  data() {
    return {
      userInfo: ''
    };
  },
  methods: {
    queryUser() {
      this.$vux.loading.show();
      this.$api
        .queryUser({})
        .then(data => {
          if (data.code === 200) {
            this.userInfo = data.data.user;
          }       
          this.$vux.loading.hide();
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mine-head {
  text-align: left;
  font-size: 18px;
  padding: 20px 30px;
}
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
  width: 40%;
  position: absolute;
  top: 40%;
  left: 30%;
}
</style>
