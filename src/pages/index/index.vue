<template>
	<view class="content">
		<view class="swiper-wrapper">
			<view class="search">
				<view class="search-container">
					<view class="search-location">
						杭州
						<icon class="iconfont icon-xiajiantou" />
					</view>
					<input class="search-container__input" type="text" :value="val" mode="wrapped" placeholder="你想住在哪？" />
				</view>
			</view>
			
			<swiper class="slide" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
				<block v-for="(item,index) in imgList" :key="index">
					<navigator url="/pages/list/index" hover-class="navigator-hover">
						<swiper-item>
							<image :src="item" class="slide-image" />
						</swiper-item>
					</navigator>
				</block>
			</swiper>
		</view>

		<category-info />

		<view>
			<p class="list-title">推荐房源</p>
			<source-list />
		</view>
	</view>
</template>

<script src="./index.js" />
<style scoped lang="scss" src="./index.scss" />