const UsersRoutes = [

    {
        path: '/users',
        name: 'users',
        component: () => import('@/pages/UsersPage/views/index.vue'),
        meta: {
            title: 'users'
        }
    },
    {
        path: "/users/create",
        name: "usersCreate",
        component: () => import('@/pages/UsersPage/views/Create.vue')
        ,
        meta: {
            title: 'users'
        }
    }, {
        path: "/users/:id/edit",
        name: "usersEdit",
        component: () => import('@/pages/UsersPage/views/Edit.vue'),
        meta: {
            title: 'users'
        }
    }

];


export default UsersRoutes;