<template>
  <view class="content">
    <view class="filter">
      <view class="search">
        <view class="search-container">
          <view class="search-icon">
            <icon class="iconfont icon-RectangleCopy" />
          </view>
          <input
            class="search-container__input"
            type="text"
            :value="val"
            mode="wrapped"
            placeholder="请输入小区或者商圈名"
          />
        </view>
      </view>
		<sl-filter themeColor="#22AC38" :independence="true" :menuList.sync="menuList" @result="result" />
    </view>
    <view class="source-list">
      <source-list />
    </view>
  </view>
</template>

<script>
import menuList from './index';

import SourceList from "../../common/components/source.list";
import slFilter from "../../common/components/sl-filter/sl-filter.vue";

import ShareMixin from '../../common/mixins/share.mixin';

export default {
  mixins: [ShareMixin],
  components: {
    SourceList,
    slFilter
  },
  data() {
    return {
      menuList: menuList
    };
  },
  methods: {
    result() {}
  }
};
</script>

<style lang="scss" scoped src="./index.scss" />