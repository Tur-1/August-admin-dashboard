const ColorsRoutes = [

    {
        path: '/colors',
        name: 'colors',
        component: () => import('@/modules/Colors/views/index.vue'),
        meta: {
            title: 'colors'
        }

    },
    {
        path: "/colors/create",
        name: "colorsCreate",
        component: () => import('@/modules/Colors/views/Create.vue'),
        meta: {
            title: 'colors'
        }
    }, {
        path: "/colors/:id/edit",
        name: "colorsEdit",
        component: () => import('@/modules/Colors/views/Edit.vue'),
        meta: {
            title: 'colors'
        }
    }

];


export default ColorsRoutes;