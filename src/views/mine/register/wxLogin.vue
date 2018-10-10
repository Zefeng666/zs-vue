<template>
    <div class="wxLogin">
      <p class="login-text">正在微信登陆<spinner type="dots" :size="'40px'"></spinner></p>
    </div>
</template>

<script>
import { Spinner } from "vux";
export default {
  name: "wxLogin",
  components: {
    Spinner
  },
  created() {
    if (this.$route.query.state && this.$route.query.state == "login") {
      this.wxLogin(this.$route.query.code);
    } else {
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcc9ce3d803af2259&redirect_uri=http%3A%2F%2Fjieruibai.tlong.tv%2FwxLogin&response_type=code&scope=snsapi_userinfo&state=login#wechat_redirect";
    }
  },
  mounted() {
    // console.log(this.$route.query);
    this.wxCode = this.$route.query.code;
  },
  data() {
    return {
      wxCode: ""
    };
  },
  methods: {
    wxLogin(code) {
      this.$api
        .login({
          wechatCode: code
        })
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("登录成功", "top");
            localStorage.setItem("token", data.data.jwt);
            this.$router.push("/sales");
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
.wxLogin {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #ffffff;
}
.login-text {
  font-size: 16px;
  color: #666;
  margin-top: .6rem;
}
</style>
