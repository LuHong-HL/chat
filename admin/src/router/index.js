import Vue from 'vue'
// 导入 vue-router
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'


import UserList from '../views/UserList.vue'

import AdminUserCreate from '../views/AdminUserCreate.vue'
import AdminUserList from '../views/AdminUserList.vue'

import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/',
    name: 'Main',
    redirect: { name: 'UserList' },
    component: Main,
    children: [
      {
        path: 'users/list',
        name: 'UserList',
        component: UserList
      },

      {
        path: 'admin_users/create',
        name: 'AdminUserCreate',
        component: AdminUserCreate
      },
      {
        path: 'admin_users/edit/:id',
        component: AdminUserCreate,
        props: true
      },
      {
        path: 'admin_users/list',
        component: AdminUserList
      }
    ]
  }

]
// 实例化一个 router 对象
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

// 向外暴露 router
export default router
