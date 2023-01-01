import useCategoryApi from "@/modules/Categories/api/useCategoryApi";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useToastNotification from "@/components/Toast/useToastNotification";
import { FilterSections } from "@/modules/Categories/helpers";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { useRoute } from "vue-router";
import { FormStore } from "@/components/BaseForm";
import { appendFormData } from "@/helpers";
import TableEntries from "@/components/MainTable/TableEntries";


export default function useCategoryService()
{

    const getAllSections = async () =>
    {
        useLoadingSpinner.show();

        let response = await useCategoryApi.getSections();

        CategoryStore.sections = response.data;

        useLoadingSpinner.hide();

        return response.data;
    }

    const getAllCategories = async (url = null) =>
    {

        let response = await useCategoryApi.getAllCategories({
            records: TableEntries.activeEntrie,
            url: url
        });

        CategoryStore.filtered = response.data.data;
        CategoryStore.list = response.data;
        CategoryStore.pagination = response.data.meta.pagination;
        CategoryStore.sections = FilterSections();

        return response.data;
    }
    const getCategoriesBySection = async (section_id) =>
    {



        useLoadingSpinner.show();
        if (section_id)
        {
            let response = await useCategoryApi.getCategoriesBySection(section_id);
            CategoryStore.sectionCategories = response.data;
        } else
        {
            CategoryStore.sectionCategories = [];
        }

        useLoadingSpinner.hide();

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

            useToastNotification.open(response.data.message);


        } catch (error)
        {
            FormStore.setErrors(error.response);
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


            useToastNotification.open(response.data.message);


        } catch (error)
        {

            console.log(error.response);
            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const destroyCategory = async (category) =>
    {
        useConfirmModal.onProgress(true)

        let response = await useCategoryApi.deleteCategory(category.id);

        CategoryStore.filtered.splice(category.index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.message);

        useConfirmModal.onProgress(false)
    }
    const showCategory = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();


        const route = useRoute();

        let response = await useCategoryApi.getCategory(route.params.id);

        FormStore.setFields(response.data);

        await getAllSections();
        await getCategoriesBySection(FormStore.fields.section_id);
        useLoadingSpinner.hide();


    };

    return {
        getAllCategories,
        storeNewCategory,
        getAllSections,
        destroyCategory,
        showCategory,
        getCategoriesBySection,
        updateCategory
    }

}