import Vue from 'vue'
import App from './App.vue'
// 导入路由匹配规则
import router from './router'
// 导入 element-ui 组件
import './plugins/element.js'
// 导入 axios 第三方及配置
import http from './plugins/http'

// 在原型上挂载http 之后可以在任意组件中通过 this.$http 使用
Vue.prototype.$http = http

//全局混入
// Vue.mixin({
//   computed: {
//     uploadUrl(){
//       return this.$http.defaults.baseURL + '/upload'
//     }
//   },
//   methods: {
//     getAuthorizationHeaders(){
//       return{
//         Authorization: `Bearer ${sessionStorage.token || ''}`
//       }
//     }
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
