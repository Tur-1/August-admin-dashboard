
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import useBannersStore from "@/pages/BannersPage/stores/BannersStore";
import useBannersApi from "@/pages/BannersPage/api/useBannersApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { appendFormData, isNotFound, skeletonLoading } from "@/helpers";
import useAuthStore from "@/Auth/store/AuthStore";





export default function useBannersService()
{
    const authStore = useAuthStore();

    const BannersStore = useBannersStore();
    const getAllBanners = async () =>
    {
        skeletonLoading.show();


        try
        {
            let response = await useBannersApi.getAll();

            BannersStore.banners = response.data;

        } catch (error)
        {

        }
        skeletonLoading.hide();

    }
    const storeNewBanner = async () =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();
        try
        {
            const formData = appendFormData(FormStore.fields);

            let response = await useBannersApi.storeNewBanner(formData);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

        }
        FormStore.hideProgress();


    };
    const updateBanner = async () =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();


        try
        {

            const formData = appendFormData(FormStore.fields);


            let response = await useBannersApi.updateBanner({
                id: FormStore.fields.id,
                fields: formData
            });

            FormStore.setFields(response.data.banner);

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }

        FormStore.hideProgress();

    };
    const deleteBanner = async () =>
    {

        useConfirmModal.showLoading()

        try
        {
            let response = await useBannersApi.deleteBanner(BannersStore.banner_id.id);

            BannersStore.banners.splice(BannersStore.banner_id.index, 1);
            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }

        useConfirmModal.hideLoading()

    };
    const showBanner = async (id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();

        try
        {

            let response = await useBannersApi.getBanner(id);

            FormStore.setFields(response.data.banner);
        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterService.redirectToRoute('banners');
            }
        }

        useLoadingSpinner.hide();

    };
    const publishBanner = async (id) =>
    {

        useLoadingSpinner.show();

        try
        {

            let response = await useBannersApi.publishBanner(id);
            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }

        useLoadingSpinner.hide();

    };

    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        BannersStore.banner_id.id = id;
        BannersStore.banner_id.index = index;
    };


    return {
        updateBanner,
        storeNewBanner,
        getAllBanners,
        deleteBanner,
        publishBanner,
        showBanner,
        openConfirmModal
    }

}