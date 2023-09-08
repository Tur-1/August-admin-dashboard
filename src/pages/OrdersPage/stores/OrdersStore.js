import { reactive } from "vue";
import { defineStore } from 'pinia'

const useOrdersStore = defineStore('OrdersStore', () =>
{

    let orders = reactive([]);
    let paginationLinks = reactive([]);
    let order_id = reactive({
        id: null,
        index: null
    });


    let tableColumns = [
        { label: "#", field: "id" },
        { label: "Name", field: "user_name" },
        { label: "Date", field: "date" },
        { label: "Total", field: "total" },
        { label: "Status", field: "status" },
        { label: "Actions", Actions: { routeName: "ordersEdit" } },
    ];



    return {
        orders,
        order_id,
        paginationLinks,
        tableColumns,
    }
})

export default useOrdersStore;