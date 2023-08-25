const AdminsRoutes = [

    {
        path: '/admins',
        name: 'admins',
        component: () => import('@/pages/AdminsPage/views/index.vue'),
        meta: {
            title: 'Admins',
            permission: 'access-admins'
        }
    },
    {
        path: "/admins/create",
        name: "adminsCreate",
        component: () => import('@/pages/AdminsPage/views/Create.vue')
        ,
        meta: {
            title: 'Admins',
            permission: 'create-admins'
        }
    }, {
        path: "/admins/:id/edit",
        name: "adminsEdit",
        component: () => import('@/pages/AdminsPage/views/Edit.vue'),
        meta: {
            title: 'Admins',
            permission: 'update-admins'

        }
    }

];


export default AdminsRoutes;