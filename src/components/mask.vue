<template>
	<div class="mask" v-show="show">
		<div class="content">
			<img @click="hideMask" class="close-icon" src="../assets/images/close-icon.png" alt="" />
			<h2 class="title">
				<span>真美系统志愿者联合会</span>
				<span>与爱同行</span>
			</h2>
			<slot name="box"></slot>
			<slot name="button">
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vMask',
	components: {},
	created() {},
	mounted() {},
	props: {
		show: Boolean
	},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	methods: {
		hideMask() {
			console.log('s');
			this.$emit('closeHandle');
		}
	}
};
</script>
<style></style>
