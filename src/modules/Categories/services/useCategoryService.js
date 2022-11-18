import useCategoryApi from "@/modules/Categories/api/useCategoryApi";

import onProgress from "@/modules/Categories/stores/onProgress";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";

import entries from "@/components/MainTable/entries";


export default function useCategoryService()
{

    const getAllCategories = async (url = null) =>
    {

        onProgress.value.index = true;

        let response = await useCategoryApi.getAllCategories({
            perPage: entries.activeEntrie,
            url: url
        });

        CategoryStore.value.list = response.data;
        console.log(CategoryStore.value.list);
        CategoryStore.value.filtered = response.data.data;
        CategoryStore.value.pagination = response.data.pagination;


        onProgress.value.index = false;
    }

    const setShowingEntries = (per_page) =>
    {
        entries.setActiveEntrie(per_page)
        getAllCategories();
    }
    return {
        getAllCategories,
        setShowingEntries,
    }

}