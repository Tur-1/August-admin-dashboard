const ReviewsRoutes = [

    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('@/pages/ReviewsPage/views/index.vue'),
        meta: {
            title: 'reviews',
            permission: 'access-reviews'
        }

    },
    {
        path: "/reviews/:id/edit",
        name: "reviewsEdit",
        component: () => import('@/pages/ReviewsPage/views/Edit.vue'),
        meta: {
            title: 'reviews',
            permission: 'view-reviews'
        }
    }

];


export default ReviewsRoutes;