

import { reactive, ref } from "vue";
import { defineStore } from 'pinia'

const useCouponsStore = defineStore('CouponsStore', () =>
{
    let isLoading = ref(false);

    let coupon_id = reactive({
        id: null,
        index: null
    });
    let coupons = reactive([]);
    let paginationLinks = reactive([]);

    ["Code", "amount", "START DATE", "END DATE", "STATUS", "Action"]
    let tableColumns = [
        { label: "#", field: "id" },
        { label: "code", field: "code" },
        { label: "amount", field: "amount" },
        { label: "START DATE", field: "starts_at" },
        { label: "END DATE", field: "expires_at" },
        { label: "Actions", Actions: { routeName: "couponsEdit" } },
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
        coupons,
        coupon_id,
        paginationLinks,
        tableColumns,
    }
})

export default useCouponsStore;