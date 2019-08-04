<template>
    <view class="source-list">
        <view v-for="(item, index) in list" :key="index">
            <navigator class="detail" :url="`/pages/detail/index?id=${item.id}`" hover-class="navigator-hover">
                <view class="detail-l">
                    <img :src="item.url" />
                </view>
                <view class="detail-r">
                    <view class="detail-r__title">{{item.title}}</view>
                    <view class="detail-r__desc">{{item.desc}}</view>
                    <view>
                        <text v-for="tag in item.tags" :key="tag" class="detail-r__tag" :style="{backgroundColor: tagList[tag].bgColor, color: tagList[tag].color}">{{tagList[tag].name}}</text>
                    </view>
                    <view>
                        <text class="detail-r__price">{{item.price}}</text>
                        <text class="detail-r__unit">{{item.unitPrice}}</text>
                    </view>
                </view>
            </navigator>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            tagList: [
                {
                    name: '满两年',
                    color: '#f2a02f',
                    bgColor: '#fdf1e0'
                },
                {
                    name: '随时看房',
                    color: '#4FC795',
                    bgColor: '#E0F5ED'
                },{
                    name: 'VR房源',
                    color: '#8BAAFA',
                    bgColor: '#E8EEFD'
                },{
                    name: '地铁',
                    color: '#72B8FE',
                    bgColor: '#E6F2FE'
                }
            ],
            list: [
				{
					url: 'https://haitao.nos.netease.com/d259241a-6acb-4eb1-93bc-4356fbb56fb8_242_208.jpeg',
					title: '小高层户型，中间楼层，精装修，满两年！！',
					desc: '2室2厅/90㎡/南/铂金名筑',
					tags: [0, 1, 2],
                    price: '356万',
                    unitPrice: '36569元/平',
                    id: 1
				},{
					url: 'https://haitao.nos.netease.com/d259241a-6acb-4eb1-93bc-4356fbb56fb8_242_208.jpeg',
					title: '小高层户型，中间楼层，精装修，满两年！！',
					desc: '2室2厅/90㎡/南/铂金名筑',
					tags: [ 1, 2, 3],
                    price: '356万',
                    unitPrice: '36569元/平',
                    id: 1
				},{
					url: 'https://haitao.nos.netease.com/d259241a-6acb-4eb1-93bc-4356fbb56fb8_242_208.jpeg',
					title: '小高层户型，中间楼层，精装修，满两年！！',
					desc: '2室2厅/90㎡/南/铂金名筑',
					tags: [ 1, 2, 3],
                    price: '356万',
                    unitPrice: '36569元/平',
                    id: 1
				}
			]
        }
    }
}
</script>

<style src="./index.scss" lang="scss" scoped />