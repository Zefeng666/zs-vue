webpackJsonp([10],{"9iTH":function(t,e){},EXwE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("1sNz"),s=a("1DHf"),i=a("rHil"),r=a("ABCa"),l=a("y7b9"),c=(n.a,l.a,s.a,i.a,r.a,{name:"mine",components:{ViewBox:n.a,Tabbar:l.a,Cell:s.a,Group:i.a,XHeader:r.a},created:function(){this.queryUser()},data:function(){return{userInfo:{}}},methods:{queryUser:function(){var t=this;this.$api.queryUser({}).then(function(e){200===e.code&&(console.log(e),t.userInfo=e.data.user)})}}}),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mine"},[n("div",{staticClass:"mine-msg"},[n("img",{staticClass:"avator",attrs:{src:a("OHfe"),alt:""}}),t._v(" "),n("p",[t._v("微信昵称："+t._s(t.userInfo.username))]),t._v(" "),n("p",[t._v("等级： "+t._s(t._f("formatVipLevel")(t.userInfo.vipLevel)))])]),t._v(" "),n("group",[n("cell",{staticClass:"my-cell",attrs:{title:"我的地址","value-align":"left",link:"/myAddress"}}),t._v(" "),n("cell",{staticClass:"my-cell",attrs:{title:"我的银行卡","value-align":"left",link:"/myBankCard"}}),t._v(" "),n("cell",{staticClass:"my-cell",attrs:{title:"我的推荐码","value-align":"left",link:"/qrcode"}}),t._v(" "),n("cell",{staticClass:"my-cell",attrs:{title:"我的身份证","value-align":"left",link:"/myIdCard"}})],1),t._v(" "),n("tabbar",{attrs:{activeIndex:1}})],1)},staticRenderFns:[]};var u=a("VU/8")(c,o,!1,function(t){a("9iTH")},"data-v-5a8fb4e0",null);e.default=u.exports},"F/LU":function(t,e){},McE9:function(t,e){},XCwc:function(t,e){},y7b9:function(t,e,a){"use strict";var n=a("piuB"),s=(n.b,String,{mounted:function(){},name:"tabbar",mixins:[n.b],props:{iconClass:String}}),i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-tabbar"},[this._t("default")],2)},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(t){a("F/LU")},null,null).exports,l=(String,Number,{name:"badge",props:{text:[String,Number]}}),c={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["vux-badge",{"vux-badge-dot":void 0===this.text,"vux-badge-single":void 0!==this.text&&1===this.text.toString().length}],domProps:{textContent:this._s(this.text)}})},staticRenderFns:[]};var o=a("VU/8")(l,c,!1,function(t){a("McE9")},null,null).exports,u=(n.a,Boolean,String,String,Object,String,{name:"tabbar-item",components:{Badge:o},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[n.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}),d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():a("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?a("sup",[a("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),a("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]},v=a("VU/8")(u,d,!1,null,null,null).exports,b={components:{Tabbar:r,TabbarItem:v},data:function(){return{index:0,isShow:!0}},props:["activeIndex"],computed:{},watch:{},created:function(){this.index=this.activeIndex},methods:{}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("tabbar",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[a("tabbar-item",{attrs:{link:"/sales"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("销售")])]),t._v(" "),a("tabbar-item",{attrs:{link:"/mine"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("我的")])])],1)],1)},staticRenderFns:[]};var f=a("VU/8")(b,m,!1,function(t){a("XCwc")},"data-v-5bab00a2",null);e.a=f.exports}});
//# sourceMappingURL=10.8218e66d86ba81e48edb.js.map