import Vue from 'vue'

import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false
// 注册全剧组件--底部播放栏
import AlbumPlay from './myComponents/click-to-play/click-to-play.vue'
Vue.component('AlbumPlay',AlbumPlay);

Vue.prototype.store=store
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

