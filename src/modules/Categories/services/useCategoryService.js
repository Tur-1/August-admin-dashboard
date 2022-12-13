import useCategoryApi from "@/modules/Categories/api/useCategoryApi";
import CategoriesOnProgress from "@/modules/Categories/stores/CategoriesOnProgress";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import CategoriesTableEntries from "@/modules/Categories/stores/CategoriesTableEntries";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useToastNotification from "@/components/Toast/useToastNotification";
import { FilterSections } from "@/modules/Categories/helpers";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { useRoute } from "vue-router";
import { FormStore } from "@/components/BaseForm";
import { appendFormData } from "@/helpers";


export default function useCategoryService()
{

    const getAllSections = async () =>
    {
        useLoadingSpinner.show();

        let response = await useCategoryApi.getSections();

        CategoryStore.value.sections = response.data;

        useLoadingSpinner.hide();

        return response.data;
    }

    const getAllCategories = async (url = null) =>
    {

        CategoriesOnProgress.value.index = true;

        let response = await useCategoryApi.getAllCategories({
            perPage: CategoriesTableEntries.activeEntrie,
            url: url
        });


        CategoryStore.value.list = response.data;
        CategoryStore.value.filtered = response.data.data;
        CategoryStore.value.pagination = response.data.pagination;
        CategoryStore.value.sections = FilterSections();

        CategoriesOnProgress.value.index = false;

        return response.data;
    }
    const getCategoriesBySection = async (section_id) =>
    {



        useLoadingSpinner.show();
        if (section_id)
        {
            let response = await useCategoryApi.getCategoriesBySection(section_id);
            CategoryStore.value.sectionCategories = response.data;
        } else
        {
            CategoryStore.value.sectionCategories = [];
        }

        useLoadingSpinner.hide();

    }

    const storeNewCategory = async (formData) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            appendFormData(formData, FormStore.fields);

            let response = await useCategoryApi.storeNewCategory(formData);

            FormStore.clearFields();
            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);


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
            appendFormData(formData, FormStore.fields);


            let response = await useCategoryApi.updateCategory({
                formData: formData,
                id: FormStore.fields.id
            });


            FormStore.setFields(response.data.data.category);


            useToastNotification.open(response.data.data.message);


        } catch (error)
        {

            console.log(error.response);
            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const destroyCategory = async (category) =>
    {
        CategoriesOnProgress.value.destroy = true;

        let response = await useCategoryApi.deleteCategory(category.id);

        CategoryStore.value.filtered.splice(category.index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        CategoriesOnProgress.value.destroy = false;
    }
    const showCategory = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();


        const route = useRoute();

        let response = await useCategoryApi.getCategory(route.params.id);

        FormStore.setFields(response.data.data);

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