import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:()=>import('@/views/Home')
  },
  {
    path:'/ask',
    name:'Ask',
    component:()=>import('@/views/Iconcov/AskDoctor')
  },
  {
    path:'/test',
    name:'Test',
    component:()=>import('@/views/Iconcov/Testt')
  },
  {
    path:'/trivel',
    name:'Trivel',
    component:()=>import('@/views/Iconcov/Trivel')
  },
  {
    path:'/fywz',
    name:'Fywz',
    component:()=>import('@/views/Iconcov/Fywz')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
