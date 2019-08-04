import SourceList from '../../common/components/source.list';
import CategoryInfo from './modules/category.info';


export default {
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
			val: ''
		}
	},
	onLoad() {

	},
	methods: {

	}
};