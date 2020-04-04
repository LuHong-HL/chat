import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

import Home from '../views/Home.vue'
import AddressBook from '../views/AddressBook.vue'
import Find from '../views/Find.vue'
import My from '../views/My.vue'

import Login from '../views/login/Login.vue'

import User from '../views/my/User.vue'
import SetUp from '../views/my/SetUp.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path:'/login',
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
  {
    path: '/set_up',
    component: SetUp,
  }

]

const router = new VueRouter({
  routes
})

//注册全局前置守卫
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook
  if (!to.meta.isPublic && !sessionStorage.token) {
    return next({ path: '/login' })
  }
  next()
})

export default router
