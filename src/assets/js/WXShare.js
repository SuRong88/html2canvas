import wx from 'weixin-js-sdk';
export default function(res) {
	wx.config({
		debug: false, //开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: res.data.appId, // 必填，公众号的唯一标识
		timestamp: res.data.timestamp, // 必填，生成签名的时间戳
		nonceStr: res.data.nonceStr, //必填， 生成签名的随机串
		signature: res.data.signature, //必填，签名
		jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'updateAppMessageShareData', 'updateTimelineShareData'] //必填， JS接口列表，
	});
	wx.ready(function() {
		var title = '请查收你的专属公益历程，一起为爱承诺';
		var desc = '点击查看你的专属公益历程，并为爱发起承诺，共同传递爱的接力棒';
		var link = window.location.origin + '/index';
		var imgUrl = window.location.origin + '/img/share.png';

		wx.onMenuShareTimeline({
			title: title, // 分享标题
			link: link,
			imgUrl: imgUrl, // 分享图标
			success: function() {}
		});

		wx.updateTimelineShareData({
			title: title, // 分享标题
			link: link,
			imgUrl: imgUrl, // 分享图标
			success: function() {}
		});

		wx.onMenuShareAppMessage({
			title: title, // 分享标题
			desc: desc, // 分享描述
			link: link,
			imgUrl: imgUrl, // 分享图标
			success: function() {}
		});

		wx.updateAppMessageShareData({
			title: title, // 分享标题
			desc: desc, // 分享描述
			link: link,
			imgUrl: imgUrl, // 分享图标
			success: function() {}
		});
	});
}
