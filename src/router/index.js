import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/pages/Dashboard/index.vue'
import useAuthApi from '@/router/useAuthApi';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/pages/Users/index.vue'),

    },
    {
      path: "/users/create",
      name: "create user",
      component: () => import('@/views/pages/Users/components/Create.vue')
    }, {
      path: "/users/update/:id",
      name: "update user",
      component: () => import('@/views/pages/Users/components/Update.vue')
    },
  ]
})

// router.beforeEach(async (to, from, next) =>
// {
//   let isNotAuthenticated = await useAuthApi.isAuthenticated();

//   console.log(isNotAuthenticated.data);
//   return next();
// })
export default router
