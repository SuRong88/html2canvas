(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1db49431"],{"00ca":function(e,t){!function(t,n){e.exports=n(t)}(window,(function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(n),(function(e){s(t,e,i)})):l(t,i)}function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){i&&i.trigger&&i.trigger(e),s(t,e,n)})):l(t,i||n)}function o(e){return e=e||{},e.appId=E.appId,e.verifyAppId=E.appId,e.verifySignType="sha1",e.verifyTimestamp=E.timestamp+"",e.verifyNonceStr=E.nonceStr,e.verifySignature=E.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=c(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",E.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function c(e,t){var n=e,i=v[n];i&&(n=i);var o="ok";if(t){var a=t.indexOf(":");"confirm"==(o=t.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n+":"+o}function d(e){if(e){for(var t=0,n=e.length;t<n;++t){var i=e[t],o=h[i];o&&(e[t]=o)}return e}}function l(e,t){if(!(!E.debug||t&&t.isInnerInvoke)){var n=v[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(S||y||E.debug||T<"6.0.2"||_.systemType<0)){var t=new Image;_.appId=E.appId,_.initTime=C.initEndTime-C.initStartTime,_.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,D.getNetworkType({isInnerInvoke:!0,success:function(e){_.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+_.version+"&o="+_.isPreVerifyOk+"&s="+_.systemType+"&c="+_.clientVersion+"&a="+_.appId+"&n="+_.networkType+"&i="+_.initTime+"&p="+_.preVerifyTime+"&u="+_.url;t.src=n}})}}function p(){return(new Date).getTime()}function f(t){k&&(e.WeixinJSBridge?t():w.addEventListener&&w.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){D.invoke||(D.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(n),i)},D.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}function g(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),w=e.document,I=w.title,A=navigator.userAgent.toLowerCase(),b=navigator.platform.toLowerCase(),S=!(!b.match("mac")&&!b.match("win")),y=-1!=A.indexOf("wxdebugger"),k=-1!=A.indexOf("micromessenger"),M=-1!=A.indexOf("android"),x=-1!=A.indexOf("iphone")||-1!=A.indexOf("ipad"),T=function(){var e=A.match(/micromessenger\/(\d+\.\d+\.\d+)/)||A.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),C={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},_={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:M?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},E={},R={_completes:[]},B={state:0,data:{}};f((function(){C.initEndTime=p()}));var U=!1,V=[],D={config:function(e){E=e,l("config",e);var t=!1!==E.check;f((function(){if(t)n(h.config,{verifyJsApiList:d(E.jsApiList)},function(){R._complete=function(e){C.preVerifyEndTime=p(),B.state=1,B.data=e},R.success=function(e){_.isPreVerifyOk=0},R.fail=function(e){R._fail?R._fail(e):B.state=-1};var e=R._completes;return e.push((function(){u()})),R.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();R._completes=[]},R}()),C.preVerifyStartTime=p();else{B.state=1;for(var e=R._completes,i=0,o=e.length;i<o;++i)e[i]();R._completes=[]}})),m()},ready:function(e){0!=B.state?e():(R._completes.push(e),!k&&E.debug&&e())},error:function(e){T<"6.0.2"||(-1==B.state?e(B.data):R._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var i=v[n];i&&(t[i]=t[n],delete t[n])}return e};n("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(M){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e))},onMenuShareTimeline:function(e){i(h.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||I,desc:e.title||I,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(h.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?n("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):n("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(h.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(h.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(h.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){n("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){n("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(M){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){n(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===U?(U=!0,n("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(U=!1,V.length>0){var t=V.shift();wx.getLocalImgData(t)}},e))):V.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),o=t.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};n("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){n("closeWindow",{},e=e||{})},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){n("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(x){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){n(h.openAddress,{},(e._complete=function(e){e=r(e)},e))},openProductSpecificView:function(e){n(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],o=0,a=t.length;o<a;++o){var r=t[o],s={card_id:r.cardId,card_ext:r.cardExt};i.push(s)}n(h.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){n("chooseCard",{app_id:E.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,i=[],o=0,a=t.length;o<a;++o){var r=t[o],s={card_id:r.cardId,code:r.code};i.push(s)}n(h.openCard,{card_list:i},e)},consumeAndShareCard:function(e){n(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(h.chooseWXPay,a(e),e)},openEnterpriseRedPacket:function(e){n(h.openEnterpriseRedPacket,a(e),e)},startSearchBeacons:function(e){n(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(h.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){n("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},f((function(){n("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){f((function(){n("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){f((function(){n("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){f((function(){n("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){f((function(){n("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){f((function(){n("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){f((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},O=1,N={};return w.addEventListener("error",(function(e){if(!M){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=O++,t["wx-id"]=o),N[o])return;N[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}))}}}),!0),w.addEventListener("load",(function(e){if(!M){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(N[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=D),D}}))},"0d15":function(e,t,n){var i=n("b049"),o=n("490a").f,a=Function.prototype,r=a.toString,s=/^\s*function ([^ (]*)/,c="name";!i||c in a||o(a,c,{configurable:!0,get:function(){try{return r.call(this).match(s)[1]}catch(e){return""}}})},1491:function(e,t,n){e.exports=n.p+"img/03.a9acd04e.jpg"},"1d55":function(e,t,n){e.exports=n.p+"img/07.63e44187.jpg"},"1e4b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"index"},[e._m(0),i("div",{staticClass:"index_bd"},[i("swiper",{ref:"mySwiper",staticClass:"swiper-container index_swiper",attrs:{options:e.swiperOption}},e._l(e.slideLists,(function(t){return i("swiper-slide",[i("div",{staticClass:"img-box"},[i("img",{staticClass:"img",attrs:{src:t.src,alt:""}})]),i("div",{staticClass:"txt-box"},[i("div",{staticClass:"date-box"},[i("img",{staticClass:"date-icon",attrs:{src:n("c195"),alt:""}}),i("span",{staticClass:"date"},[e._v(e._s(t.date))])]),i("div",{staticClass:"desc"},[e._v(e._s(t.desc))])])])})),1),i("div",{ref:"swiperP",staticClass:"swiper-pagination",attrs:{id:"swiperP"}})],1),i("div",{staticClass:"index_ft"},[i("span",{staticClass:"index_btn",on:{click:function(t){return e.showHandle(1)}}},[e._v("我要承诺")]),i("span",{staticClass:"index_btn",on:{click:function(t){return e.showHandle(2)}}},[e._v("我的足迹")])]),i("v-mask",{attrs:{show:e.show&&1==e.type},on:{closeHandle:e.hideHandle}},[i("div",{staticClass:"box",attrs:{slot:"box"},slot:"box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input",attrs:{placeholder:"输入名字生成专属承诺书",type:"text"},domProps:{value:e.name},on:{blur:e.blurHandle,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirmHandle1(t)},input:function(t){t.target.composing||(e.name=t.target.value)}}})]),i("button",{staticClass:"btn letter-sp",attrs:{slot:"button"},on:{click:e.confirmHandle1},slot:"button"},[e._v("确定")])]),i("v-mask",{attrs:{show:e.show&&2==e.type},on:{closeHandle:e.hideHandle}},[i("div",{staticClass:"box",attrs:{slot:"box"},slot:"box"},[e.exit?i("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"input",attrs:{placeholder:"请输入你的手机号码",type:"text"},domProps:{value:e.phone},on:{blur:e.blurHandle,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirmHandle2(t)},input:function(t){t.target.composing||(e.phone=t.target.value)}}}):i("p",{staticClass:"not-exit"},[e._v(" 非常抱歉，您输入的手机号码暂无志愿服 务登记记录，如有疑问， 请联系真美系统志愿者联合会微信： "),i("span",{staticClass:"phone"},[e._v("18819210049")])])]),e.exit?i("button",{staticClass:"btn letter-sp",attrs:{slot:"button"},on:{click:e.confirmHandle2},slot:"button"},[e._v("确定")]):i("button",{staticClass:"btn",attrs:{slot:"button"},on:{click:e.hideHandle},slot:"button"},[e._v("返回首页")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.warning,expression:"warning"}],staticClass:"warning-mask"},[i("div",{staticClass:"content"},[i("div",{staticClass:"warning-txt"},[e._v(e._s(e.text))]),i("div",{staticClass:"warning-btn",on:{click:function(t){e.warning=!1}}},[e._v("知道了")])])])],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index_hd"},[n("h1",{staticClass:"title"},[e._v(" 真美系统志愿者联合会 "),n("br"),e._v(" 公益历程 ")])])}],a=(n("87b8"),n("0d15"),n("6004"),n("f95f"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mask"},[i("div",{staticClass:"content"},[i("img",{staticClass:"close-icon",attrs:{src:n("8ea7"),alt:""},on:{click:e.hideMask}}),e._m(0),e._t("box"),e._t("button")],2)])}),r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"title"},[n("span",[e._v("真美系统志愿者联合会")]),n("span",[e._v("与爱同行")])])}],s={name:"vMask",components:{},created:function(){},mounted:function(){},props:{show:Boolean},data:function(){return{}},computed:{},watch:{},methods:{hideMask:function(){console.log("s"),this.$emit("closeHandle")}}},c=s,d=n("5511"),l=Object(d["a"])(c,a,r,!1,null,null,null),u=l.exports,p=n("d3ec"),f={components:{vMask:u},created:function(){this.shareHandle()},mounted:function(){},data:function(){return{warning:!1,text:"",show:!1,type:0,name:"",phone:"",exit:!0,currentIndex:0,slideLists:[{src:n("261b"),date:"2016年1月",desc:"真美系统志愿者联合会正式成立，至今已有注册志愿者3143人，累计开展公益活动1260场次，参与志愿服务志愿者10956人次，登记志愿服务总时长73250小时，真美系统志愿者公益足迹遍布全国所有省份。\n\t\t\t\t\t"},{src:n("bd3c"),date:"2016-2019年",desc:"\n\t\t\t\t\t真美系统志愿者联合会共组织志愿者探访260位家基金受助人，为这些处于困境中的家庭送去亲人般的温暖和关怀。\n\t\t\t\t\t"},{src:n("1491"),date:"2018年12月",desc:"\n\t\t\t\t\t真美系统志愿者联合会开展“点滴爱、暖世界”主题的首届公益月活动，吸引全国各地16508位爱心人士参与组织578场公益活动，在全国形起一片爱的汪洋。\n\t\t\t\t\t"},{src:n("593d"),date:"2019年1月",desc:"\n\t\t\t\t\t真美系统志愿者联合会首届志愿之星诞生，分别为志愿者林月娇、宋磊、郑碧惠、谢馨卉、邹凤珠、谭茹丹、潘丽芳、于嘉辉、何春玉、周雪平、张芳、陈华文、童艳霞、王小波、后来、陈泓宇、后雪松、李丹、王丹丹，她们为志愿服务事业无私贡献了无数宝贵的时间、精力和技能，是我们学习的榜样。\n\t\t\t\t\t"},{src:n("4d1d"),date:"2019年5月",desc:"\n\t\t\t\t\t真美系统志愿者联合会开展“爱己，及人”主题的第二届公益月活动，在全国范围内开展123场乳腺健康讲座，普及乳腺健康知识，引导社会公众关爱女性健康。\n\t\t\t\t\t"},{src:n("677a"),date:"2019年10月",desc:"\n\t\t\t\t\t真美系统志愿者联合会发起重阳节“生活美好，陪您到老”大型敬老活动，在全国31座城市，组织开展37场重阳敬老活动，助力养老事业发展，献礼祖国70周岁生日。\n\t\t\t\t\t"},{src:n("1d55"),date:"未来",desc:"\n\t\t\t\t\t爱心不停，公益不止！未来，真美系统志愿者联合会将号召更多的爱心人士和志愿者参与志愿服务事业，携手为创建更加和谐美好的社会贡献力量。公益路上，我在，希望你也在！\n\t\t\t\t\t"}],swiperOption:{loop:!0,speed:900,notNextTick:!0,autoplay:!1,preloadImages:!1,pagination:{el:"#swiperP",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},watch:{},methods:{shareHandle:function(){this.$post("http://19tp5.mrxdtech.com/api/wx/sdk",{url:window.location.href}).then((function(e){Object(p["a"])(e)}))},blurHandle:function(){var e="",t=1;setTimeout((function(){e=document.documentElement.scrollTop||document.body.scrollTop,e-=t,window.scrollTo(0,e),e+=t,window.scrollTo(0,e)}),100)},confirmHandle1:function(){if(this.nullTest(this.name))return this.text="名字不能为空",this.warning=!0,!1;this.$router.replace({path:"/promise",query:{name:this.name}})},confirmHandle2:function(){var e=this;if(this.nullTest(this.phone))return this.text="手机号码不能为空",this.warning=!0,!1;if(!this.phoneTest(this.phone))return this.text="手机号码格式有误",this.warning=!0,!1;var t=window.data.find((function(t){return e.phone==t.tel&&(e.$router.replace({path:"/experience",query:{user:JSON.stringify(t)}}),!0)}));this.exit=!!t},showHandle:function(e){this.type=e,this.show=!0},hideHandle:function(){this.type=0,this.show=!1,this.type=0,this.name="",this.phone="",this.exit=!0}}},m=f,g=Object(d["a"])(m,i,o,!1,null,null,null);t["default"]=g.exports},"261b":function(e,t,n){e.exports=n.p+"img/01.142faada.jpg"},3123:function(e,t,n){var i=n("dbb8");e.exports=Array.isArray||function(e){return"Array"==i(e)}},"31b2":function(e,t,n){var i=n("5823"),o=n("260f"),a=n("7243"),r=n("af3a"),s=n("d88a"),c=[].push,d=function(e){var t=1==e,n=2==e,d=3==e,l=4==e,u=6==e,p=5==e||u;return function(f,m,g,h){for(var v,w,I=a(f),A=o(I),b=i(m,g,3),S=r(A.length),y=0,k=h||s,M=t?k(f,S):n?k(f,0):void 0;S>y;y++)if((p||y in A)&&(v=A[y],w=b(v,y,I),e))if(t)M[y]=w;else if(w)switch(e){case 3:return!0;case 5:return v;case 6:return y;case 2:c.call(M,v)}else if(l)return!1;return u?-1:d||l?l:M}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},"4d1d":function(e,t,n){e.exports=n.p+"img/05.b3a574b9.jpg"},"593d":function(e,t,n){e.exports=n.p+"img/04.14f69f43.jpg"},"677a":function(e,t,n){e.exports=n.p+"img/06.4bc2c19b.jpg"},"87b8":function(e,t,n){"use strict";var i=n("0e6f"),o=n("31b2").find,a=n("8276"),r="find",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a(r)},"8ea7":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMUZBMjhBMDVFRjExRUFBNTFCRjFFODY0QzhGMkU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFMUZBMjhCMDVFRjExRUFBNTFCRjFFODY0QzhGMkU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUxRkEyODgwNUVGMTFFQUE1MUJGMUU4NjRDOEYyRTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUxRkEyODkwNUVGMTFFQUE1MUJGMUU4NjRDOEYyRTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz440h0cAAABUklEQVR42uyZQQqDMBBFNfQQ9QT1GvYYbly3F2q3Ltpj2B7DnsBjpBFSEKlokv9jpROYhSDMe0EmP5hqrZMtL5VsfImACIjAxtdu7oW6rleHrKpKPqGDqcZUFoFpb3vlSIGrqSKCRA//sL0uSIHS1MvuCkviA5/bXiVSoLO7wpIYwxe2J3SMsiS84X2m0EeiBUkEwfuO0b7BESARDB9yDoRKQOBDDzJfCRg84iR2lYDCo6LEUgk4PDILzUlkDHh0mJuSyAbZBgq/KE57SjQDiYQFzxD4JpGw4Jn3AT3z/NMC42lDTbGKDF+QUyxUYGrOU6O4IsPT7xMqAjwrikMEXOMBKopDBHyzDVRCRYaHS6gV4KESaiV4mISLACsSB0koB3haJA6RWCpwY0biCYk7UuBs6kmEH0v0vU7I+0Br4WOszqVXKv+JRUAEREAE/lrgLcAAOyOqiFTgtv8AAAAASUVORK5CYII="},bd3c:function(e,t,n){e.exports=n.p+"img/02.2776fdfc.jpg"},c195:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFFQUQ1RDJGMDVGNDExRUE4NEQ1QTE3QUM5RTE4Mjk4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFFQUQ1RDMwMDVGNDExRUE4NEQ1QTE3QUM5RTE4Mjk4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUVBRDVEMkQwNUY0MTFFQTg0RDVBMTdBQzlFMTgyOTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUVBRDVEMkUwNUY0MTFFQTg0RDVBMTdBQzlFMTgyOTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6c9qKNAAAAy0lEQVR42uxXUQrCMAxtxCP4scpO5DX0WHo72YQdInbYj1LSroFpg7wH+diSLK/pW0ppcXZwYnYHZwzHhhjOnklZQ5VvrkMpoUuwKa6IG1des9b8Kdb+tC8R9erwQmtLLd8qqsmfg51zUfss0ScfSE2KlVDLHwqxVQ3dg43C+yH6tlDLfxTbupT/hl+DTM4hEAIhELJw2pPy9Nb6sWX/ryH+sh9bhjmEOQQNYQ6B0F6E5o48XhKhW7BnJzJX6ebaHevNlZjZlIbeAgwAT+46ZcwB0qQAAAAASUVORK5CYII="},d3ec:function(e,t,n){"use strict";var i=n("00ca"),o=n.n(i);t["a"]=function(e){o.a.config({debug:!1,appId:e.data.appId,timestamp:e.data.timestamp,nonceStr:e.data.nonceStr,signature:e.data.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","updateAppMessageShareData","updateTimelineShareData"]}),o.a.ready((function(){var e="请查收你的专属公益历程，一起为爱承诺",t="点击查看你的专属公益历程，并为爱发起承诺，共同传递爱的接力棒",n=window.location.origin+"/index",i=window.location.origin+"/img/share.png";o.a.onMenuShareTimeline({title:e,link:n,imgUrl:i,success:function(){}}),o.a.updateTimelineShareData({title:e,link:n,imgUrl:i,success:function(){}}),o.a.onMenuShareAppMessage({title:e,desc:t,link:n,imgUrl:i,success:function(){}}),o.a.updateAppMessageShareData({title:e,desc:t,link:n,imgUrl:i,success:function(){}})}))}},d88a:function(e,t,n){var i=n("243e"),o=n("3123"),a=n("690c"),r=a("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[r],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}}}]);