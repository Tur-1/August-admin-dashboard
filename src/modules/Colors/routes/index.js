const ColorsRoutes = [

    {
        path: '/colors',
        name: 'colors',
        component: () => import('@/modules/Colors/views/index.vue'),

    },
    {
        path: "/colors/create",
        name: "colorsCreate",
        component: () => import('@/modules/Colors/views/Create.vue')
    }, {
        path: "/colors/:id/edit",
        name: "colorsEdit",
        component: () => import('@/modules/Colors/views/Edit.vue')
    }

];


export default ColorsRoutes;