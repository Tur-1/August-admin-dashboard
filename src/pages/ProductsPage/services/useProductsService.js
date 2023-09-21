
import useToastNotification from "@/components/Toast/useToastNotification";
import { useLoadingSpinner } from '@/components/LoadingSpinner';
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { appendFormData, isNotFound, isNotNull, skeletonLoading } from "@/helpers";
import useProductsApi from "@/pages/ProductsPage/api/useProductsApi";
import useProductAttributesService from "@/pages/ProductsPage/services/useProductAttributesService";
import useProductsStore from "@/pages/ProductsPage/stores/ProductsStore";

export default function useProductsService()
{
    const productsStore = useProductsStore();
    const getAllProducts = async () =>
    {

        try
        {
            let response = await useProductsApi.getAllProducts();

            productsStore.products = response.data.data;
            productsStore.paginationLinks = response.data.meta.pagination.links;
        } catch (error)
        {

        }

    }
    const storeNewProduct = async () =>
    {

        useLoadingSpinner.show();

        try
        {
            let response = await useProductsApi.storeNewProduct();
            productsStore.products.unshift(response.data.product);

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

        }
        useLoadingSpinner.hide();

    };
    const showProduct = async (id) =>
    {
        useLoadingSpinner.show();
        try
        {
            let response = await useProductsApi.getProduct(id);
            FormStore.setFields(response.data.product);

            if (FormStore.fields.sizes.length == 0)
            {
                FormStore.fields.sizes.push({
                    id: null,
                    size_id: null,
                    stock: null,
                });
            }
            if (isNotNull(FormStore.fields.section_id))
            {
                const { getAllCategoriesBySection } = useProductAttributesService();

                await getAllCategoriesBySection(FormStore.fields.section_id);
            }

        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterService.redirectToRoute('products');
            }
        }
        useLoadingSpinner.hide();

    };

    const updateProduct = async () =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();


        try
        {

            const formData = appendFormData(FormStore.fields);

            let response = await useProductsApi.updateProduct({
                id: FormStore.fields.id,
                fields: formData
            });

            FormStore.setFields(response.data.product);

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

        }

        FormStore.hideProgress();

    };
    const deleteProduct = async () =>
    {

        useLoadingSpinner.show();
        try
        {
            let response = await useProductsApi.deleteProduct(productsStore.product_id.id);

            productsStore.products.splice(productsStore.product_id.index, 1);
            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }
        useLoadingSpinner.hide();

    };
    const deleteProductImage = async (id) =>
    {

        useLoadingSpinner.show();

        try
        {
            let response = await useProductsApi.deleteProductImage(id);

            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }
        useLoadingSpinner.hide();


    };
    const changeProductMainImage = async (id) =>
    {

        useLoadingSpinner.show();
        try
        {
            let response = await useProductsApi.changeProductMainImage(id);

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }
        useLoadingSpinner.hide();

    };
    const publishProduct = async (id, publish_value) =>
    {


        useLoadingSpinner.show();
        try
        {

            let response = await useProductsApi.publishProduct(id, publish_value);

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }
        useLoadingSpinner.hide();

    };
    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        productsStore.product_id.id = id;
        productsStore.product_id.index = index;
    };
    return {
        updateProduct,
        storeNewProduct,
        getAllProducts,
        deleteProduct,
        deleteProductImage,
        showProduct,
        changeProductMainImage,
        publishProduct,
        openConfirmModal
    }

}