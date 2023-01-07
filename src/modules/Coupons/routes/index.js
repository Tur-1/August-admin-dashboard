const CouponsRoutes = [

    {
        path: '/coupons',
        name: 'coupons',
        component: () => import('@/modules/Coupons/views/index.vue'),
        meta: {
            title: 'coupons'
        }

    },
    {
        path: "/coupons/create",
        name: "couponsCreate",
        component: () => import('@/modules/Coupons/views/Create.vue')
        ,
        meta: {
            title: 'coupons'
        }
    }, {
        path: "/coupons/:id/edit",
        name: "couponsEdit",
        component: () => import('@/modules/Coupons/views/Edit.vue'),
        meta: {
            title: 'coupons'
        }
    }

];


export default CouponsRoutes;