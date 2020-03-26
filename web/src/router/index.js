import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

import Home from '../views/Home.vue'
import AddressBook from '../views/AddressBook.vue'
import Find from '../views/Find.vue'
import My from '../views/My.vue'

import User from '../views/my/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/main'
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
  }

]

const router = new VueRouter({
  routes
})

export default router
