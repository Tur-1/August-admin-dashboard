const CouponsRoutes = [

    {
        path: '/coupons',
        name: 'coupons',
        component: () => import('@/pages/Coupons/views/index.vue'),
        meta: {
            title: 'coupons'
        }

    },
    {
        path: "/coupons/create",
        name: "couponsCreate",
        component: () => import('@/pages/Coupons/views/Create.vue')
        ,
        meta: {
            title: 'coupons'
        }
    }, {
        path: "/coupons/:id/edit",
        name: "couponsEdit",
        component: () => import('@/pages/Coupons/views/Edit.vue'),
        meta: {
            title: 'coupons'
        }
    }

];


export default CouponsRoutes;