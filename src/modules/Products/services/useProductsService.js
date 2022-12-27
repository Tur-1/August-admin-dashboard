
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import ProductsStore from "@/modules/Products/stores/ProductsStore";
import useProductsApi from "@/modules/Products/api/useProductsApi";
import { useLoadingSpinner } from '@/components/LoadingSpinner';
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import { appendFormData } from "@/helpers";
import useProductAttributesService from "@/modules/Products/services/useProductAttributesService";


export default function useProductsService()
{

    const getAllProducts = async () =>
    {

        let response = await useProductsApi.getAllProducts();

        ProductsStore.value.filtered = response.data.data;
        ProductsStore.value.list = response.data;
        ProductsStore.value.pagination = response.data.pagination;




    }
    const storeNewProduct = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            const formData = appendFormData(FormStore.fields);

            let response = await useProductsApi.storeNewProduct(formData);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);

        } catch (error)
        {

            if (error.response)
            {
                FormStore.setErrors(error.response);
            }

        }
        FormStore.hideProgress();

    };
    const showProduct = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();

        let response = await useProductsApi.getProduct(route.params.id);


        FormStore.setFields(response.data.data.product);
        const { getCategories } =
            useProductAttributesService();
        await getCategories(FormStore.fields.section_id);

        useLoadingSpinner.hide();

    };

    const updateProduct = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();



        try
        {

            const formData = appendFormData(FormStore.fields);


            for (const iterator of formData)
            {
                console.log(iterator[0], iterator[1]);
            }
            // let response = await useProductsApi.updateProduct({
            //     id: FormStore.fields.id,
            //     fields: formData
            // });

            // FormStore.setFields(response.data.data.product);

            // useToastNotification.open(response.data.data.message);
        } catch (error)
        {
            if (error.response)
            {
                FormStore.setErrors(error.response);
            }

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
    const deleteProductImage = async (id) =>
    {

        useConfirmModal.onProgress(true)

        let response = await useProductsApi.deleteProductImage(id);

        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        useConfirmModal.onProgress(false)

    };
    const changeProductMainImage = async (id) =>
    {

        useLoadingSpinner.show();

        let response = await useProductsApi.changeProductMainImage(id);

        useToastNotification.open(response.data.data.message);

        useLoadingSpinner.hide();

    };


    return {
        updateProduct,
        storeNewProduct,
        getAllProducts,
        deleteProduct,
        deleteProductImage,
        showProduct,
        changeProductMainImage
    }

}