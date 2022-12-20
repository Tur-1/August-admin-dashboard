const ReviewsRoutes = [

    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('@/modules/Reviews/views/index.vue'),

    },
    {
        path: "/reviews/create",
        name: "reviewsCreate",
        component: () => import('@/modules/Reviews/views/Create.vue')
    }, {
        path: "/reviews/:id/edit",
        name: "reviewsEdit",
        component: () => import('@/modules/Reviews/views/Edit.vue')
    }

];


export default ReviewsRoutes;