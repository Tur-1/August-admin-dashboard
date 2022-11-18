const CategoriesRoutes = [

    {
        path: '/categories',
        name: 'categories',
        component: () => import('@/modules/Categories/views/index.vue'),

    },
    {
        path: "/categories/create",
        name: "categoriesCreate",
        component: () => import('@/modules/Categories/views/Create.vue')
    }, {
        path: "/categories/:id/edit",
        name: "categoriesEdit",
        component: () => import('@/modules/Categories/views/Edit.vue')
    }

];


export default CategoriesRoutes;