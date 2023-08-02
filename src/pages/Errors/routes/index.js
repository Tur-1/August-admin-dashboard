const ErrorsRoutes = [

    {
        path: '/Forbidden',
        name: 'Forbidden',
        component: () => import('@/pages/Errors/views/Forbidden.vue'),
        meta: {
            title: 'Forbidden'
        }

    },


];


export default ErrorsRoutes;