const OrdersRoutes = [

    {
        path: '/orders',
        name: 'orders',
        component: () => import('@/modules/Orders/views/index.vue'),

    },
    {
        path: "/orders/:id/edit",
        name: "ordersEdit",
        component: () => import('@/modules/Orders/views/Edit.vue')
    }

];


export default OrdersRoutes;