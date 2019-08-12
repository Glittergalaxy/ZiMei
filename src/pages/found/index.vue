<template>
    <view class="content">
        <view class="info" v-for="(item, index) in list" :key="index">
            <view class="house-info">
                <image class="house-info__head" :src="item.avatar"/>
                <view class="house-content">
                    <view class="house-content__title">{{item.name}}&nbsp;{{item.type}}&nbsp;{{item.area}}</view>
                    <view class="house-tags">
                        <text class="house-tags__tag">{{item.tag}}</text>
                        <text class="house-tags__price">{{item.price}}</text>
                        <text class="house-tags__location">{{item.location}}</text>
                    </view>
                </view>
            </view>
            <view class="info-content">{{item.info}}</view>
            <video class="video-info" :src="item.url" controls ></video>
            <view class="user-info">
                <image class="user-info__head" :src="item.userAvatar"/>
                <text class="user-info__text">{{item.user}}</text>
                <view class="user-info__iconbox" @click="phoneCall">
                    <icon class="iconfont icon-xiaoxi4"/>
                </view>
                <view class="user-info__iconbox" @click="phoneCall">
                    <icon class="iconfont icon-lianxiren2"/>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import ShareMixin from '../../common/mixins/share.mixin';

export default {
    mixins: [ShareMixin],
    data() {
        return {
            list: [
                {
                    info: '西溪里瑾，三房朝阳，南北通透，入室花园',
                    avatar: 'http://pic.9ht.com/up/2018-1/15156513927073072.jpg',
                    name: '西溪里谨园',
                    type: '3室2厅',
                    area: '137.85㎡',
                    price: '589万',
                    tag: '安选',
                    location: '西湖',
                    url: 'https://wosmedia1.anjukestatic.com/UcSrQpOnMUW/brokermediatransform/18_1157116675997347845.405.mp4',
                    user: '黄卫国 3.3分 我爱我家',
                    userAvatar: 'https://pic1.ajkimg.com/display/anjuke/70347eae2d3a7d925a8f8a3f0dc01094/276x367x31x0/100x133.jpg',
                    userNumber: '123456'
                }
            ]
        }
    },
    methods: {
        email() {

        },
        phoneCall() {
            wx.makePhoneCall({
                phoneNumber: number //仅为示例，并非真实的电话号码
            })
        }
    }
}
</script>

<style scoped lang="scss" src="./index.scss"></style>
