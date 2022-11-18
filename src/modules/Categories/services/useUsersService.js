import useUsersApi from "@/modules/Users/api/useUsersApi";
import userForm from "@/modules/Users/stores/userForm";
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";

import usersStore from "@/modules/Users/stores/usersStore";
import onProgress from "@/modules/Users/stores/onProgress";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import entries from "@/components/MainTable/entries";


export default function useUsersService()
{

    const getAllUsers = async (url) =>
    {

        onProgress.value.index = true;

        let response = await useUsersApi.getUsers({ perPage: showingEntries.activeEntrie, url: url });

        usersStore.value.list = response.data;
        usersStore.value.filtered = response.data.data;
        usersStore.value.pagination = response.data.pagination;


        onProgress.value.index = false;
    }
    const storeNewUser = async () =>
    {
        userForm.onProgress = true;
        userForm.clearErrors();

        try
        {
            let response = await useUsersApi.storeNewUser(userForm.fields);

            userForm.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);

        } catch (error)
        {

            userForm.setErrors(error.response);
        }
        userForm.onProgress = false;

    };
    const updateUser = async (id) =>
    {
        userForm.onProgress = true;
        userForm.clearErrors();

        try
        {
            let response = await useUsersApi.updateUser(userForm.fields, id);

            userForm.fields = response.data.data.user;

            useToastNotification.open(response.data.data.message);
        } catch (error)
        {

            userForm.setErrors(error.response);
        }
        userForm.onProgress = false;

    };
    const deleteUser = async ({ id, index }) =>
    {
        onProgress.value.destroy = true;
        let response = await useUsersApi.deleteUser(id);

        usersStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        onProgress.value.destroy = false;

    };

    const setShowingEntries = (per_page) =>
    {
        entries.setActiveEntrie(per_page)
        getAllUsers();
    }
    return {
        updateUser,
        storeNewUser,
        userForm,
        getAllUsers,
        setShowingEntries,
        deleteUser,

    }

}