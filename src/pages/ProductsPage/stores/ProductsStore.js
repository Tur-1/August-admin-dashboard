

import { reactive, ref } from "vue";
import { defineStore } from 'pinia'

const useProductsStore = defineStore('ProductsStore', () =>
{
    let isLoading = ref(false);
    let products = reactive([]);
    let paginationLinks = reactive([]);
    let product_id = reactive({
        id: null,
        index: null
    });

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
        products,
        product_id,
        paginationLinks,
    }
})

export default useProductsStore;