
import { reactive, ref } from "vue";

import { defineStore } from 'pinia'

const useBrandsStore = defineStore('BrandsStore', () =>
{


    let brand_id = reactive({
        id: null,
        index: null
    });
    let brands = reactive([]);
    let paginationLinks = reactive([]);


    return {
        brands,
        paginationLinks,
        brand_id
    }
})

export default useBrandsStore;