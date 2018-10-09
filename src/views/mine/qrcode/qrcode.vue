<template>
  <div class="myqrcode">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">我的推荐码</x-header>
    <div class="mine-msg">
      <img class="avator" :src="userInfo.wechatAvatar">
      <p>{{userInfo.username}}</p>
      <p>{{userInfo.vipLevel | formatVipLevel}}</p>
    </div>
    <qrcode :value="'http://jieruibai.tlong.tv/register?inviteCode=' + userInfo.code" type="img" :size="200"></qrcode>
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
