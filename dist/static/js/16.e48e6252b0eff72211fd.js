webpackJsonp([16],{CR1B:function(e,t){},NVq3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("1sNz"),i=r("ABCa"),a=r("odqc"),n=r("Znkm"),o=r("fBcm"),d=r("b+jt"),c=r("1DHf"),p=r("rHil"),u=r("pDNl"),v=r("2sLL"),l=(s.a,i.a,a.a,n.a,o.a,d.a,c.a,p.a,u.a,v.a,{name:"shippingApplication",components:{ViewBox:s.a,XHeader:i.a,Tab:a.a,TabItem:n.a,Swiper:o.a,SwiperItem:d.a,Cell:c.a,Group:p.a,XInput:u.a,XButton:v.a},created:function(){this.queryHistoryShipOrder(),this.queryShipOrder()},computed:{},data:function(){return{index:0,checkerWhich:2,userInfo:{},orderList:[],shipOrderList:[]}},methods:{queryHistoryShipOrder:function(){var e=this;this.$vux.loading.show({text:""}),this.$api.queryHistoryShipOrder({pageNo:1,pageSize:100}).then(function(t){200===t.code&&(e.orderList=t.data.items),e.$vux.loading.hide()})},queryShipOrder:function(){var e=this;this.$vux.loading.show({text:""}),this.$api.queryShipOrder({pageNo:1,pageSize:1e3}).then(function(t){200===t.code&&(e.shipOrderList=t.data.items),e.$vux.loading.hide()})},shipOrder:function(e,t){var r=this;this.$api.shipOrder({orderId:e,isSelf:t}).then(function(e){200===e.code?(r.$vux.toast.text("操作成功","top"),r.queryShipOrder()):r.$vux.toast.text(e.message,"top")})},toSale:function(){this.$router.push({name:"sales"})},selectChecker:function(e){0===e?this.queryShipOrder():1===e&&this.queryHistoryShipOrder()},checkOrder:function(e){if(0===e.orderStatus)return"未支付";if(1===e.orderStatus)return"待发货";if(1===e.isCompanyDelivery)return"公司发货";var t=localStorage.getItem("uid");return e.trueShipUid==t?"已发货":"上级发货"}}}),_={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shippingApplication"},[r("x-header",{staticClass:"vux-1px-b my-header",attrs:{"left-options":{backText:"",preventGoBack:!0},fixed:""},on:{"on-click-back":function(t){e.toSale()}}},[e._v("发货申请")]),e._v(" "),r("tab",{staticClass:"my-tab",attrs:{"line-width":2,"active-color":"#f74c31"},model:{value:e.index,callback:function(t){e.index=t},expression:"index"}},[r("tab-item",{staticClass:"vux-center vux-1px-t",attrs:{selected:""},on:{"on-item-click":e.selectChecker}},[e._v("发货申请")]),e._v(" "),r("tab-item",{staticClass:"vux-center vux-1px-t",on:{"on-item-click":e.selectChecker}},[e._v("历史订单")])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:0===e.index,expression:"index === 0"}],staticClass:"swiper-box"},[r("div",e._l(e.shipOrderList,function(t,s){return t.product?r("div",{key:s,staticClass:"order-box vux-1px-b"},[r("p",[r("span",[e._v("商品："+e._s(t.product.name))]),e._v(" "),r("span",{staticClass:"text-right"},[e._v("申请数量："+e._s(t.order.quantity+"瓶"))])]),e._v(" "),r("p",[r("span",[e._v("用户："+e._s(t.user.username))]),e._v(" "),r("span",{staticClass:"text-right"},[e._v("手机号："+e._s(t.user.mobile))])]),e._v(" "),r("p",[r("span",[e._v("收货地址："+e._s(t.userAddress.province)+e._s(t.userAddress.city)+e._s(t.userAddress.area)+e._s(t.userAddress.detail))])]),e._v(" "),r("p",[r("span",[e._v("创建时间："+e._s(e._f("formatDate")(t.order.createTime)))])]),e._v(" "),-1===t.order.isUpgrade?r("p",{staticStyle:{"text-align":"right"}},[r("span",{staticStyle:{color:"rgb(247, 76, 49)"}},[e._v("该单为升级单，须公司确认")])]):r("p",{staticStyle:{"text-align":"right"}},[r("x-button",{attrs:{mini:""},nativeOn:{click:function(r){e.shipOrder(t.order.id,1)}}},[e._v("转上级发货")]),e._v(" "),r("x-button",{attrs:{type:"primary",mini:""},nativeOn:{click:function(r){e.shipOrder(t.order.id,0)}}},[e._v("发货")])],1)]):e._e()}))]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1===e.index,expression:"index === 1"}],staticClass:"tab-swiper"},e._l(e.orderList,function(t,s){return t.product?r("div",{key:s,staticClass:"order-box vux-1px-b"},[r("p",[r("span",[e._v("商品："+e._s(t.product.name))]),e._v(" "),r("span",{staticClass:"text-right"},[e._v("申请数量："+e._s(t.order.quantity+"瓶"))])]),e._v(" "),r("p",[r("span",[e._v("用户："+e._s(t.user.username))]),e._v(" "),r("span",{staticClass:"text-right"},[e._v("手机号："+e._s(t.user.mobile))])]),e._v(" "),r("p",[r("span",[e._v("收货地址："+e._s(t.userAddress.province)+e._s(t.userAddress.city)+e._s(t.userAddress.area)+e._s(t.userAddress.detail))])]),e._v(" "),r("p",[r("span",[e._v("创建时间："+e._s(e._f("formatDate")(t.order.createTime)))])]),e._v(" "),r("p",{staticStyle:{"text-align":"right"}},[r("span",[e._v("状态："+e._s(e.checkOrder(t.order)))])])]):e._e()}))],1)},staticRenderFns:[]};var h=r("VU/8")(l,_,!1,function(e){r("CR1B")},"data-v-24cf7c83",null);t.default=h.exports}});
//# sourceMappingURL=16.e48e6252b0eff72211fd.js.map