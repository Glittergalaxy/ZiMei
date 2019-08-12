<template>
  <view>
    <view class="content">
      <view class="swiper-wrapper">
        <swiper class="slide" :indicator-dots="false" :autoplay="false">
          <block v-for="(item,index) in imgList" :key="index">
            <swiper-item>
              <image :src="item" class="slide-image" />
            </swiper-item>
          </block>
        </swiper>
      </view>
      <button open-type="share" class="share-btn">
        <image src="../../static/detail_1.png" />
      </button>
      <view>
        <map
          id="map"
          longitude="120.21201000000002"
          latitude="30.20840000000001"
          scale="14"
          show-location
          style="width: 100%; height: 150px;"
        ></map>
      </view>
      <!-- <image src="../../static/detail_2.png" /> -->
    </view>
    <view class="bottom">
      <image
        class="contact-user"
        src="https://image1.ljcdn.com/usercenter/images/uc_ehr_avatar/109423d0-a814-4670-95df-4b6d3714be72.jpg.906x1299.jpg"
      />
      <view class="contact-info">
        <view class="contact-info__name">陈丽燕</view>
        <view class="contact-info__company">杭州瑞鼎…</view>
      </view>
      <view class="contact-btn contact-btn--success" @click="phoneCall">
        <icon class="iconfont icon-xiaoxi4" />微聊
      </view>
      <view class="contact-btn contact-btn--warning" @click="phoneCall">
        <icon class="iconfont icon-lianxiren2" />电话
      </view>
    </view>
  </view>
</template>

<script>
import ShareMixin from "../../common/mixins/share.mixin";
export default {
  mixins: [ShareMixin],
  data() {
    return {
      imgList: [
        "https://pic1.ajkimg.com/display/anjuke/878f71-%E9%87%91%E4%B8%9A%E7%BD%AE%E6%8D%A2/26e7ab6c30ea7740beeaa5ab4b209d25-599x450.jpg?t=1",
        "https://pic1.ajkimg.com/display/anjuke/319038-%E9%87%91%E4%B8%9A%E7%BD%AE%E6%8D%A2/68c1fda6cdb37a12a4cf24601164ed41-599x450.jpg?t=1",
        "https://pic1.ajkimg.com/display/anjuke/e93a77-%E9%87%91%E4%B8%9A%E7%BD%AE%E6%8D%A2/7579e64d724f5e20e6254a457edd6646-599x450.jpg?t=1"
      ],
      markers: [
        {
          id: 0,
          latitude: 30.20840000000001,
          longitude: 120.21201000000002,
          width: 50,
          height: 50
        }
      ],
      controls: [
        {
          id: 1,
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }
      ]
    };
  },
  methods: {
    phoneCall() {
      wx.makePhoneCall({
        phoneNumber: "123456" //仅为示例，并非真实的电话号码
      });
    },
    onShareAppMessage(res) {
      if (res.from === "button") {
        // 来自页面内分享按钮
        console.log(res.target);
      }
      return {
        title: "自定义分享标题",
        path: "/pages/test/test?id=123"
      };
    }
  }
};
</script>

<style scoped lang="scss" src="./index.scss"></style>