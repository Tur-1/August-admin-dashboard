import useReviewsApi from "@/pages/ReviewsPage/api/useReviewsApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import useReviewsStore from "@/pages/ReviewsPage/stores/ReviewsStore";
import useRouterService from "@/router/useRouterService";
import { isNotFound, skeletonLoading } from "@/helpers";


export default function useReviewsService()
{

    const reviewsStore = useReviewsStore();
    const getAllReviews = async ({ url } = {}) =>
    {

        skeletonLoading.show();
        try
        {
            let response = await useReviewsApi.getReviews({
                url: url,
            });

            reviewsStore.reviews = response.data.data;
            reviewsStore.paginationLinks = response.data.meta.links;
        } catch (error)
        {

        }
        skeletonLoading.hide();

    }


    const deleteReview = async () =>
    {

        useConfirmModal.showLoading();
        try
        {
            let response = await useReviewsApi.deleteReview(reviewsStore.review_id.id);

            reviewsStore.reviews.splice(reviewsStore.review_id.index, 1);
            useConfirmModal.close();
            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }
        useConfirmModal.hideLoading();

    };
    const showReview = async (review_id) =>
    {

        reviewsStore.showLoading();
        FormStore.clearErrors();


        try
        {
            let response = await useReviewsApi.getReview(review_id);


            reviewsStore.reviews.push(response.data.review);
            reviewsStore.reviews.push(response.data.review?.reply);
        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterService.redirectToRoute('reviews');
            }
        }



        reviewsStore.hideLoading();

    };

    const replyReview = async (review_id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();

        try
        {
            let response = await useReviewsApi.replyReview(review_id, FormStore.fields);

            reviewsStore.reviews[1] = response.data.review.reply;
            FormStore.clearFields();

            const reviewReplyForm = new bootstrap.Collapse('#review-reply-form')
        
                reviewReplyForm.hide();
        
        } catch (error)
        {

        }

        useLoadingSpinner.hide();

    };

    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        reviewsStore.review_id.id = id;
        reviewsStore.review_id.index = index;
    };
    return {
        getAllReviews,
        deleteReview,
        showReview,
        openConfirmModal,
        replyReview
    }

}