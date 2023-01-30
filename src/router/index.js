
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/modules/Dashboard/index.vue'
import UsersRoutes from '@/modules/Users/routes'
import CategoriesRoutes from '@/modules/Categories/routes'
import BrandsRoutes from '@/modules/Brands/routes'
import SizesRoutes from '@/modules/Sizes/routes'
import CouponsRoutes from '@/modules/Coupons/routes'
import RolesRoutes from '@/modules/Roles/routes'
import ReviewsRoutes from '@/modules/Reviews/routes'
import ProductsRoutes from '@/modules/Products/routes'
import OrdersRoutes from '@/modules/Orders/routes'


import useRouterService from '@/router/useRouterService'
import { useLoadingSpinner } from '@/components/LoadingSpinner'

import BannerRoutes from '@/modules/AugustBanners/routes'
import useUserStore from '@/Auth/store/userStore'
import ColorsRoutes from '@/modules/Colors/routes'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,

    },
    ...UsersRoutes,
    ...CategoriesRoutes,
    ...ColorsRoutes,
    ...BrandsRoutes,
    ...SizesRoutes,
    ...CouponsRoutes,
    ...RolesRoutes,
    ...ReviewsRoutes,
    ...BannerRoutes,
    ...ProductsRoutes,
    ...OrdersRoutes,
    , {
      path: "/login",
      name: "login",
      component: () => import('@/Auth/views/login.vue'),
      meta: {
        guest: true,
      }

    }


  ]
})

router.beforeEach(async (to, from, next) =>
{
  useRouterService.setPageTitle(to.meta.title);

  const useStore = useUserStore();

  if (!useStore.isAuthenticated && to.name !== 'login')
  {
    return next({ name: 'login' });
  }


  if (useStore.isAuthenticated && to.meta.guest)
  {
    return next({ name: 'dashboard' });
  }

  return next();
})
export default router
