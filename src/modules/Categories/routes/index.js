const CategoriesRoutes = [

    {
        path: '/categories',
        name: 'categories',
        component: () => import('@/modules/Categories/views/index.vue'),
        meta: {
            title: 'categories'
        }

    },
    {
        path: "/categories/create",
        name: "categoriesCreate",
        component: () => import('@/modules/Categories/views/Create.vue'),
        meta: {
            title: 'categories'
        }
    }, {
        path: "/categories/:id/edit",
        name: "categoriesEdit",
        component: () => import('@/modules/Categories/views/Edit.vue'),
        meta: {
            title: 'categories'
        }
    },
    {
        path: "/categories/section/create",
        name: "sectionCreate",
        component: () => import('@/modules/Categories/views/SectionCreate.vue'),
        meta: {
            title: 'categories'
        }
    }, {
        path: "/categories/section/:id/edit",
        name: "sectionEdit",
        component: () => import('@/modules/Categories/views/SectionEdit.vue'),
        meta: {
            title: 'categories'
        }
    }

];


export default CategoriesRoutes;