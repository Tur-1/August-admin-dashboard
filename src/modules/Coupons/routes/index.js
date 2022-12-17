const CouponsRoutes = [

    {
        path: '/coupons',
        name: 'coupons',
        component: () => import('@/modules/Coupons/views/index.vue'),

    },
    {
        path: "/coupons/create",
        name: "couponsCreate",
        component: () => import('@/modules/Coupons/views/Create.vue')
    }, {
        path: "/coupons/:id/edit",
        name: "couponsEdit",
        component: () => import('@/modules/Coupons/views/Edit.vue')
    }

];


export default CouponsRoutes;