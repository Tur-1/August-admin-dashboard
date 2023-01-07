const BannerRoutes = [

    {
        path: '/banners',
        name: 'banners',
        component: () => import('@/modules/AugustBanners/views/index.vue'),
        meta: {
            title: 'banners'
        }
    },
    {
        path: "/banners/create",
        name: "bannersCreate",
        component: () => import('@/modules/AugustBanners/views/Create.vue'),

        meta: {
            title: 'banners'
        }
    }, {
        path: "/banners/:id/edit",
        name: "bannersEdit",
        component: () => import('@/modules/AugustBanners/views/Edit.vue'),
        meta: {
            title: 'banners'
        }
    }

];


export default BannerRoutes;