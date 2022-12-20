const ProductsRoutes = [

    {
        path: '/products',
        name: 'products',
        component: () => import('@/modules/Products/views/index.vue'),

    },
    {
        path: "/products/create",
        name: "productsCreate",
        component: () => import('@/modules/Products/views/Create.vue')
    }, {
        path: "/products/:id/edit",
        name: "productsEdit",
        component: () => import('@/modules/Products/views/Edit.vue')
    }

];


export default ProductsRoutes;