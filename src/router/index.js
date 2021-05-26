import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/login/Login')
const Home = () => import('../views//home/Home')
const About = () => import('../views/about/About')
const ToDoList = () => import('../views/todolist/ToDoList')
const Socket = () => import('../views/socket/Socket')
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/todolist',
    component: ToDoList
  },
  {
    path: '/socket',
    component: Socket
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router