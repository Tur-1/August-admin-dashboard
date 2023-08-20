const OrdersRoutes = [

    {
        path: '/orders',
        name: 'orders',
        component: () => import('@/pages/OrdersPage/views/index.vue'),

        meta: {
            title: 'orders'
        }
    },
    {
        path: "/orders/:id/edit",
        name: "ordersEdit",
        component: () => import('@/pages/OrdersPage/views/Edit.vue'),
        meta: {
            title: 'orders'
        }
    }

];


export default OrdersRoutes;