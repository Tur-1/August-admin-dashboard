const ColorsRoutes = [

    {
        path: '/colors',
        name: 'colors',
        component: () => import('@/pages/ColorsPage/views/index.vue'),
        meta: {
            title: 'colors'
        }

    },
    {
        path: "/colors/create",
        name: "colorsCreate",
        component: () => import('@/pages/ColorsPage/views/Create.vue'),
        meta: {
            title: 'colors'
        }
    }, {
        path: "/colors/:id/edit",
        name: "colorsEdit",
        component: () => import('@/pages/ColorsPage/views/Edit.vue'),
        meta: {
            title: 'colors'
        }
    }

];


export default ColorsRoutes;