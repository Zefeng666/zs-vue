webpackJsonp([17],{TK2b:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("1sNz"),i=a("ABCa"),o=a("dQSc"),n=a("2sLL"),r=(e.a,i.a,o.a,n.a,{name:"mall",components:{ViewBox:e.a,XHeader:i.a,Card:o.a,XButton:n.a},created:function(){this.queryAllProducts()},data:function(){return{productList:[]}},methods:{queryAllProducts:function(){var t=this;this.$api.queryAllProducts({pageNo:1,pageSize:100}).then(function(s){200===s.code?t.productList=s.data.items:t.$vux.toast.text(s.message,"top")})}}}),c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mall"},[a("x-header",{staticClass:"vux-1px-b my-header",attrs:{"left-options":{backText:""}}},[t._v("商城")]),t._v(" "),t._l(t.productList,function(s,e){return[a("div",{key:e,staticClass:"mall-goods-item vux-1px-b"},[a("div",{staticClass:"goods-img-box"},[a("img",{staticClass:"goods-img",attrs:{src:s.url}})]),t._v(" "),a("div",{staticClass:"goods-info-box"},[a("span",{staticClass:"goods-info-name"},[t._v(t._s(s.name))]),a("br"),t._v(" "),a("span",{staticClass:"goods-info-detail"},[t._v(t._s(s.detail.substring(0,38)+"..."))]),a("br"),t._v(" "),a("p",{staticClass:"goods-info-price"},[t._v("￥"),a("span",{staticStyle:{"font-weight":"600"}},[t._v(t._s(s.vipPrice))]),t._v("/件")])])])]})],2)},staticRenderFns:[]};var d=a("VU/8")(r,c,!1,function(t){a("di6v")},"data-v-0270de0c",null);s.default=d.exports},di6v:function(t,s){}});
//# sourceMappingURL=17.2905c1daa457425e58dc.js.map