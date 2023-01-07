const RolesRoutes = [

    {
        path: '/roles',
        name: 'roles',
        component: () => import('@/modules/Roles/views/index.vue'),
        meta: {
            title: 'roles'
        }

    },
    {
        path: "/roles/create",
        name: "rolesCreate",
        component: () => import('@/modules/Roles/views/Create.vue'),
        meta: {
            title: 'roles'
        }
    }, {
        path: "/roles/:id/edit",
        name: "rolesEdit",
        component: () => import('@/modules/Roles/views/Edit.vue'),
        meta: {
            title: 'roles'
        }
    }

];


export default RolesRoutes;