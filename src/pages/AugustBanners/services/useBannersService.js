
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import BannersStore from "@/pages/AugustBanners/stores/BannersStore";
import useBannersApi from "@/pages/AugustBanners/api/useBannersApi";
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
        if (AuthUser.userCanAccess('create-banners'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();
            try
            {
                const formData = appendFormData(FormStore.fields);

                let response = await useBannersApi.storeNewBanner(formData);

                FormStore.clearFields();

                useRouterService.redirectBack();

                useToastNotification.open(response.data.message);

            } catch (error)
            {
                if (error.response.status == 403)
                {
                    useRouterService.redirectToRoute('Forbidden');

                }

                console.log(error.response);
                FormStore.setErrors(error.response);
            }
            FormStore.hideProgress();
        }

    };
    const updateBanner = async () =>
    {
        if (AuthUser.userCanAccess('update-banners'))
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

                useToastNotification.open(response.data.message);
            } catch (error)
            {

                FormStore.setErrors(error.response);
            }

            FormStore.hideProgress();
        }
    };
    const deleteBanner = async ({ id, index }) =>
    {
        if (AuthUser.userCanAccess('delete-banners'))
        {
            useConfirmModal.onProgress(true)
            let response = await useBannersApi.deleteBanner(id);

            BannersStore.value.filtered.splice(index, 1);
            useConfirmModal.close();

            useToastNotification.open(response.data.message);

            useConfirmModal.onProgress(false)
        }
    };
    const showBanner = async () =>
    {
        if (AuthUser.userCanAccess('view-banners'))
        {
            useLoadingSpinner.show();
            FormStore.clearErrors();

            const route = useRoute();

            let response = await useBannersApi.getBanner(route.params.id);

            FormStore.setFields(response.data.banner);

            useLoadingSpinner.hide();
        }
    };
    const publishBanner = async (id) =>
    {
        if (AuthUser.userCanAccess('access-banners'))
        {
            useLoadingSpinner.show();


            let response = await useBannersApi.publishBanner(id);
            useToastNotification.open(response.data.message);

            useLoadingSpinner.hide();
        }
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