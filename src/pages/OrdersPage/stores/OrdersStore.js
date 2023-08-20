import { reactive, ref } from "vue";
import { defineStore } from 'pinia'

const useOrdersStore = defineStore('OrdersStore', () =>
{
    let isLoading = ref(false);
    let orders = reactive([]);
    let paginationLinks = reactive([]);
    let order_id = reactive({
        id: null,
        index: null
    });


    let tableColumns = [
        { label: "#", field: "id" },
        { label: "Name", field: "name" },
        { label: "Date", field: "date" },
        { label: "Total", field: "total" },
        { label: "Status", field: "status" },
        { label: "Actions", Actions: { routeName: "ordersEdit" } },
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
        orders,
        order_id,
        paginationLinks,
        tableColumns,
    }
})

export default useOrdersStore;