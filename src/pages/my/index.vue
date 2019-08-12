<template>
    <view class="content my">
        <view class="user" @click="login">
            <view class="user-avatar">
                <image :src="userInfo.avatarUrl"/>
            </view>
            <view class="user-name">
                <text class="user-name__text">{{userInfo.nickName}}</text>
                <view>
                    <text v-if="!loginSuccess">{{userInfo.desc}}</text>
                    <text v-else class="user-name__tag">LV0 经验值0></text>
                </view>
            </view>
        </view>
        <view class="feature">
            <view v-for="(item, index) in featureList" :key="index" class="feature-item">
                <view :style="{backgroundColor: item.bgColor}" class="feature-item__logo">
                    <icon class="iconfont" :class="item.icon" />
                </view>
                <view class="feature-item--right">
                    <text>{{item.name}}</text>
                    <icon class="iconfont icon icon-next fr" />
                </view>
            </view>
        </view>
        <view v-if="loginSuccess" class="my-button" @click="logout">退出登录</view>
    </view>
</template>

<script>
import ShareMixin from '../../common/mixins/share.mixin';

export default {
    mixins: [ShareMixin],
    data() {
        return {
            loginSuccess: false,
            userInfo: {
                avatarUrl: '../../static/image/head.jpeg',
                nickName: '登录/注册',
                desc: '登录后即可体验更多服务'
            },
            featureList: [
                {
                    name: '钱包',
                    icon: 'icon-qian',
                    bgColor: '#F4B665',
                    url: ''
                },{
                    name: '收藏',
                    icon: 'icon-Collection2',
                    bgColor: '#62B65D',
                    url: ''
                },{
                    name: '历史记录',
                    icon: 'icon-foot-print',
                    bgColor: '#4E84E8',
                    url: ''
                }
            ]
        }
    },
    created() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo() {
            wx.getUserInfo({
                success:(res) => {
                    this.userInfo = res.userInfo;
                    this.loginSuccess = true;
                }
            })
        },
        logout() {
            wx.showModal({
                title: '提示',
                content: '退出登陆之后，某些功能将无法正常使用，确认要退出吗？',
                success: (res) => {
                    if (res.confirm) {
                        this.loginSuccess = false;
                        this.userInfo = {
                            avatarUrl: '../../static/image/head.jpeg',
                            nickName: '登录/注册',
                            desc: '登录后即可体验更多服务'
                        }
                    }
                }
            })
        },
        login() {
            if (!this.loginSuccess) {
                this.getUserInfo();
            }
        }
     }
}
</script>

<style scoped lang="scss" src="./index.scss"></style>