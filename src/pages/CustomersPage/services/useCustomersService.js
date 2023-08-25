import useCustomersApi from "@/pages/CustomersPage/api/useCustomersApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useCustomersStore from "@/pages/CustomersPage/stores/CustomersStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import useRouterService from "@/router/useRouterService";

export default function useCustomersService()
{
    const CustomersStore = useCustomersStore();


    const getAllCustomers = async ({ url, search } = {}) =>
    {
        CustomersStore.showLoading();
        let response = await useCustomersApi.getCustomers({
            url: url,
            search: search
        });

        CustomersStore.customers = response.data.data;
        CustomersStore.paginationLinks = response.data.meta.pagination.links;

        CustomersStore.hideLoading();

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

            FormStore.setErrors(error);
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
            FormStore.setErrors(error);
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
        let response = await useCustomersApi.deleteCustomer(CustomersStore.customer_id.id);

        CustomersStore.customers.splice(CustomersStore.customer_id.index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading()

    };
    const showCustomer = async (customer_id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();


        let response = await useCustomersApi.getCustomer(customer_id);


        FormStore.setFields(response.data);



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