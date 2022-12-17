import useSizesApi from "@/modules/Sizes/api/useSizesApi";
import useToastNotification from "@/components/Toast/useToastNotification";

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


        let response = await useSizesApi.getSizes({
            url: url,
        });

        SizesStore.value.filtered = response.data.data;
        SizesStore.value.list = response.data;
        SizesStore.value.pagination = response.data.pagination;


    }
    const storeNewSize = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            let response = await useSizesApi.storeNewSize(FormStore.fields);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);

        } catch (error)
        {

            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const updateSize = async (id) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            let response = await useSizesApi.updateSize(FormStore.fields, id);


            FormStore.setFields(response.data.data.size);


            useToastNotification.open(response.data.data.message);
        } catch (error)
        {

            FormStore.setErrors(error.response);
        }

        FormStore.hideProgress();

    };
    const deleteSize = async ({ id, index }) =>
    {
        useConfirmModal.onProgress(true)
        let response = await useSizesApi.deleteSize(id);

        SizesStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        useConfirmModal.onProgress(false)

    };
    const showSize = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();

        let response = await useSizesApi.getSize(route.params.id);

        FormStore.setFields(response.data.data.size);

        useLoadingSpinner.hide();

    };




    return {
        updateSize,
        storeNewSize,
        getAllSizes,
        deleteSize,
        showSize
    }

}