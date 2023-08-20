
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import BannersStore from "@/pages/BannersPage/stores/BannersStore";
import useBannersApi from "@/pages/BannersPage/api/useBannersApi";
import useUserStore from "@/Auth/store/userStore";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import { appendFormData } from "@/helpers";




const AuthUser = useUserStore();
export default function useBannersService()
{

    const getAllBanners = async () =>
    {


        let response = await useBannersApi.getAll();

        BannersStore.value.list = response.data;

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


            FormStore.setErrors(error);
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

            FormStore.setErrors(error);
        }

        FormStore.hideProgress();

    };
    const deleteBanner = async ({ id, index }) =>
    {

        useConfirmModal.showLoading()
        let response = await useBannersApi.deleteBanner(id);

        BannersStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading()

    };
    const showBanner = async (id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();

        let response = await useBannersApi.getBanner(id);

        FormStore.setFields(response.data.banner);

        useLoadingSpinner.hide();

    };
    const publishBanner = async (id) =>
    {

        useLoadingSpinner.show();


        let response = await useBannersApi.publishBanner(id);
        useToastNotification.open().withMessage(response.data.message);

        useLoadingSpinner.hide();

    };




    return {
        updateBanner,
        storeNewBanner,
        getAllBanners,
        deleteBanner,
        publishBanner,
        showBanner
    }

}