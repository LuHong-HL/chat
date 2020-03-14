import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入 vant ui 组件库
import '../plugins/vant'
//导入 amfe-flexible 用于设置 rem 基准值
import 'amfe-flexible/index.js'
//引入字体图标
import './assets/iconfont/iconfont.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
