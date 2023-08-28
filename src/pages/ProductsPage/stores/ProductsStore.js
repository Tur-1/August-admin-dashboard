

import { reactive, ref } from "vue";
import { defineStore } from 'pinia'

const useProductsStore = defineStore('ProductsStore', () =>
{

    let products = reactive([]);
    let paginationLinks = reactive([]);
    let product_id = reactive({
        id: null,
        index: null
    });


    return {
        products,
        product_id,
        paginationLinks,
    }
})

export default useProductsStore;