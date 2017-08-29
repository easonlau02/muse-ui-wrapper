import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Students from '@/components/Students'
import Teachers from '@/components/Teachers'
import Dashboard from '@/components/Dashboard'
import Statistics from '@/components/Statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/students',
      name: 'Students',
      component: Students
    },
    {
      path: '/teachers',
      name: 'Teachers',
      component: Teachers
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    }
  ]
})
