
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/pages/Dashboard/index.vue'
import UsersRoutes from '@/pages/Users/routes'
import CategoriesRoutes from '@/pages/Categories/routes'
import BrandsRoutes from '@/pages/Brands/routes'
import SizesRoutes from '@/pages/Sizes/routes'
import CouponsRoutes from '@/pages/Coupons/routes'
import RolesRoutes from '@/pages/Roles/routes'
import ReviewsRoutes from '@/pages/Reviews/routes'
import ProductsRoutes from '@/pages/Products/routes'
import OrdersRoutes from '@/pages/Orders/routes'


import useRouterService from '@/router/useRouterService'
import { useLoadingSpinner } from '@/components/LoadingSpinner'

import BannerRoutes from '@/pages/AugustBanners/routes'
import useUserStore from '@/Auth/store/userStore'
import ColorsRoutes from '@/pages/Colors/routes'
import ErrorsRoutes from '@/pages/Errors/routes'
import useAuthService from '@/Auth/services/useAuthService'


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
    ...ErrorsRoutes
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
