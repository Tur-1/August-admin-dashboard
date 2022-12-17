const SizesRoutes = [

    {
        path: '/sizes',
        name: 'sizes',
        component: () => import('@/modules/Sizes/views/index.vue'),

    },
    {
        path: "/sizes/create",
        name: "sizesCreate",
        component: () => import('@/modules/Sizes/views/Create.vue')
    }, {
        path: "/sizes/:id/edit",
        name: "sizesEdit",
        component: () => import('@/modules/Sizes/views/Edit.vue')
    }

];


export default SizesRoutes;