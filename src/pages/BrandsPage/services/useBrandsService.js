
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import BrandsStore from "@/pages/BrandsPage/stores/BrandsStore";
import useBrandsApi from "@/pages/BrandsPage/api/useBrandsApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";

import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import { appendFormData } from "@/helpers";


export default function useBrandsService()
{

    const getAllBrands = async () =>
    {


        try
        {
            let response = await useBrandsApi.getAll();

            BrandsStore.value.filtered = response.data.data;
            BrandsStore.value.list = response.data;
            BrandsStore.value.pagination = response.data.pagination;
        } catch (error)
        {
            if (error.response.status == 401)
            {
                useRouterService.redirectToRoute('login')
            }

        }


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

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

            FormStore.setErrors(error);
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

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

            FormStore.setErrors(error);
        }

        FormStore.hideProgress();

    };
    const deleteBrand = async ({ id, index }) =>
    {

        useConfirmModal.showLoading()
        let response = await useBrandsApi.deleteBrand(id);

        BrandsStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading()

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