import useUsersApi from "@/modules/Users/api/useUsersApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import usersStore from "@/modules/Users/stores/usersStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import TableEntries from "@/components/MainTable/TableEntries";
import useRolesApi from "@/modules/Roles/api/useRolesApi";


export default function useUsersService()
{
    const getAllRoles = async () =>
    {
        useLoadingSpinner.show();

        let response = await useRolesApi.getAllRoles();

        usersStore.value.roles = response.data;

        useLoadingSpinner.hide();
    }
    const getRolePermissions = async (role_id) =>
    {
        useLoadingSpinner.show();

        let response = await useRolesApi.getRolePermission(role_id);

        usersStore.value.rolePermissions = response.data;

        useLoadingSpinner.hide();
    }

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

        // load roles
        await getAllRoles();

        useLoadingSpinner.hide();

    };

    const setShowingEntries = (records) =>
    {
        TableEntries.setActiveEntrie(records)
        getAllUsers();

    }


    return {
        getAllRoles,
        updateUser,
        storeNewUser,
        getAllUsers,
        setShowingEntries,
        getRolePermissions,
        deleteUser,
        showUser
    }

}