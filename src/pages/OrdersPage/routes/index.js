const OrdersRoutes = [

    {
        path: '/orders',
        name: 'orders',
        component: () => import('@/pages/OrdersPage/views/index.vue'),

        meta: {
            title: 'orders',
            permission: 'access-orders'
        }
    },
    {
        path: "/orders/:id/edit",
        name: "ordersEdit",
        component: () => import('@/pages/OrdersPage/views/Edit.vue'),
        meta: {
            title: 'orders',
            permission: 'view-orders'
        }
    }

];


export default OrdersRoutes;