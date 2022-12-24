
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import ProductsStore from "@/modules/Products/stores/ProductsStore";
import useProductsApi from "@/modules/Products/api/useProductsApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import { appendFormData } from "@/helpers";


export default function useProductsService()
{

    const getAllProducts = async () =>
    {

        let response = await useProductsApi.getAllProducts();

        ProductsStore.value.filtered = response.data.data;
        ProductsStore.value.list = response.data;
        ProductsStore.value.pagination = response.data.pagination;




    }
    const storeNewProduct = async (formData) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();



        try
        {
            appendFormData(formData, FormStore.fields);

            let response = await useProductsApi.storeNewProduct(formData);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);

        } catch (error)
        {

            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const showProduct = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();

        let response = await useProductsApi.getProduct(route.params.id);

        console.log(response.data.data.product);
        FormStore.setFields(response.data.data.product);

        useLoadingSpinner.hide();

    };

    const updateProduct = async (formData) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();


        try
        {

            appendFormData(formData, FormStore.fields);
            let response = await useProductsApi.updateProduct({
                id: FormStore.fields.id,
                fields: formData
            });

            FormStore.setFields(response.data.data.Product);

            useToastNotification.open(response.data.data.message);
        } catch (error)
        {

            FormStore.setErrors(error.response);
        }

        FormStore.hideProgress();

    };
    const deleteProduct = async ({ id, index }) =>
    {
        useConfirmModal.onProgress(true)
        let response = await useProductsApi.deleteProduct(id);

        ProductsStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        useConfirmModal.onProgress(false)

    };



    return {
        updateProduct,
        storeNewProduct,
        getAllProducts,
        deleteProduct,
        showProduct
    }

}