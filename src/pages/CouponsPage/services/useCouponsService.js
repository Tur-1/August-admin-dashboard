import useCouponsApi from "@/pages/CouponsPage/api/useCouponsApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import useUserStore from "@/Auth/store/userStore";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import useRouterService from "@/router/useRouterService";
import useCouponsStore from "@/pages/CouponsPage/stores/CouponsStore";


const AuthUser = useUserStore();
export default function useCouponsService()
{
    const couponStore = useCouponsStore();
    const getAllCoupons = async ({ url } = {}) =>
    {


        let response = await useCouponsApi.getCoupons({
            url: url,
        });

        couponStore.coupons = response.data.data;
        couponStore.paginationLinks = response.data.meta.pagination.links;

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

            FormStore.setErrors(error);
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

            FormStore.setErrors(error);
        }

        FormStore.hideProgress();

    };
    const deleteCoupon = async () =>
    {

        useConfirmModal.showLoading()
        let response = await useCouponsApi.deleteCoupon(couponStore.coupon_id.id);

        couponStore.coupons.splice(couponStore.coupon_id.index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading()

    };
    const showCoupon = async (id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();

        let response = await useCouponsApi.getCoupon(id);

        FormStore.setFields(response.data.coupon);

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