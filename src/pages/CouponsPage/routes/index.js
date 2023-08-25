const CouponsRoutes = [

    {
        path: '/coupons',
        name: 'coupons',
        component: () => import('@/pages/CouponsPage/views/index.vue'),
        meta: {
            title: 'coupons',
            permission: 'access-coupons'
        }

    },
    {
        path: "/coupons/create",
        name: "couponsCreate",
        component: () => import('@/pages/CouponsPage/views/Create.vue')
        ,
        meta: {
            title: 'coupons',
            permission: 'create-coupons'
        }
    }, {
        path: "/coupons/:id/edit",
        name: "couponsEdit",
        component: () => import('@/pages/CouponsPage/views/Edit.vue'),
        meta: {
            title: 'coupons',
            permission: 'update-coupons'
        }
    }

];


export default CouponsRoutes;