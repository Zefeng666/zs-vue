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
    if (this.$route.query.code) {
      this.wxState = this.$route.query.state;
      this.wxLogin(this.$route.query.code);
      alert('有code')
    } else {
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa5b0807540a1517e&redirect_uri=https%3A%2F%2Fhaoyi.houseselected.com%2FwxLogin&response_type=code&scope=snsapi_userinfo&state=sales#wechat_redirect";
        alert('无code')
    }
  },
  mounted() {
    this.wxCode = this.$route.query.code;
  },
  data() {
    return {
      wxCode: "",
      wxState: ""
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
            localStorage.clear();
            localStorage.setItem("token", data.data.jwt);
            this.$router.push({
              name: this.wxState
            });
          } else if (data.code === 950) {
            
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
