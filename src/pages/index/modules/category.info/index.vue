<template>
    <view class="category">
        <view class="category-item" v-for="(item, index) in list" :key="index">
            <navigator :url="item.url" hover-class="navigator-hover">
                <view class="category-img" :style="{backgroundColor: item.bgColor}">
                    <view class="iconfont" :class="item.icon" />
                </view>
                <view class="category-title">{{item.name}}</view>
            </navigator>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    name: '二手房',
                    icon: 'icon-ershoufang',
                    bgColor: '#58c187',
                    url: '/pages/list/index'
                }, {
                    name: '新房',
                    icon: 'icon-loufang01-copy',
                    bgColor: '#ef9062',
                    url: '/pages/list/index'
                }, {
                    name: '房贷',
                    icon: 'icon-gujia',
                    bgColor: '#f4b665',
                    url: '/pages/list/index'
                }, {
                    name: '加盟',
                    icon: 'icon-pinpaijiameng',
                    bgColor: '#23D2B7',
                    url: '/pages/list/index'
                }
            ]
        }
    }
}
</script>

<style src="./index.scss" lang="scss" scoped />