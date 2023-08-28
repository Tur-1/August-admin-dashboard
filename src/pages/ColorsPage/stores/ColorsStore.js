


import { reactive, ref } from "vue";

import { defineStore } from 'pinia'

const useColorsStore = defineStore('ColorsStore', () =>
{


    let color_id = reactive({
        id: null,
        index: null
    });
    let colors = reactive([]);
    let paginationLinks = reactive([]);


    return {
        colors,
        paginationLinks,
        color_id
    }
})

export default useColorsStore;