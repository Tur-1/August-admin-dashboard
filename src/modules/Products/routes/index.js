const ProductsRoutes = [

    {
        path: '/products',
        name: 'products',
        component: () => import('@/modules/Products/views/index.vue'),
        meta: {
            title: 'products'
        }

    },
    {
        path: "/products/create",
        name: "productsCreate",
        component: () => import('@/modules/Products/views/Create.vue'),
        meta: {
            title: 'products'
        }
    }, {
        path: "/products/:id/edit",
        name: "productsEdit",
        component: () => import('@/modules/Products/views/Edit.vue'),
        meta: {
            title: 'products'
        }
    }

];


export default ProductsRoutes;