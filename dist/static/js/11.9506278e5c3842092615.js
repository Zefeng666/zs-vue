webpackJsonp([11],{Vchb:function(t,n){for(var e=0,i=["webkit","moz"],r=0;r<i.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[i[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[r]+"CancelAnimationFrame"]||window[i[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var i=(new Date).getTime(),r=Math.max(0,16-(i-e)),a=window.setTimeout(function(){t(i+r)},r);return e=i+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},oS3t:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("Vchb");var i={a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"},r={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"};function a(t,n,e){t.setAttribute(i[n]||n,e)}function o(t,n){var e=t.split(";"),i=e.slice(n),r=e.slice(0,e.length-i.length);return(e=i.concat(r).reverse()).join(";")+";"+e[0]}var s={sw:4,lc:"round",line:[{fn:function(t,n){return{y1:"ios"===n?17:12,y2:"ios"===n?29:20,t:"translate(32,32) rotate("+(30*t+(t<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:o("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",t),rc:"indefinite"}},t:1}]}},t:12}]},c={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:s,"ios-small":s,bubbles:{sw:0,c:[{fn:function(t){return{cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:o("1;2;3;4;5;6;7;8",t),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(t){return{r:5,cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:o(".3;.3;.3;.4;.7;.85;.9;1",t),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[r]}]},dots:{c:[{fn:function(t){return{cx:16+16*t,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:o(".5;.6;.8;1;.8;.6;.5",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:o("4;5;6;5;4;3;3",t),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(t){return{x1:10+14*t,x2:10+14*t,a:[{fn:function(){return{an:"y1",dur:"750ms",v:o("16;18;28;18;16",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:o("48;44;36;46;48",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:o("1;.8;.5;.4;1",t),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(t){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*t+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*t+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[r]}]}},u={android:function(t){var n=this;this.stop=!1;var e,i=0,r=0,o=t.querySelector("g"),s=t.querySelector("circle");function c(){if(!n.stop){var t,u=(t=Date.now()-e,(t/=650/2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)),f=1,l=0,d=188-58*u,m=182-182*u;i%2&&(f=-1,l=-64,d=128- -58*u,m=182*u);var h=[0,-101,-90,-11,-180,79,-270,-191][i];a(s,"da",Math.max(Math.min(d,188),128)),a(s,"os",Math.max(Math.min(m,182),0)),a(s,"t","scale("+f+",1) translate("+l+",0) rotate("+h+",32,32)"),(r+=4.1)>359&&(r=0),a(o,"t","rotate("+r+",32,32)"),u>=1&&(++i>7&&(i=0),e=Date.now()),window.requestAnimationFrame(c)}}return function(){return e=Date.now(),c(),n}}};var f=function(t,n,e){var r;r=n;var o=document.createElement("div");return function t(n,e,r,o,s){var c,u,f,l=document.createElement(i[n]||n);for(c in e)if("[object Array]"===Object.prototype.toString.call(e[c]))for(u=0;u<e[c].length;u++)if(e[c][u].fn)for(f=0;f<e[c][u].t;f++)t(c,e[c][u].fn(f,o),l,o);else t(c,e[c][u],l,o);else a(l,c,e[c]);s&&"28px"!==s&&a(l,"style","width: "+s+"; height: "+s),r.appendChild(l)}("svg",{viewBox:"0 0 64 64",g:[c[r]]},o,r,e),t.innerHTML=o.innerHTML,u[r]&&u[r](t)(),t},l=(String,String,["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"]),d={name:"spinner",mounted:function(){var t=this;this.$nextTick(function(){f(t.$el,t.type,t.size)})},props:{type:{type:String,default:"ios"},size:String},computed:{styles:function(){if(void 0!==this.size&&"28px"!==this.size)return{width:this.size,height:this.size}},className:function(){for(var t={},n=0;n<l.length;n++)t["vux-spinner-"+l[n]]=this.type===l[n];return t}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"vux-spinner",class:this.className,style:this.styles})},staticRenderFns:[]};var h=e("VU/8")(d,m,!1,function(t){e("xMyS")},null,null).exports,p={name:"wxLogin",components:{Spinner:h},created:function(){this.$route.query.code?(this.wxState=this.$route.query.state,this.wxLogin(this.$route.query.code)):window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa5b0807540a1517e&redirect_uri=https%3A%2F%2Fhaoyi.houseselected.com%2FwxLogin&response_type=code&scope=snsapi_userinfo&state=sales#wechat_redirect"},mounted:function(){this.wxCode=this.$route.query.code},data:function(){return{wxCode:"",wxState:""}},methods:{wxLogin:function(t){var n=this;this.$api.login({wechatCode:t}).then(function(t){200===t.code?(n.$vux.toast.text("登录成功","top"),localStorage.clear(),localStorage.setItem("token",t.data.jwt),n.$router.push({name:n.wxState})):950===t.code||n.$vux.toast.text(t.message,"top")})}}},w={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"wxLogin"},[n("p",{staticClass:"login-text"},[this._v("正在微信登陆"),n("spinner",{attrs:{type:"dots",size:"40px"}})],1)])},staticRenderFns:[]};var v=e("VU/8")(p,w,!1,function(t){e("pfVb")},"data-v-2c32e648",null);n.default=v.exports},pfVb:function(t,n){},xMyS:function(t,n){}});
//# sourceMappingURL=11.9506278e5c3842092615.js.map