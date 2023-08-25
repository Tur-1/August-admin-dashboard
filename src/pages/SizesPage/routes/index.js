const SizesRoutes = [

    {
        path: '/sizes',
        name: 'sizes',
        component: () => import('@/pages/SizesPage/views/index.vue'),

        meta: {
            title: 'sizes options',
            permission: 'access-sizes'
        }
    },
    {
        path: "/sizes/create",
        name: "sizesCreate",
        component: () => import('@/pages/SizesPage/views/Create.vue'),
        meta: {
            title: 'sizes options',
            permission: 'create-sizes'
        }
    }, {
        path: "/sizes/:id/edit",
        name: "sizesEdit",
        component: () => import('@/pages/SizesPage/views/Edit.vue'),
        meta: {
            title: 'size options',
            permission: 'update-sizes'
        }
    }

];


export default SizesRoutes;