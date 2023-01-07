const SizesRoutes = [

    {
        path: '/sizes',
        name: 'sizes',
        component: () => import('@/modules/Sizes/views/index.vue'),

        meta: {
            title: 'sizes options'
        }
    },
    {
        path: "/sizes/create",
        name: "sizesCreate",
        component: () => import('@/modules/Sizes/views/Create.vue'),
        meta: {
            title: 'sizes options'
        }
    }, {
        path: "/sizes/:id/edit",
        name: "sizesEdit",
        component: () => import('@/modules/Sizes/views/Edit.vue'),
        meta: {
            title: 'size options'
        }
    }

];


export default SizesRoutes;