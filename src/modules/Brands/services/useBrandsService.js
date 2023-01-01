
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import BrandsStore from "@/modules/Brands/stores/BrandsStore";
import useBrandsApi from "@/modules/Brands/api/useBrandsApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import { appendFormData } from "@/helpers";


export default function useBrandsService()
{

    const getAllBrands = async () =>
    {

        let response = await useBrandsApi.getAll();

        BrandsStore.value.filtered = response.data.data;
        BrandsStore.value.list = response.data;
        BrandsStore.value.pagination = response.data.pagination;




    }
    const storeNewBrand = async (formData) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            const formData = appendFormData(FormStore.fields);

            let response = await useBrandsApi.storeNewBrand(formData);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.message);

        } catch (error)
        {

            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const updateBrand = async (formData) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();


        try
        {

            const formData = appendFormData(FormStore.fields);
            let response = await useBrandsApi.updateBrand({
                id: FormStore.fields.id,
                fields: formData
            });

            FormStore.setFields(response.data.brand);

            useToastNotification.open(response.data.message);
        } catch (error)
        {

            FormStore.setErrors(error.response);
        }

        FormStore.hideProgress();

    };
    const deleteBrand = async ({ id, index }) =>
    {
        useConfirmModal.onProgress(true)
        let response = await useBrandsApi.deleteBrand(id);

        BrandsStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.message);

        useConfirmModal.onProgress(false)

    };
    const showBrand = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();


        let response = await useBrandsApi.getBrand(route.params.id);

        FormStore.setFields(response.data.brand);

        useLoadingSpinner.hide();

    };



    return {
        updateBrand,
        storeNewBrand,
        getAllBrands,
        deleteBrand,
        showBrand
    }

}