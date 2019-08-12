<template>
	<view class="content">
		<view class="swiper-wrapper">
			<view class="search">
				<view class="search-container">
					<navigator url="/pages/location/index" open-type="navigate">
						<view class="search-location">
							{{location}}
							<icon class="iconfont icon-icon-test" />
						</view>
					</navigator>
					<navigator url="/pages/list/index" open-type="navigate">
						<input class="search-container__input" type="text" :value="val" mode="wrapped" placeholder="你想住在哪？" />
					</navigator>
				</view>
			</view>
			
			<swiper class="slide" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
				<block v-for="(item,index) in imgList" :key="index">
					<navigator url="/pages/list/index" open-type="navigate">
						<swiper-item>
							<image :src="item" class="slide-image" />
						</swiper-item>
					</navigator>
				</block>
			</swiper>
		</view>

		<category-info />

		<view class="recommend">
			<view v-for="(item, index) in recommendList" :key="index" class="recommend-item">
				<image :src="item" />
			</view>
		</view>

		<view class="price">
			<view class="price-title">
				<view class="price-title__location">杭州</view>
				<view>房价</view>
			</view>
			<view class="price-content">
				<view class="price-block" v-for="(item,index) in priceList" :key="index">
					<view class="price-block__number">
						<text :class="item.number > 0 ? 'price-block__number--grow' : 'price-block__number--fall'">{{item.number}}</text> 
						<text :class="item.number > 0 ? 'price-block__number--grow' : 'price-block__number--fall'" class="price-block__number--desc">{{item.desc || ''}}</text>
						<text class="price-block__number--unit">{{item.unit || ''}}</text>
					</view>
					<view class="price-block__title">{{item.title}}</view>
				</view>
			</view>
		</view>

		<view>
			<p class="list-title">推荐房源</p>
			<source-list />
		</view>
	</view>
</template>

<script src="./index.js" />
<style scoped lang="scss" src="./index.scss" />