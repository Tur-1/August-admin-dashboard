
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
import useAuthApi from '@/Auth/api/useAuthApi'
import useRouterService from '@/router/useRouterService'
import { useLoadingSpinner } from '@/components/LoadingSpinner'
import AuthUser from '@/Auth/store/AuthUser'
import BannerRoutes from '@/modules/AugustBanners/routes'




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
  useLoadingSpinner.show();
  let isAuthenticated = await useAuthApi.isAuthenticated();

  if (!isAuthenticated.data && to.name !== 'login')
  {
    AuthUser.isAuthenticated = false;
    return next({ name: 'login' });
  }

  AuthUser.isAuthenticated = true;
  AuthUser.setUserData(isAuthenticated.data);


  if (isAuthenticated.data && to.meta.guest)
  {
    return next({ name: 'dashboard' });
  }


  useLoadingSpinner.hide();
  return next();
})
export default router
