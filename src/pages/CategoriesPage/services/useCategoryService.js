import useCategoryApi from "@/pages/CategoriesPage/api/useCategoryApi";
import useCategoriesStore from "@/pages/CategoriesPage/stores/CategoriesStore";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";

import useToastNotification from "@/components/Toast/useToastNotification";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { useRoute } from "vue-router";
import { FormStore } from "@/components/BaseForm";
import { appendFormData, skeletonLoading } from "@/helpers";
import useSectionService from "@/pages/CategoriesPage/services/useSectionService";


export default function useCategoryService()
{

    const categoriesStore = useCategoriesStore();

    const getAllCategories = async ({ url, query, section_id } = {}) =>
    {


        skeletonLoading.show();

        let response = await useCategoryApi.getAllCategories(
            {
                url: url,
                query: query,
                section_id: section_id

            });


        categoriesStore.categories = response.data.data;
        categoriesStore.paginationLinks = response.data.meta.pagination.links;

        skeletonLoading.hide();


    }

    const getAllCategoriesBySection = async (section_id) =>
    {

        if (section_id)
        {

            useLoadingSpinner.show();

            let response = await useCategoryApi.getAllCategoriesBySection(section_id);

            categoriesStore.sectionCategories = response.data;

            useLoadingSpinner.hide();

        }
    }

    const storeNewCategory = async (formData) =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            const formData = appendFormData(FormStore.fields);

            let response = await useCategoryApi.storeNewCategory(formData);

            FormStore.clearFields();
            useRouterService.redirectBack();

            useToastNotification.open().withMessage(response.data.message);


        } catch (error)
        {
            FormStore.setErrors(error);
        }

        FormStore.hideProgress();

    };
    const updateCategory = async (formData) =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            const formData = appendFormData(FormStore.fields);


            let response = await useCategoryApi.updateCategory({
                formData: formData,
                id: FormStore.fields.id
            });


            FormStore.setFields(response.data.category);


            useToastNotification.open().withMessage(response.data.message);


        } catch (error)
        {

            FormStore.setErrors(error);
        }
        FormStore.hideProgress();

    };
    const destroyCategory = async () =>
    {


        useConfirmModal.showLoading();

        let response = await useCategoryApi.deleteCategory(categoriesStore.category_id.id);

        categoriesStore.categories.splice(categoriesStore.category_id.index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading();



    }
    const showCategory = async () =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();
        const { getSections } = useSectionService();


        const route = useRoute();

        let response = await useCategoryApi.getCategory(route.params.id);

        FormStore.setFields(response.data);

        await getSections();
        await getAllCategoriesBySection(FormStore.fields.section_id);
        useLoadingSpinner.hide();


    };
    const openConfirmModal = ({ id, index }) =>
    {

        useConfirmModal.open();
        categoriesStore.category_id.id = id;
        categoriesStore.category_id.index = index;
    };

    return {
        getAllCategoriesBySection,
        getAllCategories,
        storeNewCategory,
        destroyCategory,
        showCategory,
        updateCategory,
        openConfirmModal
    }

}