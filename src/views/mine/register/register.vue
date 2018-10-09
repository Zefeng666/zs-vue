<template>
  <div class="myRegister">
    <h3 class="myRegister-head">手机号注册</h3>
    <group>
      <x-input title="" placeholder="输入手机号" v-model="phone" is-type="china-mobile"></x-input>
      <x-input title="" placeholder="输入验证码" v-model="verification">
        <x-button slot="right" type="primary" mini>获取验证码</x-button>
      </x-input>
      <x-input title="" type="password" placeholder="输入4-16位密码" v-model="password" :min="4" :max="16"></x-input>
    </group>
    <x-button class="register-btn" type="primary">注册</x-button>
  </div>
</template>

<script>
import { ViewBox, XHeader, Qrcode, XInput, Group, XButton } from "vux";
export default {
  name: "myRegister",
  components: {
    ViewBox,
    XHeader,
    Qrcode,
    XInput,
    Group,
    XButton
  },
  created() {
    window.open('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcc9ce3d803af2259&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_userinfo#wechat_redirect')
  },
  data() {
    return {
      userInfo: "",
      phone: "",
      password: '',
      verification: ''
    };
  },
  methods: {
    queryUser() {
      this.$vux.loading.show();
      this.$api.queryUser({}).then(data => {
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
.myRegister {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #ffffff;
}
.myRegister-head {
  font-size: 24px;
  padding: 1rem 0 .6rem;
}
.register-btn {
  margin-top: 1rem;
  width: 90%;
}
</style>
