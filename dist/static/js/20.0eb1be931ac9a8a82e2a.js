webpackJsonp([20],{XC7D:function(e,t){},hm3V:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("1sNz"),r=a("ABCa"),n=a("wpcj"),i=(s.a,r.a,n.a,{name:"myqrcode",components:{ViewBox:s.a,XHeader:r.a,Qrcode:n.a},created:function(){this.queryUser()},data:function(){return{userInfo:""}},methods:{queryUser:function(){var e=this;this.$vux.loading.show(),this.$api.queryUser({}).then(function(t){200===t.code&&(e.userInfo=t.data.user),e.$vux.loading.hide()})}}}),o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myqrcode"},[a("x-header",{staticClass:"vux-1px-b",attrs:{"left-options":{backText:""}}},[e._v("我的推荐码")]),e._v(" "),a("div",{staticClass:"mine-msg"},[a("img",{staticClass:"avator",attrs:{src:e.userInfo.wechatAvatar}}),e._v(" "),a("p",[e._v(e._s(e.userInfo.username))]),e._v(" "),a("p",[e._v(e._s(e._f("formatVipLevel")(e.userInfo.vipLevel)))])]),e._v(" "),a("qrcode",{attrs:{value:"http://haoyi.tlong.tv/register?inviteCode="+e.userInfo.code,type:"img",size:200}})],1)},staticRenderFns:[]};var c=a("VU/8")(i,o,!1,function(e){a("XC7D")},"data-v-1cb20216",null);t.default=c.exports}});
//# sourceMappingURL=20.0eb1be931ac9a8a82e2a.js.map