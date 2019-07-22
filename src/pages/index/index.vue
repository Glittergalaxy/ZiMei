<template>
	<view class="content">
		<view class="swiper-wrapper">
			<view class="search">
				<a class="search__location">
					杭州
					<i class="icon-triangle"></i>
				</a>
				<hr class="search__divider"/>
				<input class="search__input" type="text" :value="val" mode="wrapped" />
			</view>
			
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
				<block v-for="(item,index) in imgList" :key="index">
					<swiper-item>
						<image :src="item" class="slide-image" />
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgList: [
				'/static/image/banner1.jpg',
				'/static/image/banner1.jpg',
				'/static/image/banner1.jpg'
			],
			val: '233'
		}
	},
	onLoad() {

	},
	methods: {

	}
};
</script>

<style lang="scss">
@import '../../style/index.scss';

.slide-image {
	width: 100%;
	height: 100%;
}
@include b(search) {
	z-index: 5;
	display: flex;
	position: absolute;
	width: 690rpx;
	line-height: 60rpx;
	padding: 5rpx 10rpx;
	margin: 20rpx 30rpx;
	border-radius: 5px;
	background-color: #fff;
	@include e(location) {
		width: 20%;
	}

	@include e(divider) {
		
	}

	@include e(input) {
	}
}
</style>
