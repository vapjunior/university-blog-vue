import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import AddView from '../views/AddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView
    },
    {
      path: '/new',
      name: 'add',
      component: AddView
    }
  ]
})

export default router
