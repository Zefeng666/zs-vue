webpackJsonp([10],{EXwE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("1sNz"),i=a("1DHf"),n=a("rHil"),r=a("ABCa"),l=a("y7b9"),c=(s.a,l.a,i.a,n.a,r.a,{name:"mine",components:{ViewBox:s.a,Tabbar:l.a,Cell:i.a,Group:n.a,XHeader:r.a},created:function(){this.queryUser()},data:function(){return{userInfo:{}}},computed:{idCardStatus:function(){return-1===this.userInfo.isAuditIdCard?"(未提交)":0===this.userInfo.isAuditIdCard?"(审核中)":1===this.userInfo.isAuditIdCard?"(审核通过)":2===this.userInfo.isAuditIdCard?"(审核未通过)":void 0}},methods:{queryUser:function(){var t=this;this.$api.queryUser({}).then(function(e){200===e.code&&(console.log(e),t.userInfo=e.data.user)})}}}),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mine"},[a("div",{staticClass:"mine-msg"},[a("img",{staticClass:"avator",attrs:{src:t.userInfo.wechatAvatar,alt:""}}),t._v(" "),a("p",[t._v("微信昵称："+t._s(t.userInfo.username))]),t._v(" "),a("p",[t._v("等级： "+t._s(t._f("formatVipLevel")(t.userInfo.vipLevel)))])]),t._v(" "),a("group",[a("cell",{staticClass:"my-cell",attrs:{title:"我的地址","value-align":"left",link:"/myAddress"}}),t._v(" "),a("cell",{staticClass:"my-cell",attrs:{title:"我的银行卡","value-align":"left",link:"/myBankCard"}}),t._v(" "),a("cell",{staticClass:"my-cell",attrs:{title:"我的推荐码","value-align":"left",link:"/qrcode"}}),t._v(" "),a("cell",{staticClass:"my-cell",attrs:{title:"我的身份证","value-align":"left",link:"/myIdCard"}},[t._v(t._s(t.idCardStatus))])],1),t._v(" "),a("tabbar",{attrs:{activeIndex:1}})],1)},staticRenderFns:[]};var u=a("VU/8")(c,o,!1,function(t){a("z+dr")},"data-v-9f150170",null);e.default=u.exports},"F/LU":function(t,e){},McE9:function(t,e){},XCwc:function(t,e){},y7b9:function(t,e,a){"use strict";var s=a("piuB"),i=(s.b,String,{mounted:function(){},name:"tabbar",mixins:[s.b],props:{iconClass:String}}),n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-tabbar"},[this._t("default")],2)},staticRenderFns:[]};var r=a("VU/8")(i,n,!1,function(t){a("F/LU")},null,null).exports,l=(String,Number,{name:"badge",props:{text:[String,Number]}}),c={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["vux-badge",{"vux-badge-dot":void 0===this.text,"vux-badge-single":void 0!==this.text&&1===this.text.toString().length}],domProps:{textContent:this._s(this.text)}})},staticRenderFns:[]};var o=a("VU/8")(l,c,!1,function(t){a("McE9")},null,null).exports,u=(s.a,Boolean,String,String,Object,String,{name:"tabbar-item",components:{Badge:o},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[s.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}),d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():a("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?a("sup",[a("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),a("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]},v=a("VU/8")(u,d,!1,null,null,null).exports,b={components:{Tabbar:r,TabbarItem:v},data:function(){return{index:0,isShow:!0}},props:["activeIndex"],computed:{},watch:{},created:function(){this.index=this.activeIndex},methods:{}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("tabbar",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[a("tabbar-item",{attrs:{link:"/sales"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("销售")])]),t._v(" "),a("tabbar-item",{attrs:{link:"/mine"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("我的")])])],1)],1)},staticRenderFns:[]};var f=a("VU/8")(b,m,!1,function(t){a("XCwc")},"data-v-5bab00a2",null);e.a=f.exports},"z+dr":function(t,e){}});
//# sourceMappingURL=10.49e1804e9b02ab9c14f5.js.map