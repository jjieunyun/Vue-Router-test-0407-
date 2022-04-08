import Vue from 'vue'
import VueRouter from 'vue-router'
import BoardView from '../views/BoardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    //가장 처음화면
    path : "/",
    name : "board",
    component : BoardView,
  },
  {
    // 가장 처음화면 (게시글목록과 링크가 보임)
    path: '/board',
    name: 'board',
    component : BoardView,
    //아래 children사용을 위해 component연결
    children : [
      {
        path: ':page',
        name : 'page',
        component: function () {
          return import('../components/pageComponent.vue')
        }
      },
    ]
  },
  {
    path: '/login',
    name : 'login',
    component: function () {
          return import('../views/LoginView.vue')
        }
  },
  {
    //유저화면
    path: '/user/:user',
    name : 'user',
    component: function () {
          return import('../views/UserView.vue')
        }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
