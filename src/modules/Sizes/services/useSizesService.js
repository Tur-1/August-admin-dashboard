import useSizesApi from "@/modules/Sizes/api/useSizesApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import AuthUser from "@/Auth/store/AuthUser";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import SizesStore from "@/modules/Sizes/stores/SizesStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import useRouterService from "@/router/useRouterService";



export default function useSizesService()
{

    const getAllSizes = async ({ url } = {}) =>
    {

        if (AuthUser.userCanAccess('access-size-options'))
        {
            let response = await useSizesApi.getSizes({
                url: url,
            });

            SizesStore.value.filtered = response.data.data;
            SizesStore.value.list = response.data;
            SizesStore.value.pagination = response.data.pagination;

        }
    }
    const storeNewSize = async () =>
    {
        if (AuthUser.userCanAccess('create-size-options'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();

            try
            {
                let response = await useSizesApi.storeNewSize(FormStore.fields);

                FormStore.clearFields();

                useRouterService.redirectBack();

                useToastNotification.open(response.data.message);

            } catch (error)
            {

                FormStore.setErrors(error.response);
            }
            FormStore.hideProgress();
        }
    };
    const updateSize = async (id) =>
    {
        if (AuthUser.userCanAccess('update-size-options'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();

            try
            {

                let response = await useSizesApi.updateSize(FormStore.fields, id);


                FormStore.setFields(response.data.size);


                useToastNotification.open(response.data.message);
            } catch (error)
            {

                FormStore.setErrors(error.response);
            }

            FormStore.hideProgress();
        }
    };
    const deleteSize = async ({ id, index }) =>
    {
        if (AuthUser.userCanAccess('delete-size-options'))
        {
            useConfirmModal.onProgress(true)
            let response = await useSizesApi.deleteSize(id);

            SizesStore.value.filtered.splice(index, 1);
            useConfirmModal.close();

            useToastNotification.open(response.data.message);

            useConfirmModal.onProgress(false)
        }
    };
    const showSize = async () =>
    {
        if (AuthUser.userCanAccess('view-size-options'))
        {
            useLoadingSpinner.show();
            FormStore.clearErrors();

            const route = useRoute();

            let response = await useSizesApi.getSize(route.params.id);

            FormStore.setFields(response.data.size);

            useLoadingSpinner.hide();
        }
    };




    return {
        updateSize,
        storeNewSize,
        getAllSizes,
        deleteSize,
        showSize
    }

}