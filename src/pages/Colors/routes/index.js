const ColorsRoutes = [

    {
        path: '/colors',
        name: 'colors',
        component: () => import('@/pages/Colors/views/index.vue'),
        meta: {
            title: 'colors'
        }

    },
    {
        path: "/colors/create",
        name: "colorsCreate",
        component: () => import('@/pages/Colors/views/Create.vue'),
        meta: {
            title: 'colors'
        }
    }, {
        path: "/colors/:id/edit",
        name: "colorsEdit",
        component: () => import('@/pages/Colors/views/Edit.vue'),
        meta: {
            title: 'colors'
        }
    }

];


export default ColorsRoutes;