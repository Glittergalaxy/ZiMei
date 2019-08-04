<template>
    <view class="content">
        <view class="filter">
            <view class="search">
                <view class="search-container">
                    <view class="search-icon">
                        <icon class="iconfont icon-RectangleCopy" />
                    </view>
                    <input class="search-container__input" type="text" :value="val" mode="wrapped" placeholder="请输入小区或者商圈名" />
                </view>
            </view>
            <view class="sort">

            </view>
        </view>
        <source-list />
    </view>
</template>

<script>
import SourceList from '../../common/components/source.list';

export default {
    components: {
        SourceList
    }
}
</script>

<style lang="scss" scoped src="./index.scss" />