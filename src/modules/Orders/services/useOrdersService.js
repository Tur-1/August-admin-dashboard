import useOrdersApi from "@/modules/Orders/api/useOrdersApi";
import useToastNotification from "@/components/Toast/useToastNotification";

import { useLoadingSpinner } from "@/components/LoadingSpinner";
import OrdersStore from "@/modules/Orders/stores/OrdersStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import useRouterService from "@/router/useRouterService";
import OrderDetailsStore from "@/modules/Orders/stores/OrderDetailsStore";



export default function useOrdersService()
{

    const getAllOrders = async ({ url } = {}) =>
    {


        let response = await useOrdersApi.getOrders({
            url: url,
        });

        OrdersStore.value.filtered = response.data.data;
        OrdersStore.value.list = response.data;
        OrdersStore.value.pagination = response.data.meta.pagination;


    }
    const storeNewOrder = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            let response = await useOrdersApi.storeNewOrder(FormStore.fields);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.message);

        } catch (error)
        {

            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const updateOrder = async (id) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            let response = await useOrdersApi.updateOrder(FormStore.fields, id);


            FormStore.setFields(response.data.Order);


            useToastNotification.open(response.data.message);
        } catch (error)
        {

            FormStore.setErrors(error.response);
        }

        FormStore.hideProgress();

    };
    const deleteOrder = async ({ id, index }) =>
    {
        useConfirmModal.onProgress(true)
        let response = await useOrdersApi.deleteOrder(id);

        OrdersStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.message);

        useConfirmModal.onProgress(false)

    };
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
        console.log(response.data);
        // FormStore.setFields(response.data.Order);

        useLoadingSpinner.hide();

    };




    return {
        updateOrder,
        storeNewOrder,
        getAllOrders,
        deleteOrder,
        showOrder
    }

}