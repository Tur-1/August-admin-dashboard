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

import AuthUser from "@/Auth/store/AuthUser";
export default function useUsersService()
{
    const getAllRoles = async () =>
    {
        useLoadingSpinner.show();

        let response = await useRolesApi.getAllRoles();

        UsersStore.roles = response.data;

        useLoadingSpinner.hide();
    }
    const getRolePermissions = async (role_id) =>
    {
        if (role_id)
        {
            useLoadingSpinner.show();

            let response = await useRolesApi.getRolePermission(role_id);

            UsersStore.rolePermissions = response.data;

            useLoadingSpinner.hide();
        } else
        {
            UsersStore.rolePermissions = [];
        }

    }

    const getAllUsers = async ({ url, search } = {}) =>
    {
        if (AuthUser.userCanAccess('access-users'))
        {
            let response = await useUsersApi.getUsers({
                records: TableEntries.activeEntrie,
                url: url,
                search: search
            });

            UsersStore.filtered = response.data.data;
            UsersStore.list = response.data;
            UsersStore.pagination = response.data.meta.pagination;
        }

    }
    const storeNewUser = async () =>
    {
        if (AuthUser.userCanAccess('create-users'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();

            try
            {
                let response = await useUsersApi.storeNewUser(FormStore.fields);

                FormStore.clearFields();

                useRouterService.redirectBack();

                useToastNotification.open(response.data.message);

            } catch (error)
            {

                FormStore.setErrors(error.response);
            }
            FormStore.hideProgress();
        }
    };
    const updateUser = async (id) =>
    {
        if (AuthUser.userCanAccess('update-users'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();

            try
            {

                let response = await useUsersApi.updateUser(FormStore.fields, id);


                FormStore.setFields(response.data.user);


                useToastNotification.open(response.data.message);
            } catch (error)
            {

                FormStore.setErrors(error.response);
            }

            FormStore.hideProgress();
        }
    };
    const deleteUser = async ({ id, index }) =>
    {
        if (AuthUser.userCanAccess('delete-users'))
        {
            useConfirmModal.onProgress(true)
            let response = await useUsersApi.deleteUser(id);

            UsersStore.filtered.splice(index, 1);
            useConfirmModal.close();

            useToastNotification.open(response.data.message);

            useConfirmModal.onProgress(false)
        }
    };
    const showUser = async () =>
    {
        if (AuthUser.userCanAccess('view-users'))
        {
            useLoadingSpinner.show();
            FormStore.clearErrors();

            const route = useRoute();

            let response = await useUsersApi.getUser(route.params.id);


            FormStore.setFields(response.data);


            await getAllRoles();
            await getRolePermissions(response.data.role_id);

            useLoadingSpinner.hide();
        }
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