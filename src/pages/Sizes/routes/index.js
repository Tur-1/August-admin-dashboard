const SizesRoutes = [

    {
        path: '/sizes',
        name: 'sizes',
        component: () => import('@/pages/Sizes/views/index.vue'),

        meta: {
            title: 'sizes options'
        }
    },
    {
        path: "/sizes/create",
        name: "sizesCreate",
        component: () => import('@/pages/Sizes/views/Create.vue'),
        meta: {
            title: 'sizes options'
        }
    }, {
        path: "/sizes/:id/edit",
        name: "sizesEdit",
        component: () => import('@/pages/Sizes/views/Edit.vue'),
        meta: {
            title: 'size options'
        }
    }

];


export default SizesRoutes;