const BrandsRoutes = [

    {
        path: '/brands',
        name: 'brands',
        component: () => import('@/modules/Brands/views/index.vue'),

    },
    {
        path: "/brands/create",
        name: "brandsCreate",
        component: () => import('@/modules/Brands/views/Create.vue')
    }, {
        path: "/brands/:id/edit",
        name: "brandsEdit",
        component: () => import('@/modules/Brands/views/Edit.vue')
    }

];


export default BrandsRoutes;