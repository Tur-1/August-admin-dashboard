const RolesRoutes = [

    {
        path: '/roles',
        name: 'roles',
        component: () => import('@/modules/Roles/views/index.vue'),

    },
    {
        path: "/roles/create",
        name: "rolesCreate",
        component: () => import('@/modules/Roles/views/Create.vue')
    }, {
        path: "/roles/:id/edit",
        name: "rolesEdit",
        component: () => import('@/modules/Roles/views/Edit.vue')
    }

];


export default RolesRoutes;