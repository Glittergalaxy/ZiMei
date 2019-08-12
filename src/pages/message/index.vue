<template>
    <view class="content message">
        <view class="message-item" @click="phoneCall(item.number)" v-for="(item, index) in messageList" :key="index">
            <view class="message-avatar">
                <image :src="item.avatarUrl" />
            </view>
            <view class="message-content">
                <view class="message-info">
                    <text class="message-info__user">{{item.user}}</text>
                    <text class="message-info__belong">{{item.belong}}</text>
                </view>
                <view class="message-content__text">{{item.message}}</view>
            </view>
            <view class="message-date">{{item.date}}</view>
        </view>
    </view>
</template>

<script>
import ShareMixin from '../../common/mixins/share.mixin';

export default {
    mixins: [ShareMixin],
    data() {
        return {
            messageList: [
                {
                    avatarUrl: 'https://image1.ljcdn.com/usercenter/images/uc_ehr_avatar/d2d144d0-5c21-4827-83d2-38940b78dade.jpg.424x600.jpg',
                    user: '彭华',
                    belong: '翡翠城旗舰店',
                    message: '您是首套还是二套',
                    date: '08/04',
                    number: '17557280881'
                }, {
                    avatarUrl: 'https://image1.ljcdn.com/usercenter/images/uc_ehr_avatar/109423d0-a814-4670-95df-4b6d3714be72.jpg.906x1299.jpg',
                    user: '吴林',
                    belong: '东方郡西区店',
                    message: '您要过来看看这套房子吗？',
                    date: '07/28',
                    number: '17557280881'
                }
            ]
        }
    },
    methods: {
        phoneCall(number) {
            wx.makePhoneCall({
                phoneNumber: number //仅为示例，并非真实的电话号码
            })
        }
    }
}
</script>

<style scoped lang="scss" src="./index.scss"></style>