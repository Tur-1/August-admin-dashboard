
import { reactive, ref } from "vue";

import { defineStore } from 'pinia'

const useSizeStore = defineStore('SizeStore', () =>
{
    let isLoading = ref(false);

    let size_id = reactive({
        id: null,
        index: null
    });
    let sizes = reactive([]);
    let paginationLinks = reactive([]);

    let tableColumns = [
        { label: "#", field: "id" },
        { label: "Name", field: "name" },
        { label: "Actions", Actions: { routeName: "sizesEdit" } },
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
        sizes,
        paginationLinks,
        tableColumns,
        size_id
    }
})

export default useSizeStore;