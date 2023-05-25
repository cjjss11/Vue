import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '../views/HelloView.vue'
import LoginView from '../views/LoginView.vue'
import DogView from '../views/DogView.vue'
import NotFound404 from '../views/NotFound404.vue'

Vue.use(VueRouter)


const isLoggedIn = true   // 라우터 전역 / 로그인이 되어 있는 상태이므로 홈으로 이동
// const isLoggedIn = false  // 라우터 전역 / Login 페이지로 정상 이동 가능

const routes = [
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  {
    path:'/login',
    name: 'login',
    component: LoginView,

    // 라우터 가드 실습 코드
    beforeEnter(to, from, next) {
      if (isLoggedIn === true) {
        console.log('이미 로그인 함')
        next({ name: 'home' }) // 로그인이 되어 있다면 홈으로 이동
      } else {
        next() // 로그인이 안 되어 있다면 로그인 페이지로 이동
      }
    }
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView,
  },
  {
    // 가장 아래에 적어야 하는 코드
    path: '*', // 위에 있는 path에 해당하지 않는 모든 것
    redirect: '/404', // 설정하지 않는 url이면 404 페이지로 넘김
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 전역 가드 실습 코드
//router/index.js
// beforeEach문이 전역이므로 모든 페이지에 실행됨
// router.beforeEach((to, from, next) => {

//   // 로그인 여부 판단
//   // const isLoggedIn = true // 로그인이 되어 있는 상태
//   const isLoggedIn = false // 로그인이 안 되어 있는 상태

//   // 로그인이 필요한 페이지 지정
//   // const authPages = ['hello','home']
//   const allowAuthPages = ['login','home'] // 로그인을 할 필요 없는 페이지를 지정

//   // 앞으로 이동할 페이지(to)가 로그인이 필요한 페이지인지 확인
//   // const isAuthRequired = authPages.includes(to.name)
//   const isAuthRequired = !allowAuthPages.includes(to.name) // 로그인을 할 필요 없는 페이지가 아니라면

//   if (isAuthRequired && !isLoggedIn) {
//     console.log('Login으로 이동')
//     next({ name: 'login' })
//   } else {
//     console.log('to로 이동')
//     next()
//   }
  
// })




export default router
