webpackJsonp([16],{ZquO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("1sNz"),o=s("ABCa"),r=s("dQSc"),c=s("2sLL"),n=(a.a,o.a,r.a,c.a,{name:"goodsInfo",components:{ViewBox:a.a,XHeader:o.a,Card:r.a,XButton:c.a},created:function(){this.queryProduct()},data:function(){return{productInfo:{},userInfo:{},price:0}},methods:{goGetGoods:function(){this.$router.push("/getGoods")},queryUser:function(){var t=this;this.$api.queryUser({}).then(function(e){if(200===e.code)switch(t.userInfo=e.data.user,t.userInfo.vipLevel){case 0:t.price=.7*t.productInfo.price;break;case 1:t.price=.65*t.productInfo.price;break;case 2:t.price=.6*t.productInfo.price;break;case 3:t.price=.55*t.productInfo.price;break;case 4:t.price=.5*t.productInfo.price;break;default:t.price=t.productInfo.price}else t.$vux.toast.text(e.message,"top")})},queryProduct:function(){var t=this;this.$api.queryProduct().then(function(e){200===e.code?(t.productInfo=e.data.product,t.queryUser()):t.$vux.toast.text(e.message,"top")})}}}),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goodsInfo"},[s("x-header",{staticClass:"vux-1px-b my-header",attrs:{"left-options":{backText:""}}},[t._v(t._s(t.productInfo.name))]),t._v(" "),s("card",{staticClass:"card-head",attrs:{header:{title:"商品图片"}}},[s("div",{staticClass:"card-demo-content01",attrs:{slot:"content"},slot:"content"},[s("img",{staticClass:"goods-img",attrs:{src:t.productInfo.url,alt:""}})])]),t._v(" "),s("card",{staticClass:"card-head",attrs:{header:{title:"商品简介"}}},[s("div",{staticClass:"goods-msg",attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.productInfo.detail))])]),t._v(" "),s("div",{staticClass:"bottom-nav"},[s("span",[t._v("价格：")]),t._v(" "),s("span",[t._v(t._s(t.price.toFixed(2))+"元/瓶")]),t._v(" "),s("x-button",{staticClass:"goods-btn",attrs:{type:"primary",mini:""},nativeOn:{click:function(e){return t.goGetGoods(e)}}},[t._v("立即拿货")])],1)],1)},staticRenderFns:[]};var d=s("VU/8")(n,i,!1,function(t){s("vlpX")},"data-v-2d5f017c",null);e.default=d.exports},vlpX:function(t,e){}});
//# sourceMappingURL=16.513ac3272b65f07e14ca.js.map