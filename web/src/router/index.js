import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
// 导入 store
import store from '../store/index'

import Home from '../views/Home.vue'
import AddressBook from '../views/AddressBook.vue'
import Find from '../views/Find.vue'
import My from '../views/My.vue'

import Login from '../views/login/Login.vue'

import User from '../views/my/User.vue'
import SetUp from '../views/my/SetUp.vue'

import Username from '../views/my/user/Username.vue'

import NewFriend from '../views/address_book/add_friends/NewFriend.vue'
import AddFriend from '../views/address_book/add_friends/AddFriend.vue'
import SearchFriend from '../views/address_book/add_friends/SearchFriend.vue'

import UserProfile from '../views/address_book/add_friends/UserProfile.vue'
import ApplyAddFriend from '../views/address_book/add_friends/ApplyAddFriend.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/main',
    name: 'Main',
    redirect: '/main/home',
    component: Main,
    children: [
      { path: 'home', component: Home },
      { path: 'address_book', component: AddressBook },
      { path: 'find', component: Find },
      { path: 'my', component: My }
    ]
  },
  {
    path: '/user',
    component: User,
  },
  { path: '/user/username', component: Username },
  {
    path: '/set_up',
    component: SetUp,
  },
  {
    path: '/new_friends',
    component: NewFriend
  },
  {
    path: '/new_friends/add_friends',
    component: AddFriend
  },
  {
    path: '/new_friends/search_friends',
    component: SearchFriend
  },
  {
    path: '/user_profiles',
    component: UserProfile,
  },
  {
    path: '/apply_add_friends',
    component: ApplyAddFriend,
  }

]

const router = new VueRouter({
  routes
})

//注册全局前置守卫
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook
  const token =sessionStorage.token //token
  const user = JSON.parse(sessionStorage.user || '{}')  // 用户信息
  if (!to.meta.isPublic && !token) {
    Vue.prototype.$toast({
      type:"fail",
      message: "请先登录"
    })
    return next({ path: '/login' })
  }else{
    // 更新store 中的用户信息
    if((Object.keys(store.state.user).length === 0) && (Object.keys(user).length !== 0)){
      store.commit('updateUser', user)
    }
    next()
  }
  
})

export default router
