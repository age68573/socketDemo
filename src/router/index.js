import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views//home/Home')
const About = () => import('../views/about/About')
const ToDoList = () => import('../views/todolist/ToDoList')
Vue.use(VueRouter)

const routes = [
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
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router