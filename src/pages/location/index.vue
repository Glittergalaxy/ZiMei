<template>
    <view>
        <area-select :hotCitys="hotCitys" v-model="value" @on-select="selected" />
    </view>
</template>

<script>
import AreaSelect from '../../common/components/ss-select-city/ss-select-city.vue';

import ShareMixin from '../../common/mixins/share.mixin';

export default {
    mixins: [ShareMixin],
    components: {
        AreaSelect
    },
    data() {
        return {
            hotCitys: ['杭州', '天津', '北京', '上海', '深圳', '广州', '成都', '重庆', '厦门'],
            value: '杭州'
        }
    },
    methods: {
        selected(city) {
            getApp().globalData.location = city;
            getApp().globalData.isSaveRecord = 1;
            wx.switchTab({
                url: '/pages/index/index'
            });
        }
    }
}
</script>