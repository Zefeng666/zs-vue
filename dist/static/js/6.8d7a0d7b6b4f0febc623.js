webpackJsonp([6],{"3ex+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("wLrF");a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var r=a("oSSf"),o=a.n(r),s=a("J6mD");var l=function(e){a("jd6m")},u=a("VU/8")(o.a,s.a,!1,l,"data-v-8c37c95a",null);t.default=u.exports},"78BN":function(e,t){},"9gqI":function(e,t,a){e.exports=a("3ex+")},A7c1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("1sNz"),i=a("ABCa"),r={render:function(){var e=this.$createElement;return(this._self._c||e)("p",{staticClass:"vux-divider"},[this._t("default")],2)},staticRenderFns:[]};var o=a("VU/8")({name:"divider"},r,!1,function(e){a("78BN")},null,null).exports,s=a("2sLL"),l=a("9gqI"),u=a.n(l),d=a("sbrb"),c=a.n(d),f=(n.a,i.a,u.a,s.a,{name:"myIdCard",components:{ViewBox:n.a,XHeader:i.a,Uploader:u.a,Divider:o,XButton:s.a},mounted:function(){this.queryUser(),this.getQnToken(),this.queryUserIdCard()},data:function(){return{idCardObj:{},userInfo:{},value:"",headerImage:"",headerImage2:"",picValue:"",picValue2:"",qnToken:"",imgKey:"",imgKey2:""}},methods:{savePic:function(){var e=this;this.$api.alterUserIdCard({frontPhoto:this.imgKey,reversePhoto:this.imgKey2}).then(function(t){200===t.code?(e.$vux.toast.text("上传成功","top"),e.$router.go(-1)):e.$vux.toast.text(t.message,"top")})},getQnToken:function(){var e=this;this.$api.getQnToken({}).then(function(t){200===t.code?e.qnToken=t.data.token:e.$vux.toast.text(t.message,"top")})},queryUserIdCard:function(){var e=this;this.$api.queryUserIdCard({}).then(function(t){200===t.code?t.data.idCard&&(e.headerImage=t.data.idCard.frontPhoto,e.headerImage2=t.data.idCard.reversePhoto):e.$vux.toast.text(t.message,"top")})},queryUser:function(){var e=this;this.$api.queryUser({}).then(function(t){200===t.code&&(e.userInfo=t.data.user)})},upload:function(e){var t=e.target.files||e.dataTransfer.files;t.length&&(this.picValue=t[0],this.imgPreview(this.picValue,1))},upload2:function(e){var t=e.target.files||e.dataTransfer.files;t.length&&(this.picValue2=t[0],this.imgPreview(this.picValue2,2))},imgPreview:function(e,t){var a=this,n=void 0;if(c.a.getData(e,function(){n=c.a.getTag(this,"Orientation")}),e&&window.FileReader&&/^image/.test(e.type)){var i=new FileReader;i.readAsDataURL(e),i.onloadend=function(){var e=this.result,i=new Image;i.src=e,console.log(i),this.result.length<=102400?(1===t?a.headerImage=this.result:2===t&&(a.headerImage2=this.result),a.postImg(this.result,t)):i.onload=function(){var e=a.compress(i,n);1===t?a.headerImage=e:2===t&&(a.headerImage2=e),a.postImg(e,t)}}}},postImg:function(e,t){var a=this,n=e.substring(23),i=new XMLHttpRequest;i.onreadystatechange=function(){4==i.readyState&&(1===t?a.imgKey=JSON.parse(i.responseText).key:2===t&&(a.imgKey2=JSON.parse(i.responseText).key),console.log(a.imgKey2))},i.open("POST","http://upload.qiniup.com/putb64/-1",!0),i.setRequestHeader("Content-Type","application/octet-stream"),i.setRequestHeader("Authorization","UpToken "+this.qnToken),i.send(n)},rotateImg:function(e,t,a){if(null!=e){var n=e.height,i=e.width,r=2;null==r&&(r=0),"right"==t?++r>3&&(r=0):--r<0&&(r=3);var o=90*r*Math.PI/180,s=a.getContext("2d");switch(r){case 0:a.width=i,a.height=n,s.drawImage(e,0,0);break;case 1:a.width=n,a.height=i,s.rotate(o),s.drawImage(e,0,-n);break;case 2:a.width=i,a.height=n,s.rotate(o),s.drawImage(e,-i,-n);break;case 3:a.width=n,a.height=i,s.rotate(o),s.drawImage(e,-i,0)}}},compress:function(e,t){var a=document.createElement("canvas"),n=a.getContext("2d"),i=document.createElement("canvas"),r=i.getContext("2d"),o=e.src.length,s=e.width,l=e.height;console.log(s);var u=void 0;(u=s*l/4e6)>1?(console.log("大于400万像素"),s/=u=Math.sqrt(u),l/=u):u=1,a.width=s,a.height=l,n.fillStyle="#fff",n.fillRect(0,0,a.width,a.height);var d=void 0;if((d=s*l/1e6)>1){console.log("超过100W像素");var c=~~(s/(d=~~(Math.sqrt(d)+1))),f=~~(l/d);i.width=c,i.height=f;for(var g=0;g<d;g++)for(var h=0;h<d;h++)r.drawImage(e,g*c*u,h*f*u,c*u,f*u,0,0,c,f),n.drawImage(i,g*c,h*f,c,f)}else n.drawImage(e,0,0,s,l);if(""!=t&&1!=t)switch(t){case 6:this.rotateImg(e,"left",a);break;case 8:this.rotateImg(e,"right",a);break;case 3:this.rotateImg(e,"right",a),this.rotateImg(e,"right",a)}var p=a.toDataURL("image/jpeg",.1);return console.log("压缩前："+o),console.log("压缩后："+p.length),console.log("压缩率："+~~(100*(o-p.length)/o)+"%"),i.width=i.height=a.width=a.height=0,console.log(p),p}}}),g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myIdCard"},[a("x-header",{staticClass:"vux-1px-b",attrs:{"left-options":{backText:""}}},[e._v("我的身份证")]),e._v(" "),a("divider",{staticStyle:{"font-size":"16px"}},[e._v("身份证正面")]),e._v(" "),a("div",{staticClass:"card-box"},[a("div",{staticClass:"show"},[a("div",{staticClass:"picture",style:"backgroundImage:url("+e.headerImage+")"})]),e._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("input",{staticClass:"add-btn",attrs:{type:"file",id:"upload",accept:"image"},on:{change:e.upload}}),e._v(" "),a("label",{attrs:{for:"upload"}})])]),e._v(" "),a("divider",{staticStyle:{"font-size":"16px"}},[e._v("身份证反面")]),e._v(" "),a("div",{staticClass:"card-box"},[a("div",{staticClass:"show"},[a("div",{staticClass:"picture",style:"backgroundImage:url("+e.headerImage2+")"})]),e._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("input",{staticClass:"add-btn",attrs:{type:"file",id:"upload2",accept:"image"},on:{change:e.upload2}}),e._v(" "),a("label",{attrs:{for:"upload2"}})])]),e._v(" "),1!=e.userInfo.isAuditIdCard?a("x-button",{staticClass:"saveBtn",attrs:{type:"primary","action-type":"button"},nativeOn:{click:function(t){e.savePic()}}},[e._v("保存")]):e._e()],1)},staticRenderFns:[]};var h=a("VU/8")(f,g,!1,function(e){a("PK3y")},"data-v-03741f40",null);t.default=h.exports},J6mD:function(e,t,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__bd"},[a("div",{staticClass:"weui-uploader"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}],staticClass:"weui-uploader__hd"},[a("p",{staticClass:"weui-uploader__title"},[e._v(" "+e._s(e.title)+" ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showHeader&&e.showTip,expression:"showHeader && showTip"}],staticClass:"weui-uploader__info"},[e._v("\n          "+e._s(e.images.length)+" / "+e._s(e.max)+"\n        ")])]),e._v(" "),a("div",{staticClass:"weui-uploader__bd",class:{small:"small"===e.size}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.readonly&&e.images.length>0,expression:"!readonly && images.length > 0"}],staticClass:"weui-uploader__input-box remove",on:{click:e.remove}}),e._v(" "),a("ul",{staticClass:"weui-uploader__files"},e._l(e.images,function(t){return a("uploader-item",{key:t.url,attrs:{"background-image":t.url},nativeOn:{click:function(a){e.preview(t)}}})})),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.readonly&&e.images.length<e.max,expression:"!readonly && images.length < max"}],staticClass:"weui-uploader__input-box",on:{click:e.add}},[e.handleClick?e._e():a("input",{ref:"input",staticClass:"weui-uploader__input",attrs:{type:"file",accept:"image/*",capture:e.showCapture},on:{change:e.change}})])])])])])},staticRenderFns:[]};t.a=n},PK3y:function(e,t){},Sm9n:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{backgroundImage:{type:String,default:""}},computed:{style:function(){return{backgroundImage:"url("+this.backgroundImage+")"}}}}},TCm4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{backgroundImage:{type:String,default:""}},computed:{style:function(){return{backgroundImage:"url("+this.backgroundImage+")"}}}}},aEZN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Sm9n");a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var r=a("TCm4"),o=a.n(r),s=a("n/6f"),l=a("VU/8")(o.a,s.a,!1,null,null,null);t.default=l.exports},jd6m:function(e,t){},"n/6f":function(e,t,a){"use strict";var n={render:function(){var e=this.$createElement;return(this._self._c||e)("li",{staticClass:"weui-uploader__file",style:this.style})},staticRenderFns:[]};t.a=n},oSSf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a("aEZN")),i=r(a("mtWM"));function r(e){return e&&e.__esModule?e:{default:e}}t.default={props:{images:{type:Array,default:function(){return[]}},max:{type:Number,default:1},showHeader:{type:Boolean,default:!0},showTip:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},title:{type:String,default:"图片上传"},handleClick:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},uploadUrl:{type:String,default:""},size:{type:String,default:"normal"},capture:{type:String,default:""},name:{type:String,default:"img"},params:{type:Object,default:null}},components:{UploaderItem:n.default},methods:{add:function(){this.handleClick&&this.$emit("add-image")},remove:function(){this.handleClick?this.$emit("remove-image"):this.images.shift()},preview:function(e){this.$emit("preview",e)},change:function(){var e=this;if(!this.handleClick){var t=new window.FormData;if(t.append(this.name,this.$refs.input.files[0]),this.params)for(var a in this.params)t.append(a,this.params[a]);this.autoUpload?(this.uploadUrl||console.error("uploadUrl不应为空"),this.$vux&&this.$vux.loading&&this.$vux.loading.show("正在上传"),i.default.post(this.uploadUrl,t).then(function(t){e.$vux&&e.$vux.loading&&e.$vux.loading.hide(),e.$refs.input.value="",e.images.push(t.data.data)})):this.$emit("upload-image",t)}}},computed:{showCapture:function(){return this.capture||void 0}}}},sbrb:function(e,t,a){var i;(function(){var a=!1,r=function(e){return e instanceof r?e:this instanceof r?void(this.EXIFwrapped=e):new r(e)};void 0!==e&&e.exports&&(t=e.exports=r),t.EXIF=r;var o=r.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},s=r.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},l=r.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},u=r.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},d=r.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function c(e){return!!e.exifdata}function f(e,t){function n(n){var i=g(n);e.exifdata=i||{};var o=function(e){var t=new DataView(e);a&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return a&&console.log("Not a valid JPEG"),!1;var n=2,i=e.byteLength,r=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};for(;n<i;){if(r(t,n)){var o=t.getUint8(n+7);o%2!=0&&(o+=1),0===o&&(o=4);var s=n+8+o,l=t.getUint16(n+6+o);return p(e,s,l)}n++}}(n);if(e.iptcdata=o||{},r.isXmpEnabled){var s=function(e){if(!("DOMParser"in self))return;var t=new DataView(e);a&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return a&&console.log("Not a valid JPEG"),!1;var n=2,i=e.byteLength,r=new DOMParser;for(;n<i-4;){if("http"==y(t,n,4)){var o=n-1,s=t.getUint16(n-2)-1,l=y(t,o,s),u=l.indexOf("xmpmeta>")+8,d=(l=l.substring(l.indexOf("<x:xmpmeta"),u)).indexOf("x:xmpmeta")+10;l=l.slice(0,d)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+l.slice(d);var c=r.parseFromString(l,"text/xml");return C(c)}n++}}(n);e.xmpdata=s||{}}t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src))n(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var a=atob(e),n=a.length,i=new ArrayBuffer(n),r=new Uint8Array(i),o=0;o<n;o++)r[o]=a.charCodeAt(o);return i}(e.src));else if(/^blob\:/i.test(e.src)){(o=new FileReader).onload=function(e){n(e.target.result)},function(e,t){var a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="blob",a.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},a.send()}(e.src,function(e){o.readAsArrayBuffer(e)})}else{var i=new XMLHttpRequest;i.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(i.response),i=null},i.open("GET",e.src,!0),i.responseType="arraybuffer",i.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var o;(o=new FileReader).onload=function(e){a&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},o.readAsArrayBuffer(e)}}function g(e){var t=new DataView(e);if(a&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return a&&console.log("Not a valid JPEG"),!1;for(var n,i=2,r=e.byteLength;i<r;){if(255!=t.getUint8(i))return a&&console.log("Not a valid marker at offset "+i+", found: "+t.getUint8(i)),!1;if(n=t.getUint8(i+1),a&&console.log(n),225==n)return a&&console.log("Found 0xFFE1 marker"),w(t,i+4,t.getUint16(i+2));i+=2+t.getUint16(i+2)}}var h={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function p(e,t,a){for(var n,i,r,o,s=new DataView(e),l={},u=t;u<t+a;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(o=s.getUint8(u+2))in h&&((r=s.getInt16(u+3))+5,i=h[o],n=y(s,u+5,r),l.hasOwnProperty(i)?l[i]instanceof Array?l[i].push(n):l[i]=[l[i],n]:l[i]=n),u++;return l}function m(e,t,n,i,r){var o,s,l,u=e.getUint16(n,!r),d={};for(l=0;l<u;l++)o=n+12*l+2,!(s=i[e.getUint16(o,!r)])&&a&&console.log("Unknown tag: "+e.getUint16(o,!r)),d[s]=v(e,o,t,n,r);return d}function v(e,t,a,n,i){var r,o,s,l,u,d,c=e.getUint16(t+2,!i),f=e.getUint32(t+4,!i),g=e.getUint32(t+8,!i)+a;switch(c){case 1:case 7:if(1==f)return e.getUint8(t+8,!i);for(r=f>4?g:t+8,o=[],l=0;l<f;l++)o[l]=e.getUint8(r+l);return o;case 2:return y(e,r=f>4?g:t+8,f-1);case 3:if(1==f)return e.getUint16(t+8,!i);for(r=f>2?g:t+8,o=[],l=0;l<f;l++)o[l]=e.getUint16(r+2*l,!i);return o;case 4:if(1==f)return e.getUint32(t+8,!i);for(o=[],l=0;l<f;l++)o[l]=e.getUint32(g+4*l,!i);return o;case 5:if(1==f)return u=e.getUint32(g,!i),d=e.getUint32(g+4,!i),(s=new Number(u/d)).numerator=u,s.denominator=d,s;for(o=[],l=0;l<f;l++)u=e.getUint32(g+8*l,!i),d=e.getUint32(g+4+8*l,!i),o[l]=new Number(u/d),o[l].numerator=u,o[l].denominator=d;return o;case 9:if(1==f)return e.getInt32(t+8,!i);for(o=[],l=0;l<f;l++)o[l]=e.getInt32(g+4*l,!i);return o;case 10:if(1==f)return e.getInt32(g,!i)/e.getInt32(g+4,!i);for(o=[],l=0;l<f;l++)o[l]=e.getInt32(g+8*l,!i)/e.getInt32(g+4+8*l,!i);return o}}function y(e,t,a){var i="";for(n=t;n<t+a;n++)i+=String.fromCharCode(e.getUint8(n));return i}function w(e,t){if("Exif"!=y(e,t,4))return a&&console.log("Not valid EXIF data! "+y(e,t,4)),!1;var n,i,r,c,f,g=t+6;if(18761==e.getUint16(g))n=!1;else{if(19789!=e.getUint16(g))return a&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(g+2,!n))return a&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var h=e.getUint32(g+4,!n);if(h<8)return a&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(g+4,!n)),!1;if((i=m(e,g,g+h,s,n)).ExifIFDPointer)for(r in c=m(e,g,g+i.ExifIFDPointer,o,n)){switch(r){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":c[r]=d[r][c[r]];break;case"ExifVersion":case"FlashpixVersion":c[r]=String.fromCharCode(c[r][0],c[r][1],c[r][2],c[r][3]);break;case"ComponentsConfiguration":c[r]=d.Components[c[r][0]]+d.Components[c[r][1]]+d.Components[c[r][2]]+d.Components[c[r][3]]}i[r]=c[r]}if(i.GPSInfoIFDPointer)for(r in f=m(e,g,g+i.GPSInfoIFDPointer,l,n)){switch(r){case"GPSVersionID":f[r]=f[r][0]+"."+f[r][1]+"."+f[r][2]+"."+f[r][3]}i[r]=f[r]}return i.thumbnail=function(e,t,a,n){var i=function(e,t,a){var n=e.getUint16(t,!a);return e.getUint32(t+2+12*n,!a)}(e,t+a,n);if(!i)return{};if(i>e.byteLength)return{};var r=m(e,t,t+i,u,n);if(r.Compression)switch(r.Compression){case 6:if(r.JpegIFOffset&&r.JpegIFByteCount){var o=t+r.JpegIFOffset,s=r.JpegIFByteCount;r.blob=new Blob([new Uint8Array(e.buffer,o,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",r.Compression)}else 2==r.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return r}(e,g,h,n),i}function S(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var a=0;a<e.attributes.length;a++){var n=e.attributes.item(a);t["@attributes"][n.nodeName]=n.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var i=0;i<e.childNodes.length;i++){var r=e.childNodes.item(i),o=r.nodeName;if(null==t[o])t[o]=S(r);else{if(null==t[o].push){var s=t[o];t[o]=[],t[o].push(s)}t[o].push(S(r))}}return t}function C(e){try{var t={};if(e.children.length>0)for(var a=0;a<e.children.length;a++){var n=e.children.item(a),i=n.attributes;for(var r in i){var o=i[r],s=o.nodeName,l=o.nodeValue;void 0!==s&&(t[s]=l)}var u=n.nodeName;if(void 0===t[u])t[u]=S(n);else{if(void 0===t[u].push){var d=t[u];t[u]=[],t[u].push(d)}t[u].push(S(n))}}else t=e.textContent;return t}catch(e){console.log(e.message)}}r.enableXmp=function(){r.isXmpEnabled=!0},r.disableXmp=function(){r.isXmpEnabled=!1},r.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(c(e)?t&&t.call(e):f(e,t),!0)},r.getTag=function(e,t){if(c(e))return e.exifdata[t]},r.getIptcTag=function(e,t){if(c(e))return e.iptcdata[t]},r.getAllTags=function(e){if(!c(e))return{};var t,a=e.exifdata,n={};for(t in a)a.hasOwnProperty(t)&&(n[t]=a[t]);return n},r.getAllIptcTags=function(e){if(!c(e))return{};var t,a=e.iptcdata,n={};for(t in a)a.hasOwnProperty(t)&&(n[t]=a[t]);return n},r.pretty=function(e){if(!c(e))return"";var t,a=e.exifdata,n="";for(t in a)a.hasOwnProperty(t)&&("object"==typeof a[t]?a[t]instanceof Number?n+=t+" : "+a[t]+" ["+a[t].numerator+"/"+a[t].denominator+"]\r\n":n+=t+" : ["+a[t].length+" values]\r\n":n+=t+" : "+a[t]+"\r\n");return n},r.readFromBinaryFile=function(e){return g(e)},void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}).call(this)},wLrF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a("aEZN")),i=r(a("mtWM"));function r(e){return e&&e.__esModule?e:{default:e}}t.default={props:{images:{type:Array,default:function(){return[]}},max:{type:Number,default:1},showHeader:{type:Boolean,default:!0},showTip:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},title:{type:String,default:"图片上传"},handleClick:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},uploadUrl:{type:String,default:""},size:{type:String,default:"normal"},capture:{type:String,default:""},name:{type:String,default:"img"},params:{type:Object,default:null}},components:{UploaderItem:n.default},methods:{add:function(){this.handleClick&&this.$emit("add-image")},remove:function(){this.handleClick?this.$emit("remove-image"):this.images.shift()},preview:function(e){this.$emit("preview",e)},change:function(){var e=this;if(!this.handleClick){var t=new window.FormData;if(t.append(this.name,this.$refs.input.files[0]),this.params)for(var a in this.params)t.append(a,this.params[a]);this.autoUpload?(this.uploadUrl||console.error("uploadUrl不应为空"),this.$vux&&this.$vux.loading&&this.$vux.loading.show("正在上传"),i.default.post(this.uploadUrl,t).then(function(t){e.$vux&&e.$vux.loading&&e.$vux.loading.hide(),e.$refs.input.value="",e.images.push(t.data.data)})):this.$emit("upload-image",t)}}},computed:{showCapture:function(){return this.capture||void 0}}}}});
//# sourceMappingURL=6.8d7a0d7b6b4f0febc623.js.map