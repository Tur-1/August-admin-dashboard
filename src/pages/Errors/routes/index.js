const ErrorsRoutes = [

    {
        path: '/Forbidden',
        name: 'Forbidden',
        component: () => import('@/pages/Errors/views/Forbidden.vue'),
        meta: {
            title: 'Forbidden'
        }

    },
    {
        path: '/:pathMatch(.*)*',
        name: 'pageNotFound',
        meta: {
            title: 'Not Found',
        },
        component: () => import('@/pages/Errors/views/NotFound.vue'),

    },


];


export default ErrorsRoutes;