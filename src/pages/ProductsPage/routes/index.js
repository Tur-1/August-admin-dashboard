const ProductsRoutes = [

    {
        path: '/products',
        name: 'products',
        component: () => import('@/pages/ProductsPage/views/index.vue'),
        meta: {
            title: 'products'
        }

    }, {
        path: "/products/:id/edit",
        name: "productsEdit",
        component: () => import('@/pages/ProductsPage/views/Edit.vue'),
        meta: {
            title: 'products'
        }
    }

];


export default ProductsRoutes;