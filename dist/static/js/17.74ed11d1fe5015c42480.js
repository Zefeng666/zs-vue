webpackJsonp([17],{VN1m:function(t,e){},"f+EO":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("1sNz"),n=a("ABCa"),i=a("1DHf"),r=a("rHil"),l=a("pDNl"),c=a("2sLL"),o=(s.a,n.a,i.a,r.a,l.a,c.a,{name:"pointDetails",components:{ViewBox:s.a,XHeader:n.a,Cell:i.a,Group:r.a,XInput:l.a,XButton:c.a},created:function(){this.queryIntegrals()},data:function(){return{IntegralsList:[],page:1}},methods:{queryIntegrals:function(){var t=this;this.$api.queryIntegrals({pageNo:this.page,pageSize:100}).then(function(e){200===e.code&&(t.IntegralsList=e.data.items)})}}}),p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pointDetails"},[a("x-header",{staticClass:"vux-1px-b my-header",attrs:{"left-options":{backText:""}}},[t._v("收益明细")]),t._v(" "),a("ul",{ref:"list",staticClass:"tab-swiper list-content"},t._l(t.IntegralsList,function(e,s){return a("li",{key:s,staticClass:"order-box vux-1px-b list-item"},[a("p",[a("span",[t._v("收益："+t._s(e.integralNum)+"元")]),t._v(" "),a("span",{staticClass:"text-right"},[t._v(t._s(e.changeType))])]),t._v(" "),a("p",[a("span",[t._v("描述："+t._s(e.changeDetail))])]),t._v(" "),a("p",[a("span",[t._v("时间："+t._s(t._f("formatDate")(e.createTime)))])])])}))],1)},staticRenderFns:[]};var u=a("VU/8")(o,p,!1,function(t){a("VN1m")},"data-v-0bbac220",null);e.default=u.exports}});
//# sourceMappingURL=17.74ed11d1fe5015c42480.js.map