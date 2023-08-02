const BannerRoutes = [

    {
        path: '/banners',
        name: 'banners',
        component: () => import('@/pages/AugustBanners/views/index.vue'),
        meta: {
            title: 'banners',
            permissions: 'access-banners',
        }
    },
    {
        path: "/banners/create",
        name: "bannersCreate",
        component: () => import('@/pages/AugustBanners/views/Create.vue'),

        meta: {
            title: 'banners',
            permissions: 'create-banners',
        }
    }, {
        path: "/banners/:id/edit",
        name: "bannersEdit",
        component: () => import('@/pages/AugustBanners/views/Edit.vue'),
        meta: {
            title: 'banners',
            permissions: 'update-banners',
        }
    }

];


export default BannerRoutes;