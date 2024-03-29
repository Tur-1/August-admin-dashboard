const CategoriesRoutes = [

    {
        path: '/categories',
        name: 'categories',
        component: () => import('@/pages/CategoriesPage/views/index.vue'),
        meta: {
            title: 'categories',
            permission: 'access-categories'

        }

    },
    {
        path: "/categories/create",
        name: "categoriesCreate",
        component: () => import('@/pages/CategoriesPage/views/Create.vue'),
        meta: {
            title: 'categories',
            permission: 'create-categories'


        }
    }, {
        path: "/categories/:id/edit",
        name: "categoriesEdit",
        component: () => import('@/pages/CategoriesPage/views/Edit.vue'),
        meta: {
            title: 'categories',
            permission: 'update-categories'

        }
    },
    {
        path: "/categories/section/create",
        name: "sectionCreate",
        component: () => import('@/pages/CategoriesPage/views/SectionCreate.vue'),
        meta: {
            title: 'categories',
            permission: 'create-categories'

        }
    }, {
        path: "/categories/section/:id/edit",
        name: "sectionEdit",
        component: () => import('@/pages/CategoriesPage/views/SectionEdit.vue'),
        meta: {
            title: 'categories',
            permission: 'update-categories'

        }
    }

];


export default CategoriesRoutes;