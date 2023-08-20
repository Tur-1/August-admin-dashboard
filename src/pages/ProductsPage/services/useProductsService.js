
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import ProductsStore from "@/pages/Products/stores/ProductsStore";
import useProductsApi from "@/pages/Products/api/useProductsApi";
import { useLoadingSpinner } from '@/components/LoadingSpinner';
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import { appendFormData, isNotNull } from "@/helpers";
import useProductAttributesService from "@/pages/Products/services/useProductAttributesService";
import useUserStore from "@/Auth/store/userStore";
const AuthUser = useUserStore();
export default function useProductsService()
{

    const getAllProducts = async () =>
    {
        if (AuthUser.userCanAccess('access-products'))
        {
            let response = await useProductsApi.getAllProducts();

            ProductsStore.value.filtered = response.data.data;
            ProductsStore.value.list = response.data.data;
            ProductsStore.value.pagination = response.data.meta.pagination;

        }
    }
    const storeNewProduct = async () =>
    {
        if (AuthUser.userCanAccess('create-products'))
        {
            useLoadingSpinner.show();

            try
            {
                let response = await useProductsApi.storeNewProduct();

                await getAllProducts();

                useToastNotification.open().withMessage(response.data.message);


            } catch (error)
            {
                if (error.response)
                {
                    FormStore.setErrors(error);
                }

            }
            useLoadingSpinner.hide();
        }
    };
    const showProduct = async () =>
    {
        useLoadingSpinner.show();

        if (AuthUser.userCanAccess('view-products'))
        {

            FormStore.clearErrors();

            const route = useRoute();

            let response = await useProductsApi.getProduct(route.params.id);

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


        }
        useLoadingSpinner.hide();



    };

    const updateProduct = async () =>
    {
        if (AuthUser.userCanAccess('update-products'))
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
                if (error.response)
                {
                    FormStore.setErrors(error);
                }


            }

            FormStore.hideProgress();
        }
    };
    const deleteProduct = async ({ id, index }) =>
    {
        if (AuthUser.userCanAccess('delete-products'))
        {
            useConfirmModal.showLoading()
            let response = await useProductsApi.deleteProduct(id);

            ProductsStore.value.filtered.splice(index, 1);
            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);

            useConfirmModal.hideLoading()
        }
    };
    const deleteProductImage = async (id) =>
    {
        if (AuthUser.userCanAccess('delete-products'))
        {
            useConfirmModal.showLoading()

            let response = await useProductsApi.deleteProductImage(id);

            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);

            useConfirmModal.hideLoading()
        }
    };
    const changeProductMainImage = async (id) =>
    {
        if (AuthUser.userCanAccess('update-products'))
        {
            useLoadingSpinner.show();

            let response = await useProductsApi.changeProductMainImage(id);

            useToastNotification.open().withMessage(response.data.message);

            useLoadingSpinner.hide();
        }
    };
    const publishProduct = async (id) =>
    {
        if (AuthUser.userCanAccess('update-products'))
        {
            useLoadingSpinner.show();

            let response = await useProductsApi.publishProduct(id);

            useToastNotification.open().withMessage(response.data.message);

            useLoadingSpinner.hide();
        }
    };

    return {
        updateProduct,
        storeNewProduct,
        getAllProducts,
        deleteProduct,
        deleteProductImage,
        showProduct,
        changeProductMainImage,
        publishProduct
    }

}