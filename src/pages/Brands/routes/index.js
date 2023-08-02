const BrandsRoutes = [

    {
        path: '/brands',
        name: 'brands',
        component: () => import('@/pages/Brands/views/index.vue'),
        meta: {
            title: 'brands'
        }

    },
    {
        path: "/brands/create",
        name: "brandsCreate",
        component: () => import('@/pages/Brands/views/Create.vue'),
        meta: {
            title: 'brands'
        }
    }, {
        path: "/brands/:id/edit",
        name: "brandsEdit",
        component: () => import('@/pages/Brands/views/Edit.vue'),
        meta: {
            title: 'brands'
        }
    }

];


export default BrandsRoutes;