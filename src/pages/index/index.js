import SourceList from '../../common/components/source.list';
import CategoryInfo from './modules/category.info';

import ShareMixin from '../../common/mixins/share.mixin';


export default {
	mixins: [ShareMixin],
	components: {
		CategoryInfo,
		SourceList
	},
	data() {
		return {
			imgList: [
				'/static/image/banner1.jpg',
				'/static/image/banner1.jpg',
				'/static/image/banner1.jpg'
			],
			location: '杭州',
			val: '',
			priceList: [
				{
					title: '最新均价',
					number: 28782,
					unit: '元'
				},{
					title: '比上月',
					number: 0.05,
					desc: '%',
					unit: ''
				},{
					title: '比去年',
					number: -1.43,
					desc: '%',
					unit: ''
				}
			],
			recommendList: [
				'../../static/image/recommend_1.png',
				'../../static/image/recommend_2.png',
				'../../static/image/recommend_3.png',
				'../../static/image/recommend_4.png',
			]
		}
	},
	onShow() {
		const location = getApp().globalData.location;
		this.location = location ? location: '杭州';
	},
	methods: {

	}
};