<template>
	<div class="promise" id="capture">
		<img class="logo" src="../assets/images/logo-black.png?v=1.0.1" alt="" />
		<div class="txt-box">
			<h2 class="title">爱心承诺书</h2>
			<h3 class="sub-title">我承诺:</h3>
			<p class="txt">在未来一年内，至少参加1场公益活动，至少捐赠1元公益善款，从身边做起，尽己所能，帮助他人，服务社会，为建设团结互助、平等友爱的美好社会贡献力量！</p>
			<p class="name-box">
				<span class="name-label">爱心承诺人:</span>
				<span class="name">{{ name }}</span>
			</p>
			<div class="create-box" v-if="!qrcode">
				<button @click="createCanvas" type="button" class="btn-create">生成爱心承诺书</button>
				<a @click="backHome" class="back-box">
					<img class="back-icon" src="../assets/images/Home6.png" alt="" />
					<span class="back-txt">返回首页</span>
				</a>
			</div>
			<div v-else class="code-box">
				<img class="qrcode" src="../assets/images/qrcode.jpg" alt="" />
				<ul class="tips">
					<li>长按二维码</li>
					<li>生成您的专属爱心承诺书</li>
				</ul>
			</div>
		</div>
		<div id="canvas-mask" class="canvas-mask" v-show="create">
			<a @click="backHome" class="back-home"><span class="back-txt2">返回首页</span></a>
			<div class="bg1"></div>
			<div class="bg2"></div>
			<div class="canvas"><img class="img" :src="url" alt="" /></div>
			<span class="tip">长按保存图片</span>
		</div>
	</div>
</template>

<script>
import html2canvas from 'html2canvas';
import shareSuccess from 'js/WXShare.js';
export default {
	components: {
		html2canvas
	},
	created() {
		this.shareHandle();
		!this.$route.query.name ? this.$router.go(-1) : '';
		this.name = this.$route.query.name;
		this.qrcode = false;
		this.create = false;
		this.url = '';
	},
	mounted() {},
	data() {
		return {
			name: '',
			qrcode: false,
			create: false,
			url: ''
		};
	},
	computed: {},
	watch: {},
	methods: {
		// 微信分享
		shareHandle() {
			this.$post('http://19tp5.mrxdtech.com/api/wx/sdk', {
				url: window.location.href
			}).then(res => {
				shareSuccess(res);
			});
		},
		backHome(){
			this.$router.replace({
				path:'/index'
			})
		},
		// 百度统计
		baiDuCalculation(name){
			_hmt.push(['_trackEvent', 'promise', 'click', name]);
		},
		createCanvas() {
			this.qrcode = true;
			this.$nextTick(() => {
				var canvas2 = document.createElement('canvas');
				let tar = document.querySelector('.canvas');
				var w = parseInt(window.getComputedStyle(tar).width);
				var h = parseInt(window.getComputedStyle(tar).height);
				var context = canvas2.getContext('2d');
				canvas2.width = w * 2;
				canvas2.height = h * 2;
				canvas2.style.width = w + 'rem';
				canvas2.style.height = h + 'rem';
				context.scale(2, 2);
				html2canvas(document.querySelector('#capture'), {
					// canvas: canvas2
				}).then(canvas => {
					this.url = canvas.toDataURL('image/jpg');
					this.create = true;
					this.baiDuCalculation(this.name);
				});
			});
		}
	}
};
</script>

<style></style>
