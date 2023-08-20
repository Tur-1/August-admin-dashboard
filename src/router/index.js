
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/pages/DashboardPage/index.vue'
import UsersRoutes from '@/pages/UsersPage/routes'
import CategoriesRoutes from '@/pages/CategoriesPage/routes'
import BrandsRoutes from '@/pages/BrandsPage/routes'
import SizesRoutes from '@/pages/SizesPage/routes'
import CouponsRoutes from '@/pages/CouponsPage/routes'
import RolesRoutes from '@/pages/RolesPage/routes'
import ReviewsRoutes from '@/pages/ReviewsPage/routes'
import ProductsRoutes from '@/pages/ProductsPage/routes'
import OrdersRoutes from '@/pages/OrdersPage/routes'
import useRouterService from '@/router/useRouterService'
import BannerRoutes from '@/pages/BannersPage/routes'
import useUserStore from '@/Auth/store/userStore'
import ColorsRoutes from '@/pages/ColorsPage/routes'
import ErrorsRoutes from '@/pages/Errors/routes'


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


  ],

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
