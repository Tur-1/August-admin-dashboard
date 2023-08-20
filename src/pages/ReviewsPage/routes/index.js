const ReviewsRoutes = [

    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('@/pages/ReviewsPage/views/index.vue'),
        meta: {
            title: 'reviews'
        }

    },
    {
        path: "/reviews/create",
        name: "reviewsCreate",
        component: () => import('@/pages/ReviewsPage/views/Create.vue'),
        meta: {
            title: 'reviews'
        }
    }, {
        path: "/reviews/:id/edit",
        name: "reviewsEdit",
        component: () => import('@/pages/ReviewsPage/views/Edit.vue'),
        meta: {
            title: 'reviews'
        }
    }

];


export default ReviewsRoutes;