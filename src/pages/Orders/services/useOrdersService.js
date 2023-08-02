import useOrdersApi from "@/pages/Orders/api/useOrdersApi";

import { useLoadingSpinner } from "@/components/LoadingSpinner";
import OrdersStore from "@/pages/Orders/stores/OrdersStore";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import OrderDetailsStore from "@/pages/Orders/stores/OrderDetailsStore";


import useUserStore from "@/Auth/store/userStore"; import { useConfirmModal } from "@/components/ConfirmModal";
import useToastNotification from "@/components/Toast/useToastNotification";
const AuthUser = useUserStore();
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

    const deleteOrder = async ({ id, index }) =>
    {
        if (AuthUser.userCanAccess('delete-orders'))
        {
            useConfirmModal.onProgress(true)
            let response = await useOrdersApi.deleteOrder(id);

            OrdersStore.value.filtered.splice(index, 1);
            useConfirmModal.close();

            useToastNotification.open(response.data.message);

            useConfirmModal.onProgress(false)

        }
    }



    return {
        getAllOrders,
        deleteOrder,
        showOrder
    }

}