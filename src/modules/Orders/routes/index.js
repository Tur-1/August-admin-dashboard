const OrdersRoutes = [

    {
        path: '/orders',
        name: 'orders',
        component: () => import('@/modules/Orders/views/index.vue'),

        meta: {
            title: 'orders'
        }
    },
    {
        path: "/orders/:id/edit",
        name: "ordersEdit",
        component: () => import('@/modules/Orders/views/Edit.vue'),
        meta: {
            title: 'orders'
        }
    }

];


export default OrdersRoutes;