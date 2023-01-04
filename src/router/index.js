
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/modules/Dashboard/index.vue'
import UsersRoutes from '@/modules/Users/routes'
import CategoriesRoutes from '@/modules/Categories/routes'
import ColorsRoutes from '@/modules/colors/routes'
import BrandsRoutes from '@/modules/Brands/routes'
import SizesRoutes from '@/modules/Sizes/routes'
import CouponsRoutes from '@/modules/Coupons/routes'
import RolesRoutes from '@/modules/Roles/routes'
import ReviewsRoutes from '@/modules/Reviews/routes'
import ProductsRoutes from '@/modules/Products/routes'
import OrdersRoutes from '@/modules/Orders/routes'



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
    ...ColorsRoutes,
    ...BrandsRoutes,
    ...SizesRoutes,
    ...CouponsRoutes,
    ...RolesRoutes,
    ...ReviewsRoutes,
    ...ProductsRoutes,
    ...OrdersRoutes

  ]
})


export default router
