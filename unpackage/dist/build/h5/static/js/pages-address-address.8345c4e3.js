(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{1136:function(e,t,a){"use strict";a.r(t);var i=a("32f3"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"15ef":function(e,t,a){"use strict";var i=a("cb81"),n=a.n(i);n.a},"2f5c":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-975555e6]{padding-bottom:%?120?%}.content[data-v-975555e6]{position:relative}.list[data-v-975555e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.wrapper[data-v-975555e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box[data-v-975555e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-box .tag[data-v-975555e6]{font-size:%?24?%;color:#fa436a;margin-right:%?10?%;background:#fffafb;border:1px solid #ffb4c7;border-radius:%?4?%;padding:%?4?% %?10?%;line-height:1}.address-box .address[data-v-975555e6]{font-size:%?30?%;color:#303133}.u-box[data-v-975555e6]{font-size:%?28?%;color:#909399;margin-top:%?16?%}.u-box .name[data-v-975555e6]{margin-right:%?30?%}.icon-bianji[data-v-975555e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?40?%;color:#909399;padding-left:%?30?%}.add-btn[data-v-975555e6]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}',""]),e.exports=t},"32f3":function(e,t,a){"use strict";(function(e){a("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{source:0,addressList:[{name:"刘晓晓",mobile:"18666666666",addressName:"贵族皇仕牛排(东城店)",address:"北京市东城区",area:"B区",default:!0},{name:"刘大大",mobile:"18667766666",addressName:"龙回1区12号楼",address:"山东省济南市历城区",area:"西单元302",default:!1}]}},onLoad:function(t){e("log",t.source," at pages/address/address.vue:49"),this.source=t.source},methods:{checkAddress:function(e){1==this.source&&(this.$api.prePage().addressData=e,uni.navigateBack())},addAddress:function(e,t){uni.navigateTo({url:"/pages/address/addressManage?type=".concat(e,"&data=").concat(JSON.stringify(t))})},refreshList:function(t,a){this.addressList.unshift(t),e("log",t,a," at pages/address/address.vue:71")}}};t.default=i}).call(this,a("0de9")["log"])},"58a7":function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content b-t"},[e._l(e.addressList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"list b-b",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.checkAddress(t)}}},[a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"address-box"},[t.default?a("v-uni-text",{staticClass:"tag"},[e._v("默认")]):e._e(),a("v-uni-text",{staticClass:"address"},[e._v(e._s(t.addressName)+" "+e._s(t.area))])],1),a("v-uni-view",{staticClass:"u-box"},[a("v-uni-text",{staticClass:"name"},[e._v(e._s(t.name))]),a("v-uni-text",{staticClass:"mobile"},[e._v(e._s(t.mobile))])],1)],1),a("v-uni-text",{staticClass:"yticon icon-bianji",on:{click:function(a){a.stopPropagation(),arguments[0]=a=e.$handleEvent(a),e.addAddress("edit",t)}}})],1)})),a("v-uni-text",{staticStyle:{display:"block",padding:"16upx 30upx 10upx","lihe-height":"1.6",color:"#fa436a","font-size":"24upx"}},[e._v("重要：添加和修改地址回调仅增加了一条数据做演示，实际开发中将回调改为请求后端接口刷新一下列表即可")]),a("v-uni-button",{staticClass:"add-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addAddress("add")}}},[e._v("新增地址")])],2)},s=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}))},b812:function(e,t,a){"use strict";a.r(t);var i=a("58a7"),n=a("1136");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("15ef");var d,o=a("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"975555e6",null,!1,i["a"],d);t["default"]=r.exports},cb81:function(e,t,a){var i=a("2f5c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("68c4aa3a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);