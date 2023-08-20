import useOrdersApi from "@/pages/OrdersPage/api/useOrdersApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { FormStore } from "@/components/BaseForm";
import OrderDetailsStore from "@/pages/OrdersPage/stores/OrderDetailsStore";
import { useConfirmModal } from "@/components/ConfirmModal";
import useToastNotification from "@/components/Toast/useToastNotification";
import useOrdersStore from "@/pages/OrdersPage/stores/OrdersStore";

export default function useOrdersService()
{
    const ordersStore = useOrdersStore();
    const getAllOrders = async ({ url } = {}) =>
    {


        let response = await useOrdersApi.getOrders({
            url: url,
        });

        console.log(response.data);
        ordersStore.orders = response.data.data;
        ordersStore.paginationLinks = response.data.meta.pagination.links;


    }


    const showOrder = async () =>
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

    const deleteOrder = async () =>
    {

        useConfirmModal.showLoading()
        let response = await useOrdersApi.deleteOrder(ordersStore.order_id.id);

        ordersStore.orders.splice(ordersStore.order_id.index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading();


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