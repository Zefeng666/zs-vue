webpackJsonp([15],{"+xEf":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("1sNz"),s=o("ABCa"),n=o("wpcj"),a=o("pDNl"),r=o("rHil"),c=o("2sLL"),u=(i.a,s.a,n.a,a.a,r.a,c.a,{name:"myRegister",components:{ViewBox:i.a,XHeader:s.a,Qrcode:n.a,XInput:a.a,Group:r.a,XButton:c.a},created:function(){this.$route.query.inviteCode&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx20c6f976c2fe325d&redirect_uri=http%3A%2F%2Fhaoyi.tlong.tv%2FwxLogin&response_type=code&scope=snsapi_userinfo&state="+this.$route.query.inviteCode+"#wechat_redirect")},mounted:function(){this.wxCode=this.$route.query.code,this.invideCode=this.$route.query.state},data:function(){return{userInfo:"",phone:"",password:"",captcha:"",show:!0,count:"",timer:null,invideCode:"",wxCode:""}},methods:{queryUser:function(){var t=this;this.$vux.loading.show(),this.$api.queryUser({}).then(function(e){200===e.code&&(t.userInfo=e.data.user),t.$vux.loading.hide()})},getCode:function(){var t=this;""!=this.phone?this.timer||(this.count=60,this.show=!1,this.sendSms(),this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3)):this.$vux.toast.text("手机号不得为空","top")},sendSms:function(){var t=this;this.$api.sendSms({mobile:this.phone}).then(function(e){200===e.code||t.$vux.toast.text(e.message,"top")})},goRegister:function(){var t=this;this.$api.register({mobile:this.phone,captcha:this.captcha,password:this.password,code:this.invideCode,wechatCode:this.wxCode}).then(function(e){200===e.code?(t.$vux.toast.text("注册成功","top"),localStorage.setItem("token",e.data.jwt),t.$router.push("/attention")):t.$vux.toast.text(e.message,"top")})}}}),h={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"myRegister"},[o("h3",{staticClass:"myRegister-head"},[t._v("会员注册")]),t._v(" "),o("group",[o("x-input",{attrs:{title:"",placeholder:"输入手机号","is-type":"china-mobile"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),o("x-input",{attrs:{title:"",placeholder:"输入验证码"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}},[t.show?o("x-button",{attrs:{slot:"right",type:"primary",mini:""},nativeOn:{click:function(e){return t.getCode(e)}},slot:"right"},[t._v("获取验证码")]):t._e(),t._v(" "),t.show?t._e():o("x-button",{attrs:{slot:"right",type:"default",mini:"",disabled:""},slot:"right"},[t._v(t._s(t.count))])],1),t._v(" "),o("x-input",{attrs:{title:"",type:"password",placeholder:"输入4-16位密码",min:4,max:16},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),o("x-button",{staticClass:"register-btn",attrs:{type:"primary"},nativeOn:{click:function(e){return t.goRegister(e)}}},[t._v("注册")])],1)},staticRenderFns:[]};var d=o("VU/8")(u,h,!1,function(t){o("uH8J")},"data-v-2b368d7a",null);e.default=d.exports},uH8J:function(t,e){}});
//# sourceMappingURL=15.0b8856a14d7aceef7ba2.js.map