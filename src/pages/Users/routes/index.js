const UsersRoutes = [

    {
        path: '/users',
        name: 'users',
        component: () => import('@/pages/Users/views/index.vue'),
        meta: {
            title: 'users'
        }
    },
    {
        path: "/users/create",
        name: "usersCreate",
        component: () => import('@/pages/Users/views/Create.vue')
        ,
        meta: {
            title: 'users'
        }
    }, {
        path: "/users/:id/edit",
        name: "usersEdit",
        component: () => import('@/pages/Users/views/Edit.vue'),
        meta: {
            title: 'users'
        }
    }

];


export default UsersRoutes;