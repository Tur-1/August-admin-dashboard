import useUsersApi from "@/modules/Users/api/useUsersApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import usersStore from "@/modules/Users/stores/usersStore";
import UsersOnProgress from "@/modules/Users/stores/UsersOnProgress";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import UsersTableEntries from "@/modules/Users/stores/UsersTableEntries";
import { useRoute } from "vue-router";


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
        getAllUsers,
        setShowingEntries,
        deleteUser,
        searchUsers,
        showUser
    }

}