import useCouponsApi from "@/pages/CouponsPage/api/useCouponsApi";
import useToastNotification from "@/components/Toast/useToastNotification";

import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import useRouterService from "@/router/useRouterService";
import useCouponsStore from "@/pages/CouponsPage/stores/CouponsStore";
import { isNotFound, skeletonLoading } from "@/helpers";



export default function useCouponsService()
{
    const couponStore = useCouponsStore();
    const getAllCoupons = async ({ url } = {}) =>
    {
        skeletonLoading.show();
        try
        {

            let response = await useCouponsApi.getCoupons({
                url: url,
            });

            couponStore.coupons = response.data.data;
            couponStore.paginationLinks = response.data.meta.links;
        } catch (error)
        {

        }
        skeletonLoading.hide();

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

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {


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


            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {


        }

        FormStore.hideProgress();

    };
    const deleteCoupon = async () =>
    {

        useConfirmModal.showLoading()

        try
        {
            let response = await useCouponsApi.deleteCoupon(couponStore.coupon_id.id);

            couponStore.coupons.splice(couponStore.coupon_id.index, 1);
            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }

        useConfirmModal.hideLoading()

    };
    const showCoupon = async (id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();

        try
        {

            let response = await useCouponsApi.getCoupon(id);

            FormStore.setFields(response.data.coupon);

        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterService.redirectToRoute('coupons');
            }
        }
        useLoadingSpinner.hide();

    };

    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        couponStore.coupon_id.id = id;
        couponStore.coupon_id.index = index;
    };



    return {
        updateCoupon,
        storeNewCoupon,
        getAllCoupons,
        deleteCoupon,
        showCoupon,
        openConfirmModal
    }

}