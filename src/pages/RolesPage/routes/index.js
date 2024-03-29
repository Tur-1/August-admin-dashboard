const RolesRoutes = [

    {
        path: '/roles',
        name: 'roles',
        component: () => import('@/pages/RolesPage/views/index.vue'),
        meta: {
            title: 'roles',
            permission: 'access-roles'
        }

    },
    {
        path: "/roles/create",
        name: "rolesCreate",
        component: () => import('@/pages/RolesPage/views/Create.vue'),
        meta: {
            title: 'roles',
            permission: 'create-roles'
        }
    }, {
        path: "/roles/:id/edit",
        name: "rolesEdit",
        component: () => import('@/pages/RolesPage/views/Edit.vue'),
        meta: {
            title: 'roles',
            permission: 'update-roles'
        }
    }

];


export default RolesRoutes;