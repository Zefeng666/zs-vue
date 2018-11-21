<template>
  <div class="myRegister">
    <h3 class="myRegister-head">会员注册</h3>
    <group>
      <x-input title="" placeholder="输入手机号" v-model="phone" is-type="china-mobile"></x-input>
      <x-input title="" placeholder="输入验证码" v-model="captcha">
        <x-button v-if="show" slot="right" type="primary" mini @click.native="getCode">获取验证码</x-button>
        <x-button v-if="!show" slot="right" type="default" mini disabled>{{count}}</x-button>
      </x-input>
      <x-input title="" type="password" placeholder="输入4-16位密码" v-model="password" :min="4" :max="16"></x-input>
    </group>
    <x-button class="register-btn" type="primary" @click.native="goRegister">注册</x-button>
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
    // if (!this.$route.query.inviteCode) {
    //   window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa5b0807540a1517e&redirect_uri=http%3A%2F%2Fhaoyi.tlong.tv%2Fregister&response_type=code&scope=snsapi_userinfo#wechat_redirect';
    // }
  },
  mounted () {
    // console.log(this.$route.query);
    this.wxCode = this.$route.query.code;
    // this.invideCode = this.$route.query.state;
  },
  data() {
    return {
      userInfo: "",
      phone: "",
      password: "",
      captcha: "",
      show: true,
      count: '',
      timer: null,
      invideCode: '',
      wxCode: ''
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
    },
    getCode() {
      const TIME_COUNT = 60;
      if (this.phone == "") {
        this.$vux.toast.text("手机号不得为空", "top");
        return;
      }
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.sendSms();
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    sendSms() {
      this.$api.sendSms({
        mobile: this.phone
      }).then(data => {
        if (data.code === 200) {
        } else {
          this.$vux.toast.text(data.message, "top");
        }
      });
    },
    goRegister() {
      this.$api.register({
        mobile: this.phone,
        captcha: this.captcha,
        password: this.password,
        wechatCode: this.wxCode
      }).then(data => {
        if (data.code === 200) {
          this.$vux.toast.text('注册成功', "top");
          localStorage.setItem('token', data.data.jwt);
          this.$router.push('/mine');
        } else {
          this.$vux.toast.text(data.message, "top");
        }
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
  padding: 1rem 0 0.6rem;
  font-weight: normal;
}
.register-btn {
  margin-top: 1rem;
  width: 90%;
}
</style>
