const BannerRoutes = [

    {
        path: '/banners',
        name: 'banners',
        component: () => import('@/modules/AugustBanners/views/index.vue'),

    },
    {
        path: "/banners/create",
        name: "bannersCreate",
        component: () => import('@/modules/AugustBanners/views/Create.vue')
    }, {
        path: "/banners/:id/edit",
        name: "bannersEdit",
        component: () => import('@/modules/AugustBanners/views/Edit.vue')
    }

];


export default BannerRoutes;