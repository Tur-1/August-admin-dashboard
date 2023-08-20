const CouponsRoutes = [

    {
        path: '/coupons',
        name: 'coupons',
        component: () => import('@/pages/CouponsPage/views/index.vue'),
        meta: {
            title: 'coupons'
        }

    },
    {
        path: "/coupons/create",
        name: "couponsCreate",
        component: () => import('@/pages/CouponsPage/views/Create.vue')
        ,
        meta: {
            title: 'coupons'
        }
    }, {
        path: "/coupons/:id/edit",
        name: "couponsEdit",
        component: () => import('@/pages/CouponsPage/views/Edit.vue'),
        meta: {
            title: 'coupons'
        }
    }

];


export default CouponsRoutes;