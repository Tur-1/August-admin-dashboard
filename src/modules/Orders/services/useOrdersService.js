import useOrdersApi from "@/modules/Orders/api/useOrdersApi";

import { useLoadingSpinner } from "@/components/LoadingSpinner";
import OrdersStore from "@/modules/Orders/stores/OrdersStore";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import OrderDetailsStore from "@/modules/Orders/stores/OrderDetailsStore";


import AuthUser from "@/Auth/store/AuthUser";
export default function useOrdersService()
{

    const getAllOrders = async ({ url } = {}) =>
    {

        if (AuthUser.userCanAccess('access-orders'))
        {
            let response = await useOrdersApi.getOrders({
                url: url,
            });

            OrdersStore.value.filtered = response.data.data;
            OrdersStore.value.list = response.data;
            OrdersStore.value.pagination = response.data.meta.pagination;

        }
    }


    const showOrder = async () =>
    {
        if (AuthUser.userCanAccess('view-orders'))
        {
            useLoadingSpinner.show();
            FormStore.clearErrors();

            const route = useRoute();

            let response = await useOrdersApi.getOrder(route.params.id);

            OrderDetailsStore.order = response.data.order
            OrderDetailsStore.products = response.data.products
            OrderDetailsStore.coupon = response.data.coupon
            OrderDetailsStore.address = response.data.address



            useLoadingSpinner.hide();

        }
    }




    return {
        getAllOrders,
        showOrder
    }

}