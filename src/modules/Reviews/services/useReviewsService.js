import useReviewsApi from "@/modules/Reviews/api/useReviewsApi";
import useToastNotification from "@/components/Toast/useToastNotification";

import { useLoadingSpinner } from "@/components/LoadingSpinner";
import ReviewsStore from "@/modules/Reviews/stores/ReviewsStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import useRouterService from "@/router/useRouterService";



export default function useReviewsService()
{

    const getAllReviews = async ({ url } = {}) =>
    {

        useLoadingSpinner.show();
        let response = await useReviewsApi.getReviews({
            url: url,
        });

        ReviewsStore.filtered = response.data.data;
        ReviewsStore.list = response.data.data;
        ReviewsStore.pagination = response.data.meta.pagination;
        useLoadingSpinner.hide();

    }
    const storeNewReview = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            let response = await useReviewsApi.storeNewReview(FormStore.fields);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.message);

        } catch (error)
        {

            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const updateReview = async (id) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            let response = await useReviewsApi.updateReview(FormStore.fields, id);


            FormStore.setFields(response.data.Review);


            useToastNotification.open(response.data.message);
        } catch (error)
        {

            FormStore.setErrors(error.response);
        }

        FormStore.hideProgress();

    };
    const deleteReview = async ({ id, index }) =>
    {
        useConfirmModal.onProgress(true)
        let response = await useReviewsApi.deleteReview(id);

        ReviewsStore.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.message);

        useConfirmModal.onProgress(false)

    };
    const showReview = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();

        let response = await useReviewsApi.getReview(route.params.id);

        FormStore.setFields(response.data.Review);

        useLoadingSpinner.hide();

    };




    return {
        updateReview,
        storeNewReview,
        getAllReviews,
        deleteReview,
        showReview
    }

}