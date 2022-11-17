
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/modules/Dashboard/index.vue'
import UsersRoutes from '@/modules/Users/routes'
import CategoriesRoutes from '@/modules/Categories/routes'
import useAuthApi from './useAuthApi'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    ...UsersRoutes,
    ...CategoriesRoutes,


  ]
})
// router.beforeEach(async (to, from, next) =>
// {
//   let isNotAuthenticated = await useAuthApi.isAuthenticated();

//   console.log(isNotAuthenticated.data);
//   return next();
// })

export default router
