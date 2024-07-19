import useOrdersApi from "@/pages/OrdersPage/api/useOrdersApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { FormStore } from "@/components/BaseForm";
import OrderDetailsStore from "@/pages/OrdersPage/stores/OrderDetailsStore";
import { useConfirmModal } from "@/components/ConfirmModal";
import useToastNotification from "@/components/Toast/useToastNotification";
import useOrdersStore from "@/pages/OrdersPage/stores/OrdersStore";
import { isNotFound, skeletonLoading } from "@/helpers";
import useRouterService from "@/router/useRouterService";

export default function useOrdersService()
{
    const ordersStore = useOrdersStore();
    const getAllOrders = async ({ url } = {}) =>
    {

        skeletonLoading.show();

        try
        {
            let response = await useOrdersApi.getOrders({
                url: url,
            });

            ordersStore.orders = response.data.data;
            ordersStore.paginationLinks = response.data.meta.links;
        } catch (error)
        {

        }
        skeletonLoading.hide();

    }


    const showOrder = async (id) =>
    {

        useLoadingSpinner.show();
        try
        {

            let response = await useOrdersApi.getOrder(id);

            OrderDetailsStore.order = response.data.order
            OrderDetailsStore.products = response.data.products
            OrderDetailsStore.coupon = response.data.coupon
            OrderDetailsStore.address = response.data.address

        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterService.redirectToRoute('orders');
            }
        }
        useLoadingSpinner.hide();

    }

    const deleteOrder = async () =>
    {

        useLoadingSpinner.show();
        try
        {
            let response = await useOrdersApi.deleteOrder(ordersStore.order_id.id);

            ordersStore.orders.splice(ordersStore.order_id.index, 1);
            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }
        useLoadingSpinner.hide();


    }

    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        ordersStore.order_id.id = id;
        ordersStore.order_id.index = index;
    };

    return {
        getAllOrders,
        deleteOrder,
        showOrder,
        openConfirmModal
    }

}