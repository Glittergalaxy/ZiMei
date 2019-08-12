export default {
    onShareAppMessage: function() {
        const page = getCurrentPages();
        return {
            title: '我正在子美寻找二手房，跟我一起体验吧',
            path: page.route
        }
    },
}