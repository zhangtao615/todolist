import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import TodoList from '@/views/TodoList/index.vue'
import Login from '@/views/Login/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'todolist',
    component: TodoList
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const history = createWebHistory()

const router = createRouter({
  history,
  routes
})

export default router
