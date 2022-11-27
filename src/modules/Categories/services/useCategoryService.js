import useCategoryApi from "@/modules/Categories/api/useCategoryApi";

import CategoriesOnProgress from "@/modules/Categories/stores/CategoriesOnProgress";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";

import CategoriesTableEntries from "@/modules/Categories/stores/CategoriesTableEntries";
import CategoryForm from "@/modules/Categories/stores/CategoryForm";
import useRouterService from "@/router/useRouterService";
import FormData from "form-data";


export default function useCategoryService()
{
    const getSections = () =>
    {
        return CategoryStore.value.list.data.filter((category) =>
        {
            return category.section == null;
        });
    }
    const filterBySection = (sectionId) =>
    {

        CategoryStore.value.filtered = CategoryStore.value.list.data.filter((category) =>
        {
            if (sectionId !== null)
            {
                return category.section_id == sectionId;
            } else
            {
                return category;
            }

        });


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
        CategoryStore.value.sections = getSections();

        CategoriesOnProgress.value.index = false;

        return response.data;
    }
    const getCategoriesBySection = async (section_id) =>
    {

        let response = await useCategoryApi.getCategoriesBySection(section_id);


        return response.data;
    }
    const setShowingEntries = (per_page) =>
    {
        CategoriesTableEntries.setActiveEntrie(per_page)
        getAllCategories();
    }

    const searchCategories = (value) =>
    {
        CategoryStore.value.filtered = CategoryStore.value.list.data.filter(
            (category) =>
            {
                return category.name.toLowerCase().includes(value.toLowerCase());
            }
        );
    }

    const storeNewCategory = async (formdata) =>
    {
        CategoryForm.onProgress = true;
        CategoryForm.clearErrors();

        try
        {
            // formdata.append('name', CategoryForm.fields.name)
            // formdata.append('category_id', CategoryForm.fields.category_id)
            // formdata.append('section_id', CategoryForm.fields.section_id)

            let response = await useCategoryApi.storeNewCategory(CategoryForm.fields);

            CategoryForm.clearFields();

            // useRouterService.redirectBack();

            // useToastNotification.open(response.data.data.message);

            console.log(response.data);

        } catch (error)
        {
            console.log(error);
            // CategoryForm.setErrors(error.response);
        }
        CategoryForm.onProgress = false;

    };
    return {
        getAllCategories,
        setShowingEntries,
        filterBySection,
        searchCategories,
        getCategoriesBySection,
        storeNewCategory,

    }

}