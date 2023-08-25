const ProductsRoutes = [

    {
        path: '/products',
        name: 'products',
        component: () => import('@/pages/ProductsPage/views/index.vue'),
        meta: {
            title: 'products',
            permission: 'access-products'
        }

    }, {
        path: "/products/:id/edit",
        name: "productsEdit",
        component: () => import('@/pages/ProductsPage/views/Edit.vue'),
        meta: {
            title: 'products',
            permission: 'update-products'
        }
    }

];


export default ProductsRoutes;