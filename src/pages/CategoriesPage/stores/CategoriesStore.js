


import { reactive, ref } from "vue";
import { defineStore } from 'pinia'

const useCategoriesStore = defineStore('CategoriesStore', () =>
{
    let isLoading = ref(false);
    let categories = reactive([]);
    let sectionCategories = reactive([]);
    let sections = reactive([]);
    let paginationLinks = reactive([]);
    let category_id = reactive({
        id: null,
        index: null
    });

    let tableColumns = [
        { label: "#", field: "id" },
        { label: "Name", field: "name" },
        { label: "section", field: "section_name" },
        { label: "Actions", Actions: { routeName: "categoriesEdit" } },
    ];
    const showLoading = () => 
    {
        isLoading.value = true;

    }
    const hideLoading = () => 
    {
        isLoading.value = false;
    }

    return {
        isLoading,
        showLoading,
        hideLoading,
        categories,
        category_id,
        paginationLinks,
        tableColumns,
        sectionCategories,
        sections
    }
})

export default useCategoriesStore;