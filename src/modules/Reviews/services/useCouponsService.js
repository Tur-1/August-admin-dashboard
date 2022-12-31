import useCouponsApi from "@/modules/Coupons/api/useCouponsApi";
import useToastNotification from "@/components/Toast/useToastNotification";

import { useLoadingSpinner } from "@/components/LoadingSpinner";
import CouponsStore from "@/modules/Coupons/stores/CouponsStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import useRouterService from "@/router/useRouterService";



export default function useCouponsService()
{

    const getAllCoupons = async ({ url } = {}) =>
    {


        let response = await useCouponsApi.getCoupons({
            url: url,
        });

        CouponsStore.value.filtered = response.data;
        CouponsStore.value.list = response.data;
        CouponsStore.value.pagination = response.data.meta.pagination;


    }
    const storeNewCoupon = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            let response = await useCouponsApi.storeNewCoupon(FormStore.fields);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.message);

        } catch (error)
        {

            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const updateCoupon = async (id) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            let response = await useCouponsApi.updateCoupon(FormStore.fields, id);


            FormStore.setFields(response.data.coupon);


            useToastNotification.open(response.data.message);
        } catch (error)
        {

            FormStore.setErrors(error.response);
        }

        FormStore.hideProgress();

    };
    const deleteCoupon = async ({ id, index }) =>
    {
        useConfirmModal.onProgress(true)
        let response = await useCouponsApi.deleteCoupon(id);

        CouponsStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.message);

        useConfirmModal.onProgress(false)

    };
    const showCoupon = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();

        let response = await useCouponsApi.getCoupon(route.params.id);

        FormStore.setFields(response.data.coupon);

        useLoadingSpinner.hide();

    };




    return {
        updateCoupon,
        storeNewCoupon,
        getAllCoupons,
        deleteCoupon,
        showCoupon
    }

}