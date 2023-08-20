import useUsersApi from "@/pages/UsersPage/api/useUsersApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useUsersStore from "@/pages/UsersPage/stores/UsersStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import useRolesApi from "@/pages/Roles/api/useRolesApi";

export default function useUsersService()
{
    const UsersStore = useUsersStore();


    const getAllUsers = async ({ url, search } = {}) =>
    {
        UsersStore.showLoading();
        let response = await useUsersApi.getUsers({
            url: url,
            search: search
        });

        UsersStore.users = response.data.data;
        UsersStore.paginationLinks = response.data.meta.pagination.links;

        UsersStore.hideLoading();

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

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

            FormStore.setErrors(error);
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


            FormStore.setFields(response.data.user);

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
        UsersStore.user_id.id = id;
        UsersStore.user_id.index = index;
    };
    const deleteUser = async () =>
    {

        useConfirmModal.showLoading()
        let response = await useUsersApi.deleteUser(UsersStore.user_id.id);

        UsersStore.users.splice(UsersStore.user_id.index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading()

    };
    const showUser = async (user_id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();


        let response = await useUsersApi.getUser(user_id);


        FormStore.setFields(response.data);


        await getRoles();
        await getRolePermissions(response.data.role_id);

        useLoadingSpinner.hide();

    };
    const getRoles = async () =>
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


    return {
        getRoles,
        updateUser,
        storeNewUser,
        getAllUsers,
        getRolePermissions,
        deleteUser,
        showUser,
        openConfirmModal
    }

}