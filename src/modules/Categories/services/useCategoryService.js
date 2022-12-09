import useCategoryApi from "@/modules/Categories/api/useCategoryApi";
import CategoriesOnProgress from "@/modules/Categories/stores/CategoriesOnProgress";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import CategoriesTableEntries from "@/modules/Categories/stores/CategoriesTableEntries";
import CategoryForm from "@/modules/Categories/stores/CategoryForm";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useToastNotification from "@/components/Toast/useToastNotification";
import { FilterSections } from "@/modules/Categories/helpers";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { useRoute } from "vue-router";


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

        console.log(response.data);
        CategoryStore.value.list = response.data;
        CategoryStore.value.filtered = response.data.data;
        CategoryStore.value.pagination = response.data.pagination;
        CategoryStore.value.sections = FilterSections();

        CategoriesOnProgress.value.index = false;

        return response.data;
    }
    const getCategoriesBySection = async (section_id) =>
    {

        let response = await useCategoryApi.getCategoriesBySection(section_id);


        return response.data;
    }

    const storeNewCategory = async (formData) =>
    {
        CategoryForm.onProgress = true;
        CategoryForm.clearErrors();


        try
        {
            let field;
            for (field in CategoryForm.fields)
            {
                formData.append(field, CategoryForm.fields[field]);
            }


            let response = await useCategoryApi.storeNewCategory(formData);
            console.log(response.data);
            CategoryForm.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);


        } catch (error)
        {

            CategoryForm.setErrors(error.response);
        }
        CategoryForm.onProgress = false;

    };
    const updateCategory = async (formData) =>
    {
        CategoryForm.onProgress = true;
        CategoryForm.clearErrors();


        try
        {
            let field;
            for (field in CategoryForm.fields)
            {
                formData.append(field, CategoryForm.fields[field]);
            }


            let response = await useCategoryApi.storeNewCategory(formData);

            CategoryForm.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);


        } catch (error)
        {

            CategoryForm.setErrors(error.response);
        }
        CategoryForm.onProgress = false;

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

        const route = useRoute();

        let response = await useCategoryApi.getCategory(route.params.id);

        CategoryForm.fields = response.data.data;
        await getAllSections();
        await getSectionCategories(CategoryForm.fields.section_id);
        useLoadingSpinner.hide();

    };
    const getSectionCategories = async (section_id) =>
    {

        useLoadingSpinner.show();
        if (section_id)
        {
            CategoryStore.value.list = await getCategoriesBySection(section_id);
        } else
        {
            CategoryStore.value.list = [];
        }

        useLoadingSpinner.hide();
    };
    return {
        getAllCategories,
        getCategoriesBySection,
        storeNewCategory,
        getAllSections,
        destroyCategory,
        showCategory,
        getCategoriesBySection,
        updateCategory
    }

}