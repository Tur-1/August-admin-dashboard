import useRolesApi from "@/modules/Roles/api/useRolesApi";
import useToastNotification from "@/components/Toast/useToastNotification";

import { useLoadingSpinner } from "@/components/LoadingSpinner";
import RolesStore from "@/modules/Roles/stores/RolesStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import useRouterService from "@/router/useRouterService";



export default function useRolesService()
{

    const getAllPermissions = async () =>
    {
        useLoadingSpinner.show();
        let response = await useRolesApi.getAllPermissions();

        RolesStore.value.permissions = response.data;

        useLoadingSpinner.hide();

    }

    const getRoles = async ({ url } = {}) =>
    {


        let response = await useRolesApi.getRoles({
            url: url,
        });

        RolesStore.value.filtered = response.data;
        RolesStore.value.list = response.data;
        RolesStore.value.pagination = response.data.meta.pagination;

    }
    const storeNewRole = async () =>
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

    };
    const updateRole = async (id) =>
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

    };
    const deleteRole = async ({ id, index }) =>
    {
        useConfirmModal.onProgress(true)
        let response = await useRolesApi.deleteRole(id);

        RolesStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.message);

        useConfirmModal.onProgress(false)

    };
    const showRole = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();

        let response = await useRolesApi.getRole(route.params.id);


        FormStore.setFields(response.data.role);
        FormStore.fields.permissions = FormStore.fields.permissions_ids;

        useLoadingSpinner.hide();

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