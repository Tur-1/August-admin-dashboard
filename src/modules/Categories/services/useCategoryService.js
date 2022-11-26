import useCategoryApi from "@/modules/Categories/api/useCategoryApi";

import onProgress from "@/modules/Categories/stores/onProgress";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";

import CategoriesTableEntries from "@/modules/Categories/stores/CategoriesTableEntries";
import CategoryForm from "@/modules/Categories/stores/CategoryForm";


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

        onProgress.value.index = true;

        let response = await useCategoryApi.getAllCategories({
            perPage: CategoriesTableEntries.activeEntrie,
            url: url
        });

        CategoryStore.value.list = response.data;
        CategoryStore.value.filtered = response.data.data;
        CategoryStore.value.pagination = response.data.pagination;
        CategoryStore.value.sections = getSections();

        console.log(response.data.data);
        onProgress.value.index = false;

        return response.data;
    }
    const getCategoriesBySection = async (section_id) =>
    {

        let response = await useCategoryApi.getCategoriesBySection(section_id);

        console.log(response.data);
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

    const storeNewCategory = async () =>
    {
        CategoryForm.onProgress = true;
        CategoryForm.clearErrors();

        try
        {
            let response = await useCategoryApi.storeNewCategory(CategoryForm.fields);

            CategoryForm.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);

            console.log(response.data);

        } catch (error)
        {
            console.log(error.response);
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