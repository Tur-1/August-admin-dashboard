
import { reactive, ref } from "vue";

import { defineStore } from 'pinia'

const useCustomersStore = defineStore('CustomersStore', () =>
{
    let isLoading = ref(false);

    let customer_id = reactive({
        id: null,
        index: null
    });
    let customers = reactive([]);
    let paginationLinks = reactive([]);
    let tableColumns = [
        { label: "#", field: "id" },
        { label: "Name", field: "name" },
        { label: "Gender", field: "gender" },
        { label: "Email", field: "email" },
        { label: "Actions", Actions: { routeName: "customersEdit" } },
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
        customer_id,
        customers,
        paginationLinks,
        tableColumns,
    }
})

export default useCustomersStore;