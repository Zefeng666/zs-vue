webpackJsonp([8],{"/0UN":function(e,t,a){"use strict";String,String,String,String,String,Number,Array,Object,Number,Boolean;var s={name:"checker",props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,type:{type:String,default:"radio"},value:[String,Number,Array,Object],max:Number,radioRequired:Boolean},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)}},data:function(){return{currentValue:this.value}}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vux-checker-box"},[this._t("default")],2)},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(e){a("Luh7")},null,null);t.a=r.exports},Ahvm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),i=a.n(s),r=a("1sNz"),n=a("ABCa"),d=a("odqc"),u=a("Znkm"),c=a("fBcm"),o=a("b+jt"),l=a("1DHf"),h=a("rHil"),p=a("pDNl"),v=a("7Ah8"),m=a("2sLL"),f=a("QTi7"),g=a("cHu4"),b=a("FHgB"),y=a.n(b),x=a("/0UN"),$=a("hGvq"),_=(r.a,n.a,d.a,u.a,c.a,o.a,l.a,h.a,p.a,v.a,m.a,f.a,g.a,y.a,x.a,$.a,{name:"getGoods",components:{ViewBox:r.a,XHeader:n.a,Tab:d.a,TabItem:u.a,Swiper:c.a,SwiperItem:o.a,Cell:l.a,Group:h.a,XInput:p.a,PopupPicker:v.a,XButton:m.a,Box:f.a,XAddress:g.a,ChinaAddressV4Data:y.a,Checker:x.a,CheckerItem:$.a},created:function(){this.queryOrder(),"{}"===i()(this.$route.params)?this.queryUserAddress():(this.getGoodsObj.addressId=this.$route.params.addressId,this.getGoodsObj.addressName=this.$route.params.addressName),this.queryUser()},computed:{payAmount:function(){return 2===this.checkerWhich?this.getGoodsObj.quantity>=20&&this.getGoodsObj.quantity<100?3*this.getGoodsObj.quantity*100:this.getGoodsObj.quantity>=100?3*this.getGoodsObj.quantity*80:3*this.getGoodsObj.quantity*120:(this.getGoodsObj.quantity>=60&&this.$vux.toast.text("超过60件建议按箱拿货","top"),120*this.getGoodsObj.quantity)}},data:function(){return{index:0,checkerWhich:2,userInfo:{},getGoodsObj:{quantity:"",addressId:"",proxyProvice:"",proxyCity:"",proxyArea:"",addressName:"",addressValue:[]},orderList:[],addressData:y.a}},methods:{queryUser:function(){var e=this;this.$api.queryUser({}).then(function(t){200===t.code?e.userInfo=t.data.user:e.$vux.toast.text(t.message,"top")})},queryUserAddress:function(){var e=this;this.$api.queryUserAddress({}).then(function(t){200===t.code&&(t.data.address.length<1?e.getGoodsObj.addressName="无":(e.getGoodsObj.addressId=t.data.address[0].id,e.getGoodsObj.addressName=t.data.address[0].province+t.data.address[0].city+t.data.address[0].area+t.data.address[0].detail))})},queryOrder:function(){var e=this;this.$api.queryOrder({pageNo:1,pageSize:100}).then(function(t){200===t.code&&(e.orderList=t.data.items)})},wechatCallPay:function(){var e=this;this.$api.wechatCallPay({totalFee:100*this.payAmount}).then(function(t){200===t.code&&("undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",onBridgeReady,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",onBridgeReady),document.attachEvent("onWeixinJSBridgeReady",onBridgeReady)):e.onBridgeReady(t.data.appid,t.data.nonce_str,t.data.prepay_id,t.data.sign))})},cancelOrder:function(e){var t=this;this.$api.cancelOrder({id:e}).then(function(e){200===e.code&&(t.$vux.toast.text("取消订单成功","top"),t.queryOrder())})},insertOrder:function(){var e={};if(!this.getGoodsObj.addressId)return this.$vux.toast.text("请添加地址后再拿货~","top");e.addressId=this.getGoodsObj.addressId,e.paidFee=this.payAmount,2==this.checkerWhich?e.quantity=3*this.getGoodsObj.quantity:e.quantity=this.getGoodsObj.quantity,console.log(e)},toSelectAddress:function(){this.$router.push({name:"selectAddress",params:{addressId:this.getGoodsObj.addressId,addressName:this.getGoodsObj.addressName}})},toSale:function(){this.$router.push({name:"sales"})},selectChecker:function(e){},onBridgeReady:function(e,t,a,s){var i=Date.parse(new Date)/1e3;console.log(i),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e,timeStamp:"1395712654",nonceStr:t,package:"prepay_id="+a,signType:"MD5",paySign:s},function(e){console.log(e),e.err_msg})}}}),k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"getGoods"},[a("x-header",{staticClass:"vux-1px-b my-header",attrs:{"left-options":{backText:"",preventGoBack:!0},fixed:""},on:{"on-click-back":function(t){e.toSale()}}},[e._v("申请拿货")]),e._v(" "),a("tab",{staticClass:"my-tab",attrs:{"line-width":2,"active-color":"#f74c31"},model:{value:e.index,callback:function(t){e.index=t},expression:"index"}},[a("tab-item",{staticClass:"vux-center vux-1px-t",attrs:{selected:""}},[e._v("申请拿货")]),e._v(" "),a("tab-item",{staticClass:"vux-center vux-1px-t"},[e._v("历史订单")])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0===e.index,expression:"index === 0"}],staticClass:"swiper-box"},[a("group",{attrs:{"label-width":"4.5em","label-margin-right":"2em","label-align":"right"}},[a("cell",{attrs:{title:"拿货地址","align-items":"flex-start",value:e.getGoodsObj.addressName,"value-align":"left","is-link":""},nativeOn:{click:function(t){e.toSelectAddress()}}}),e._v(" "),a("x-input",{attrs:{title:"申请数量",name:"username",placeholder:"请输入","show-clear":!1},model:{value:e.getGoodsObj.quantity,callback:function(t){e.$set(e.getGoodsObj,"quantity",t)},expression:"getGoodsObj.quantity"}},[a("checker",{staticClass:"checker-box",attrs:{slot:"right","radio-required":!0,"default-item-class":"checker-item","selected-item-class":"checker-item-selected"},on:{"on-change":e.selectChecker},slot:"right",model:{value:e.checkerWhich,callback:function(t){e.checkerWhich=t},expression:"checkerWhich"}},[0===e.userInfo.historyBuyCount?a("checker-item",{attrs:{value:"1"}},[e._v("件")]):e._e(),e._v(" "),a("checker-item",{class:[2==e.checkerWhich?"checker-item-selected":""],attrs:{value:"2"}},[e._v("箱")])],1)],1),e._v(" "),a("cell",{attrs:{title:"支付金额","align-items":"flex-start","value-align":"left"}},[e._v(e._s(e.payAmount)+"元")])],1),e._v(" "),a("x-button",{staticClass:"submit-btn",attrs:{type:"primary"},nativeOn:{click:function(t){return e.wechatCallPay(t)}}},[e._v("提交")])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.index,expression:"index === 1"}],staticClass:"tab-swiper"},e._l(e.orderList,function(t,s){return a("div",{key:s,staticClass:"order-box vux-1px-b"},[a("p",[a("span",[e._v("申请数量："+e._s(t.order.quantity)+"件")]),e._v(" "),a("span",{staticClass:"text-right"},[e._v(e._s(e._f("orderStatus")(t.order.isAudit)))])]),e._v(" "),a("p",[a("span",[e._v("收货地址："+e._s(t.userAddress.province+t.userAddress.city+t.userAddress.area+t.userAddress.detail))])]),e._v(" "),a("p",[a("span",[e._v("创建时间："+e._s(e._f("formatDate")(t.order.createTime)))]),e._v(" "),a("x-button",{directives:[{name:"show",rawName:"v-show",value:0==t.order.isAudit,expression:"item.order.isAudit == 0"}],staticClass:"btn-right",attrs:{mini:"",plain:""},nativeOn:{click:function(a){e.cancelOrder(t.order.id)}}},[e._v("取消")])],1)])}))],1)},staticRenderFns:[]};var O=a("VU/8")(_,k,!1,function(e){a("fasH")},"data-v-620e96a8",null);t.default=O.exports},Bpdp:function(e,t){},Luh7:function(e,t){},QTi7:function(e,t,a){"use strict";String;var s={name:"box",props:{gap:String}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{style:{margin:this.gap}},[this._t("default")],2)},staticRenderFns:[]},r=a("VU/8")(s,i,!1,null,null,null);t.a=r.exports},fasH:function(e,t){},hGvq:function(e,t,a){"use strict";var s=a("mvHQ"),i=a.n(s),r=a("pFYg"),n=a.n(r);String,Number,Object,Boolean;var d={name:"checker-item",props:{value:{type:[String,Number,Object],required:!0},disabled:Boolean},watch:{disabled:function(e){e&&"radio"===this.$parent.type&&this.value===this.$parent.currentValue&&(this.$parent.currentValue="")}},computed:{classNames:function(){var e=this,t="string"==typeof this.value||"number"==typeof this.value,a={"vux-tap-active":!this.disabled};if(this.$parent.defaultItemClass&&(a[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass){var s=!1;if("radio"===this.$parent.type)t&&this.$parent.currentValue===this.value?s=!0:"object"===n()(this.value)&&u(this.$parent.currentValue,this.value)&&(s=!0);else if("string"==typeof this.value)this.$parent.currentValue.indexOf(this.value)>-1&&(s=!0);else if(this.$parent.currentValue&&this.$parent.currentValue.length){s=this.$parent.currentValue.filter(function(t){return u(t,e.value)}).length>0}a[this.$parent.selectedItemClass]=s}return this.$parent.disabledItemClass&&(a[this.$parent.disabledItemClass]=this.disabled),a}},methods:{select:function(){"radio"===this.$parent.type?this.selectRadio():this.selectCheckbox()},selectRadio:function(){this.disabled||(this.$parent.currentValue===this.value?this.$parent.radioRequired||(this.$parent.currentValue=""):this.$parent.currentValue=this.value),this.$emit("on-item-click",this.value,this.disabled)},selectCheckbox:function(){this.$parent.currentValue&&null!==this.$parent.currentValue||(this.$parent.currentValue=[]);var e="string"==typeof this.value||"number"==typeof this.value;if(!this.disabled){var t=-1;(t=e?this.$parent.currentValue.indexOf(this.value):this.$parent.currentValue.map(function(e){return i()(e)}).indexOf(i()(this.value)))>-1?this.$parent.currentValue.splice(t,1):(!this.$parent.max||this.$parent.max&&null!==this.$parent.currentValue&&this.$parent.currentValue.length<this.$parent.max)&&(this.$parent.currentValue&&this.$parent.currentValue.length||(this.$parent.currentValue=[]),this.$parent.currentValue.push(this.value))}this.$emit("on-item-click",this.value,this.disabled)}}};function u(e,t){return i()(e)===i()(t)}var c={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vux-checker-item",class:this.classNames,on:{click:this.select}},[this._t("default")],2)},staticRenderFns:[]};var o=a("VU/8")(d,c,!1,function(e){a("Bpdp")},null,null);t.a=o.exports}});
//# sourceMappingURL=8.967853fe0eb87450127e.js.map