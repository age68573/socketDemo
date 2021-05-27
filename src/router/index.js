import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

const Login = () => import('../views/login/Login')
const Home = () => import('../views//home/Home')
const About = () => import('../views/about/About')
const ToDoList = () => import('../views/todolist/ToDoList')
const Socket = () => import('../views/socket/Socket')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    meta: { requireAuth: true }
  },
  {
    path: '/about',
    component: About,
    meta: { requireAuth: true }
  },
  {
    path: '/todolist',
    component: ToDoList,
    meta: { requireAuth: true }
  },
  {
    path: '/socket',
    component: Socket,
    meta: { requireAuth: true }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach(async(to, from, next) => {
  // 看看 to 和 from 兩個 arguments 會吐回什麼訊息
  console.log('to: ', to)
  console.log('from: ', from)
  // 目的路由在meta上是否有設置requireAuth: true
  if (to.meta.requireAuth) {
    // 獲取Cookies當中的login資訊並取得token
    const info = Cookies.get('login')
    console.log(info, "info");
    const token = JSON.parse(info).token
    console.log(token)
    if (info) {
      console.log(123);
      // 如果token不為空，且確實有這個欄位則讓路由變更
      if (token.length > 0 || token === undefined) {
        console.log(1);
        next()
      } else {
        console.log(2);
        // 未通過則導回login頁面
        next({path: '/'})
      }
    } else {
      console.log(3);
      next({path: '/'})
    }
  } else {
    next()
  }
})

export default router