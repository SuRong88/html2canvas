<template>
	<div class="index">
		<div class="index_hd">
			<h1 class="title">
				真美系统志愿者联合会
				<br />
				公益历程
			</h1>
		</div>
		<div class="index_bd">
			<swiper :options="swiperOption" ref="mySwiper" class="swiper-container index_swiper">
				<swiper-slide v-for="item in slideLists">
					<div class="img-box"><img class="img" :src="item.src" alt="" /></div>
					<div class="txt-box">
						<div class="date-box">
							<img class="date-icon" src="../assets/images/Calendar.png" alt="" />
							<span class="date">{{ item.date }}</span>
						</div>
						<div class="desc">{{ item.desc }}</div>
					</div>
				</swiper-slide>
			</swiper>
			<div id="swiperP" ref="swiperP" class="swiper-pagination"></div>
		</div>
		<div class="index_ft">
			<span class="index_btn" @click="showHandle(1)">我要承诺</span>
			<span class="index_btn" @click="showHandle(2)">我的足迹</span>
		</div>
		<v-mask :show="show && type == 1" @closeHandle="hideHandle">
			<div slot="box" class="box">
				<input @blur="blurHandle" @keyup.enter="confirmHandle1" placeholder="输入名字生成专属承诺书" v-model="name" type="text" class="input" />
			</div>
			<button slot="button" class="btn letter-sp" @click="confirmHandle1">确定</button>
		</v-mask>
		<v-mask :show="show && type == 2" @closeHandle="hideHandle">
			<div slot="box" class="box">
				<input v-if="exit" @blur="blurHandle" @keyup.enter="confirmHandle2" placeholder="请输入你的手机号码" v-model="phone" type="text" class="input" />
				<p v-else class="not-exit">
					非常抱歉，您输入的手机号码暂无志愿服 务登记记录，如有疑问， 请联系真美系统志愿者联合会微信：
					<span class="phone">18819210049</span>
				</p>
			</div>
			<button v-if="exit" slot="button" class="btn letter-sp" @click="confirmHandle2">确定</button>
			<button v-else slot="button" class="btn" @click="hideHandle">返回首页</button>
		</v-mask>
		<div v-show="warning" class="warning-mask">
			<div class="content">
				<div class="warning-txt">{{ text }}</div>
				<div @click="warning = false" class="warning-btn">知道了</div>
			</div>
		</div>
	</div>
</template>

<script>
import vMask from 'components/mask.vue';
import shareSuccess from 'js/WXShare.js';
export default {
	components: {
		vMask
	},
	created() {
		this.shareHandle();
	},
	mounted() {},
	data() {
		return {
			warning: false,
			text: '',
			show: false,
			// 模态框类型 1输入名字 2输入手机
			type: 0,
			name: '',
			phone: '',
			// 输入手机存在
			exit: true,
			currentIndex: 0,
			slideLists: [
				{
					src: require('images/01.jpg'),
					date: '2016年1月',
					desc: `真美系统志愿者联合会正式成立，至今已有注册志愿者3143人，累计开展公益活动1260场次，参与志愿服务志愿者10956人次，登记志愿服务总时长73250小时，真美系统志愿者公益足迹遍布全国所有省份。
					`
				},
				{
					src: require('images/02.jpg'),
					date: '2016-2019年',
					desc: `
					真美系统志愿者联合会共组织志愿者探访260位家基金受助人，为这些处于困境中的家庭送去亲人般的温暖和关怀。
					`
				},
				{
					src: require('images/03.jpg'),
					date: '2018年12月',
					desc: `
					真美系统志愿者联合会开展“点滴爱、暖世界”主题的首届公益月活动，吸引全国各地16508位爱心人士参与组织578场公益活动，在全国形起一片爱的汪洋。
					`
				},
				{
					src: require('images/04.jpg'),
					date: '2019年1月',
					desc: `
					真美系统志愿者联合会首届志愿之星诞生，分别为志愿者林月娇、宋磊、郑碧惠、谢馨卉、邹凤珠、谭茹丹、潘丽芳、于嘉辉、何春玉、周雪平、张芳、陈华文、童艳霞、王小波、后来、陈泓宇、后雪松、李丹、王丹丹，她们为志愿服务事业无私贡献了无数宝贵的时间、精力和技能，是我们学习的榜样。
					`
				},
				{
					src: require('images/05.jpg'),
					date: '2019年5月',
					desc: `
					真美系统志愿者联合会开展“爱己，及人”主题的第二届公益月活动，在全国范围内开展123场乳腺健康讲座，普及乳腺健康知识，引导社会公众关爱女性健康。
					`
				},
				{
					src: require('images/06.jpg'),
					date: '2019年10月',
					desc: `
					真美系统志愿者联合会发起重阳节“生活美好，陪您到老”大型敬老活动，在全国31座城市，组织开展37场重阳敬老活动，助力养老事业发展，献礼祖国70周岁生日。
					`
				},
				{
					src: require('images/07.jpg'),
					date: '未来',
					desc: `
					爱心不停，公益不止！未来，真美系统志愿者联合会将号召更多的爱心人士和志愿者参与志愿服务事业，携手为创建更加和谐美好的社会贡献力量。公益路上，我在，希望你也在！
					`
				}
			],
			swiperOption: {
				loop: true,
				speed: 900,
				notNextTick: true,
				autoplay: false,
				preloadImages: false,
				pagination: {
					el: '#swiperP',
					clickable: true,
					renderBullet: (index, className) => {
						return '<span class="' + className + '">' + (index + 1) + '</span>';
					}
				}
			}
		};
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		}
	},
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
		// blurHandle
		blurHandle() {
			let currentPosition = '';
			let timer = '';
			let speed = 1; // 页面滚动距离
			setTimeout(() => {
				currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
				currentPosition -= speed;
				window.scrollTo(0, currentPosition); // 页面向上滚动
				currentPosition += speed; // speed变量
				window.scrollTo(0, currentPosition); // 页面向下滚动
				// clearInterval(timer)
			}, 100);
		},
		// 生成承诺书
		confirmHandle1() {
			if (this.nullTest(this.name)) {
				this.text = '名字不能为空';
				this.warning = true;
				return false;
			}
			this.$router.replace({
				path: '/promise',
				query: {
					name: this.name
				}
			});
		},
		// 输入手机查找公益历程
		confirmHandle2() {
			if (this.nullTest(this.phone)) {
				this.text = '手机号码不能为空';
				this.warning = true;
				return false;
			}
			if (!this.phoneTest(this.phone)) {
				this.text = '手机号码格式有误';
				this.warning = true;
				return false;
			}
			var exit = window.data.find(item => {
				if (this.phone == item.tel) {
					this.$router.replace({
						path: '/experience',
						query: {
							user: JSON.stringify(item)
						}
					});
					return true;
				}
				return false;
			});

			this.exit = exit ? true : false;
		},
		// 显示模态框
		showHandle(type) {
			this.type = type;
			this.show = true;
		},
		hideHandle() {
			this.type = 0;
			this.show = false;
			this.type = 0;
			this.name = '';
			this.phone = '';
			this.exit = true;
		}
	}
};
</script>

<style></style>
