const BrandsRoutes = [

    {
        path: '/brands',
        name: 'brands',
        component: () => import('@/pages/BrandsPage/views/index.vue'),
        meta: {
            title: 'brands',
            permission: 'access-brands'
        }

    },
    {
        path: "/brands/create",
        name: "brandsCreate",
        component: () => import('@/pages/BrandsPage/views/Create.vue'),
        meta: {
            title: 'brands',
            permission: 'create-brands'
        }
    }, {
        path: "/brands/:id/edit",
        name: "brandsEdit",
        component: () => import('@/pages/BrandsPage/views/Edit.vue'),
        meta: {
            title: 'brands',
            permission: 'update-brands'
        }
    }

];


export default BrandsRoutes;