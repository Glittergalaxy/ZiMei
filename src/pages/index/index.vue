<template>
	<view class="content">
		<view class="swiper-wrapper">
			<view class="search">
				<view class="search-location">
					杭州
					<icon class="iconfont icon-xiajiantou" />
				</view>
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

		<view class="category">
			<view class="category-item">
				<view class="category-img">
					<icon class="iconfont icon-haofangtuo400iconfonthaofangtuo" />
				</view>
				<view class="category-title">二手房</view>
			</view>
			<view class="category-item">
				<view class="category-img">
					<icon class="iconfont icon-haofangtuo400iconfonthaofangtuo" />
				</view>
				<view class="category-title">二手房</view>
			</view>
			<view class="category-item">
				<view class="category-img">
					<icon class="iconfont icon-haofangtuo400iconfonthaofangtuo" />
				</view>
				<view class="category-title">二手房</view>
			</view>
			<view class="category-item">
				<view class="category-img">
					<icon class="iconfont icon-haofangtuo400iconfonthaofangtuo" />
				</view>
				<view class="category-title">二手房</view>
			</view>
		</view>

		<p class="list-title">推荐房源</p>
		<view class="detail" v-for="(item, index) in detailList" :key="index">
			<view class="detail-l">
				<img :src="item.url" />
			</view>
			<view class="detail-r">
				<view class="detail-title">{{item.title}}</view>
				<view class="detail-desc">{{item.desc}}</view>
				<view class="detail-tag">
					<span v-for="tag in item.tags" :key="tag">{{tag}}</span>
				</view>
				<view>{{item.price}}</view>
			</view>
		</view>
	</view>
</template>

<script src="./index.js" />
<style scoped lang="scss" src="./index.scss" />