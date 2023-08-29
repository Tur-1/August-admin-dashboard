
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import useBrandsStore from "@/pages/BrandsPage/stores/BrandsStore";
import useBrandsApi from "@/pages/BrandsPage/api/useBrandsApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";

import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import { appendFormData, skeletonLoading } from "@/helpers";


export default function useBrandsService()
{

    const BrandsStore = useBrandsStore();
    const getAllBrands = async () =>
    {

        skeletonLoading.show();
        let response = await useBrandsApi.getAll();

        BrandsStore.brands = response.data.data;
        BrandsStore.paginationLinks = response.data.meta.pagination.links;

        skeletonLoading.hide();

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
    const deleteBrand = async () =>
    {

        useConfirmModal.showLoading()
        let response = await useBrandsApi.deleteBrand(BrandsStore.brand_id.id);

        BrandsStore.brands.splice(BrandsStore.brand_id.index, 1);
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

    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        BrandsStore.brand_id.id = id;
        BrandsStore.brand_id.index = index;
    };

    return {
        updateBrand,
        storeNewBrand,
        getAllBrands,
        deleteBrand,
        showBrand,
        openConfirmModal
    }

}