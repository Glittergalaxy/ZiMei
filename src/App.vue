<script>
	export default {
		globalData: {  
            isSaveRecord: 0,
    		location: ''
		},
		onLaunch: function() {
			wx.getSetting({
				success(res) {
					if (!res.authSetting['scope.record']) {
					wx.authorize({
						scope: 'scope.record',
						success () {
						// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
						wx.startRecord()
						}
					})
					}
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import './style/index.scss';
</style>
