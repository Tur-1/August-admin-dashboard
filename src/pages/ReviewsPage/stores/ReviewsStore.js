

import { reactive, ref } from "vue";
import { defineStore } from 'pinia'

const useReviewsStore = defineStore('ReviewsStore', () =>
{
    let isLoading = ref(false);
    let reviews = reactive([]);
    let review = reactive([]);
    let review_reply = reactive([]);
    let paginationLinks = reactive([]);
    let review_id = reactive({
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
        paginationLinks,
        review,
        review_id,
        review_reply,
        reviews
    }
})

export default useReviewsStore;