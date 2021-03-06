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

// 导入 axios 第三方及配置
import http from './plugins/http'
// 导入 store 
import store from './store/index'

import VueSocketIO from 'vue-socket.io'

// 在原型上挂载http 之后可以在任意组件中通过 this.$http 使用
Vue.prototype.$http = http



// 引入组件文件
import MyTopBar from './components/MyTopBar.vue'
import MyCell from './components/MyCell.vue'
// 全局定义组件
Vue.component('my-top-bar', MyTopBar)
Vue.component('my-cell', MyCell)


Vue.config.productionTip = false

// 配置 socket.io
Vue.use(new VueSocketIO({
  debug: true,
  // connection: 'http://localhost:3000/chat',
  connection: 'http://chat.jishitongxin.top/chat',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
  // options: { path: "/chat/" } //Optional options
}))
 



new Vue({
  router,
  store, //使用 store
  render: h => h(App)
}).$mount('#app')


