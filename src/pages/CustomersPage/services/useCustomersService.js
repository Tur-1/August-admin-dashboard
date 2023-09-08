import useCustomersApi from "@/pages/CustomersPage/api/useCustomersApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useCustomersStore from "@/pages/CustomersPage/stores/CustomersStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import useRouterService from "@/router/useRouterService";
import { isNotFound, skeletonLoading } from "@/helpers";

export default function useCustomersService()
{
    const CustomersStore = useCustomersStore();


    const getAllCustomers = async ({ url, search } = {}) =>
    {
        skeletonLoading.show();
        try
        {
            let response = await useCustomersApi.getCustomers({
                url: url,
                search: search
            });

            CustomersStore.customers = response.data.data;
            CustomersStore.paginationLinks = response.data.meta.pagination.links;
        } catch (error)
        {

        }
        skeletonLoading.hide();

    }
    const storeNewCustomer = async () =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            let response = await useCustomersApi.storeNewCustomer(FormStore.fields);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {


        }
        FormStore.hideProgress();

    };
    const updateCustomer = async (id) =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            let response = await useCustomersApi.updateCustomer(FormStore.fields, id);


            FormStore.setFields(response.data.customer);

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }

        FormStore.hideProgress();

    };
    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        CustomersStore.customer_id.id = id;
        CustomersStore.customer_id.index = index;
    };
    const deleteCustomer = async () =>
    {

        useConfirmModal.showLoading()
        try
        {
            let response = await useCustomersApi.deleteCustomer(CustomersStore.customer_id.id);

            CustomersStore.customers.splice(CustomersStore.customer_id.index, 1);
            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }
        useConfirmModal.hideLoading()

    };
    const showCustomer = async (customer_id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();
        try
        {
            let response = await useCustomersApi.getCustomer(customer_id);
            FormStore.setFields(response.data);
        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterService.redirectToRoute('customers');
            }
        }
        useLoadingSpinner.hide();

    };



    return {
        updateCustomer,
        storeNewCustomer,
        getAllCustomers,
        deleteCustomer,
        showCustomer,
        openConfirmModal
    }

}