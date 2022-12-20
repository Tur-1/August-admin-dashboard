import useUsersApi from "@/modules/Users/api/useUsersApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import UsersStore from "@/modules/Users/stores/UsersStore";
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

        UsersStore.value.roles = response.data;

        useLoadingSpinner.hide();
    }
    const getRolePermissions = async (role_id) =>
    {
        if (role_id)
        {
            useLoadingSpinner.show();

            let response = await useRolesApi.getRolePermission(role_id);

            UsersStore.value.rolePermissions = response.data;

            useLoadingSpinner.hide();
        } else
        {
            UsersStore.value.rolePermissions = [];
        }

    }

    const getAllUsers = async ({ url, search } = {}) =>
    {

        let response = await useUsersApi.getUsers({
            records: TableEntries.activeEntrie,
            url: url,
            search: search
        });

        UsersStore.value.filtered = response.data.data;
        UsersStore.value.list = response.data;
        UsersStore.value.pagination = response.data.meta.pagination;


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

        UsersStore.value.filtered.splice(index, 1);
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


        await getAllRoles();
        await getRolePermissions(response.data.data.role_id);

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