
import { reactive, ref } from "vue";

import { defineStore } from 'pinia'

const useBannersStore = defineStore('BannersStore', () =>
{


    let banner_id = reactive({
        id: null,
        index: null
    });
    let banners = reactive([]);
    let paginationLinks = reactive([]);

    return {
        banners,
        banner_id,
        paginationLinks,
    }
})

export default useBannersStore;