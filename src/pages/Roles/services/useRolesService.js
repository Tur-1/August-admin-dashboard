import useRolesApi from "@/pages/Roles/api/useRolesApi";
import useToastNotification from "@/components/Toast/useToastNotification";

import { useLoadingSpinner } from "@/components/LoadingSpinner"; import useUserStore from "@/Auth/store/userStore";
import RolesStore from "@/pages/Roles/stores/RolesStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import useRouterService from "@/router/useRouterService";


const AuthUser = useUserStore();
export default function useRolesService()
{

    const getAllPermissions = async () =>
    {
        useLoadingSpinner.show();
        let response = await useRolesApi.getAllPermissions();

        RolesStore.value.permissions = response.data

        useLoadingSpinner.hide();

    }

    const getRoles = async ({ url } = {}) =>
    {
        if (AuthUser.userCanAccess('access-roles'))
        {

            let response = await useRolesApi.getRoles({
                url: url,
            });

            RolesStore.value.filtered = response.data.data;
            RolesStore.value.list = response.data;
            RolesStore.value.pagination = response.data.meta.pagination;
        }
    }
    const storeNewRole = async () =>
    {
        if (AuthUser.userCanAccess('create-roles'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();

            try
            {
                let response = await useRolesApi.storeNewRole(FormStore.fields);

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
    const updateRole = async (id) =>
    {
        if (AuthUser.userCanAccess('update-roles'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();

            try
            {

                let response = await useRolesApi.updateRole(FormStore.fields, id);


                FormStore.setFields(response.data.role);
                FormStore.fields.permissions = FormStore.fields.permissions_ids;

                useToastNotification.open(response.data.message);
            } catch (error)
            {

                FormStore.setErrors(error.response);
            }

            FormStore.hideProgress();
        }
    };
    const deleteRole = async ({ id, index }) =>
    {
        if (AuthUser.userCanAccess('delete-roles'))
        {
            useConfirmModal.onProgress(true)
            let response = await useRolesApi.deleteRole(id);

            RolesStore.value.filtered.splice(index, 1);
            useConfirmModal.close();

            useToastNotification.open(response.data.message);

            useConfirmModal.onProgress(false)
        }
    };
    const showRole = async () =>
    {
        if (AuthUser.userCanAccess('view-roles'))
        {
            useLoadingSpinner.show();
            FormStore.clearErrors();

            const route = useRoute();

            let response = await useRolesApi.getRole(route.params.id);


            FormStore.setFields(response.data.role);
            FormStore.fields.permissions = FormStore.fields.permissions_ids;

            useLoadingSpinner.hide();
        }
    };


    return {
        getAllPermissions,
        updateRole,
        storeNewRole,
        getRoles,
        deleteRole,
        showRole
    }

}