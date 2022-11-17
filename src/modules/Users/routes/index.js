const UsersRoutes = [

    {
        path: '/users',
        name: 'users',
        component: () => import('@/modules/Users/views/index.vue'),

    },
    {
        path: "/users/create",
        name: "usersCreate",
        component: () => import('@/modules/Users/views/Create.vue')
    }, {
        path: "/users/:id/edit",
        name: "usersEdit",
        component: () => import('@/modules/Users/views/Edit.vue')
    }

];


export default UsersRoutes;