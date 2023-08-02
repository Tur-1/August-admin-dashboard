const RolesRoutes = [

    {
        path: '/roles',
        name: 'roles',
        component: () => import('@/pages/Roles/views/index.vue'),
        meta: {
            title: 'roles'
        }

    },
    {
        path: "/roles/create",
        name: "rolesCreate",
        component: () => import('@/pages/Roles/views/Create.vue'),
        meta: {
            title: 'roles'
        }
    }, {
        path: "/roles/:id/edit",
        name: "rolesEdit",
        component: () => import('@/pages/Roles/views/Edit.vue'),
        meta: {
            title: 'roles'
        }
    }

];


export default RolesRoutes;