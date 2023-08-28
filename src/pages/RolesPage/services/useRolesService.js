import useRolesApi from "@/pages/RolesPage/api/useRolesApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useRolesStore from "@/pages/RolesPage/stores/RolesStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import useRouterService from "@/router/useRouterService";
import { skeletonLoading } from "@/helpers";

export default function useRolesService()
{
    const roleStore = useRolesStore();
    const getAllPermissions = async () =>
    {
        useLoadingSpinner.show();
        let response = await useRolesApi.getAllPermissions();

        roleStore.permissions = response.data

        useLoadingSpinner.hide();

    }

    const getRoles = async ({ url } = {}) =>
    {
        skeletonLoading.show();
        let response = await useRolesApi.getRoles({
            url: url,
        });

        roleStore.roles = response.data.data;
        roleStore.pagination = response.data.meta.pagination.links;
        skeletonLoading.hide();

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

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {
            FormStore.setErrors(error);
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

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

            FormStore.setErrors(error);
        }

        FormStore.hideProgress();

    };
    const deleteRole = async () =>
    {

        useConfirmModal.showLoading()
        let response = await useRolesApi.deleteRole(roleStore.role_id.id);

        roleStore.roles.splice(roleStore.role_id.index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading()

    };
    const showRole = async (id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();


        let response = await useRolesApi.getRole(id);


        FormStore.setFields(response.data.role);
        FormStore.fields.permissions = FormStore.fields.permissions_ids;

        useLoadingSpinner.hide();

    };
    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        roleStore.role_id.id = id;
        roleStore.role_id.index = index;
    };


    return {
        getAllPermissions,
        updateRole,
        storeNewRole,
        getRoles,
        deleteRole,
        showRole,
        openConfirmModal
    }

}