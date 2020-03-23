import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入 vant ui 组件库
import './plugins/vant.js'
//导入 amfe-flexible 用于设置 rem 基准值
import 'amfe-flexible/index.js'
//引入字体图标
import './assets/iconfont/iconfont.css'
// 引入工具样式
import './assets/scss/style.scss'


// 引入组件文件
import MyTopBar from './components/MyTopBar.vue'
import MyCell from './components/MyCell.vue'
// 全局定义组件
Vue.component('my-top-bar', MyTopBar)
Vue.component('my-cell', MyCell)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
