import useUsersApi from "@/modules/Users/api/useUsersApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import usersStore from "@/modules/Users/stores/usersStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import TableEntries from "@/components/MainTable/TableEntries";


export default function useUsersService()
{

    const getAllUsers = async ({ url, search } = {}) =>
    {

        let response = await useUsersApi.getUsers({
            records: TableEntries.activeEntrie,
            url: url,
            search: search
        });

        usersStore.value.filtered = response.data.data;
        usersStore.value.list = response.data;
        usersStore.value.pagination = response.data.pagination;


    }
    const storeNewUser = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            let response = await useUsersApi.storeNewUser(FormStore.fields);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);

        } catch (error)
        {

            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const updateUser = async (id) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            let response = await useUsersApi.updateUser(FormStore.fields, id);


            FormStore.setFields(response.data.data.user);


            useToastNotification.open(response.data.data.message);
        } catch (error)
        {

            FormStore.setErrors(error.response);
        }

        FormStore.hideProgress();

    };
    const deleteUser = async ({ id, index }) =>
    {
        useConfirmModal.onProgress(true)
        let response = await useUsersApi.deleteUser(id);

        usersStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        useConfirmModal.onProgress(false)

    };
    const showUser = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();

        let response = await useUsersApi.getUser(route.params.id);

        FormStore.setFields(response.data.data);

        useLoadingSpinner.hide();

    };

    const setShowingEntries = (records) =>
    {
        TableEntries.setActiveEntrie(records)
        getAllUsers();

    }


    return {
        updateUser,
        storeNewUser,
        getAllUsers,
        setShowingEntries,
        deleteUser,
        showUser
    }

}