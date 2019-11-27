<template>
	<div class="experience" id="capture">
		<div class="hd-box">
			<img class="logo" src="../assets/images/logo.png?v=1.0.1" alt="" />
			<a v-show="back" @click="backHome" class="back-box">
				<img class="back-icon" src="../assets/images/Home-w.png" alt="" />
				<span class="back-txt">返回首页</span>
			</a>
		</div>
		<div class="bd-box">
			<h1 class="title">我的公益足迹</h1>
			<div class="content">
				<img class="top-img" :src="typeImgs[user.type - 1].path" alt="" />
				<ul class="info" v-if="user">
					<li>
						<span class="l">
							<img class="info-icon" src="../assets/images/info-icon1.png" alt="" />
							<span class="info-label">姓名</span>
						</span>
						<span class="r">{{ user.name }}</span>
					</li>
					<li v-if="user.register">
						<span class="l">
							<img class="info-icon" src="../assets/images/info-icon2.png" alt="" />
							<span class="info-label">注册时间</span>
						</span>
						<span class="r">
							{{user.register}}
							<!-- {{ user.register ? user.register : '暂无记录' }} -->
						</span>
					</li>
					<li>
						<span class="l">
							<img class="info-icon" src="../assets/images/info-icon3.png" alt="" />
							<span class="info-label">参加活动次数</span>
						</span>
						<span class="r">{{ user.times }}次</span>
					</li>
					<li>
						<span class="l">
							<img class="info-icon" src="../assets/images/info-icon4.png" alt="" />
							<span class="info-label">志愿服务时长</span>
						</span>
						<span class="r">{{ user.count }}小时</span>
					</li>
				</ul>
			</div>
		</div>
		<button @click="createCanvas" v-if="!qrcode" type="button" class="btn-create">点击生成我的历程卡</button>
		<div v-if="!create&&qrcode" class="code-box">
			<img class="qrcode" src="../assets/images/qrcode.jpg" alt="" />
			<ul class="tips">
				<li>长按二维码</li>
				<li>生成您的专属爱心承诺书</li>
			</ul>
		</div>
		<img class="bottom-bg" src="../assets/images/ren.png" alt="" />
		<div id="canvas-mask" class="canvas-mask" v-show="create">
			<div class="bg1"></div>
			<div class="bg2"></div>
			<div class="canvas"><img class="img" :src="url" alt="" /></div>
			<p class="back-home">
				<img class="home-icon" src="../assets/images/Home-w.png" alt="" />
				<span class="back-txt"></span>
			</p>
			<span class="tip">长按保存图片</span>
		</div>
	</div>
</template>

<script>
import html2canvas from 'html2canvas';
import shareSuccess from 'js/WXShare.js';
export default {
	created() {
		!this.$route.query.user ? this.$router.go(-1) : '';
		this.user = JSON.parse(this.$route.query.user);
		this.shareHandle();
	},
	mounted() {},
	data() {
		return {
			back: true,
			qrcode: false,
			create: false,
			url: '',
			user: null,
			typeImgs: [
				{
					path: require('../assets/images/type1.png')
				},
				{
					path: require('../assets/images/type2.png')
				},
				{
					path: require('../assets/images/type3.png')
				}
			]
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
		baiDuCalculation(phone){
			_hmt.push(['_trackEvent', 'experience', 'click', phone]);
		},
		createCanvas() {
			this.qrcode = true;
			this.back = false;
			this.$nextTick(() => {
				var canvas2 = document.createElement('canvas');
				let tar = document.querySelector('.canvas');
				var w = parseInt(window.getComputedStyle(tar).width);
				var h = parseInt(window.getComputedStyle(tar).height);
				var context = canvas2.getContext('2d');
				context.scale(2, 2);
				canvas2.width = w * 2;
				canvas2.height = h * 2;
				canvas2.style.width = w + 'rem';
				canvas2.style.height = h + 'rem';
				html2canvas(document.querySelector('#capture'), {
					// canvas: canvas2
				}).then(canvas => {
					this.url = canvas.toDataURL('image/jpg');
					this.create = true;
					this.back = true;
					this.baiDuCalculation(this.phone);
				});
			});
		}
	}
};
</script>

<style></style>
