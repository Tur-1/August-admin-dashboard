const CustomersRoutes = [

    {
        path: '/customers',
        name: 'customers',
        component: () => import('@/pages/CustomersPage/views/index.vue'),
        meta: {
            title: 'customers',
            permission: 'access-customers'
        }
    },
    {
        path: "/customers/create",
        name: "customersCreate",
        component: () => import('@/pages/CustomersPage/views/Create.vue')
        ,
        meta: {
            title: 'customers',
            permission: 'create-customers'
        }
    }, {
        path: "/customers/:id/edit",
        name: "customersEdit",
        component: () => import('@/pages/CustomersPage/views/Edit.vue'),
        meta: {
            title: 'customers',
            permission: 'update-customers'
        }
    }

];


export default CustomersRoutes;