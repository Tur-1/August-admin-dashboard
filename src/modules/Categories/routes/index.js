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
    },
    {
        path: "/categories/section/create",
        name: "sectionCreate",
        component: () => import('@/modules/Categories/views/SectionCreate.vue')
    }, {
        path: "/categories/section/:id/edit",
        name: "sectionEdit",
        component: () => import('@/modules/Categories/views/SectionEdit.vue')
    }

];


export default CategoriesRoutes;