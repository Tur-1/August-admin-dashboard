const ProductsRoutes = [

    {
        path: '/products',
        name: 'products',
        component: () => import('@/pages/Products/views/index.vue'),
        meta: {
            title: 'products'
        }

    }, {
        path: "/products/:id/edit",
        name: "productsEdit",
        component: () => import('@/pages/Products/views/Edit.vue'),
        meta: {
            title: 'products'
        }
    }

];


export default ProductsRoutes;