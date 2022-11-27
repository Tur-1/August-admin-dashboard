import useUsersApi from "@/modules/Users/api/useUsersApi";
import userForm from "@/modules/Users/stores/userForm";
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";

import usersStore from "@/modules/Users/stores/usersStore";
import UsersOnProgress from "@/modules/Users/stores/UsersOnProgress";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";

import UsersTableEntries from "@/modules/Users/stores/UsersTableEntries";


export default function useUsersService()
{

    const getAllUsers = async (url) =>
    {

        UsersOnProgress.value.index = true;

        let response = await useUsersApi.getUsers({ perPage: UsersTableEntries.activeEntrie, url: url });

        usersStore.value.filtered = response.data.data;
        usersStore.value.list = response.data;
        usersStore.value.pagination = response.data.pagination;



        UsersOnProgress.value.index = false;
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
        UsersOnProgress.value.destroy = true;
        let response = await useUsersApi.deleteUser(id);

        usersStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        UsersOnProgress.value.destroy = false;

    };

    const setShowingEntries = (per_page) =>
    {
        UsersTableEntries.setActiveEntrie(per_page)
        getAllUsers();
    }

    const searchUsers = (value) =>
    {
        usersStore.value.filtered = usersStore.value.list.data.filter((user) =>
        {
            return user.name.toLowerCase().includes(value.toLowerCase());
        });
    }
    return {
        updateUser,
        storeNewUser,
        userForm,
        getAllUsers,
        setShowingEntries,
        deleteUser, searchUsers

    }

}