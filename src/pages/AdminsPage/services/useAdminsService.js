import useAdminsApi from "@/pages/AdminsPage/api/useAdminsApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import useRolesApi from "@/pages/RolesPage/api/useRolesApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import useAdminsStore from "@/pages/AdminsPage/stores/AdminsStore";
import { isNotFound, skeletonLoading } from "@/helpers";
import useAuthStore from "@/Auth/store/AuthStore";

export default function useAdminsService()
{
    const adminsStore = useAdminsStore();
    const authStore = useAuthStore();


    const getAllAdmins = async ({ url, search } = {}) =>
    {
        skeletonLoading.show();
        try
        {
            let response = await useAdminsApi.getAllAdmins({
                url: url,
                search: search
            });

            adminsStore.admins = response.data.data;
            adminsStore.paginationLinks = response.data.meta.links;
        } catch (error)
        {

        }

        skeletonLoading.hide();

    }
    const storeNewAdmin = async () =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();



        let response = await useAdminsApi.storeNewAdmin(FormStore.fields);

        FormStore.clearFields();

        useRouterService.redirectBack();

        useToastNotification.open().withMessage(response.data.message);


        FormStore.hideProgress();

    };
    const updateAdmin = async (id) =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            let response = await useAdminsApi.updateAdmin(FormStore.fields, id);

            FormStore.setFields(response.data.admin);

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

        }

        FormStore.hideProgress();

    };
    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        adminsStore.admin_id.id = id;
        adminsStore.admin_id.index = index;
    };
    const deleteAdmin = async () =>
    {

        useLoadingSpinner.show();
        try
        {

            let response = await useAdminsApi.deleteAdmin(adminsStore.admin_id.id);

            adminsStore.admins.splice(adminsStore.admin_id.index, 1);
            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

            useToastNotification.open({ error: true }).withMessage(error.response.message);

        }

        useLoadingSpinner.hide();

    };
    const showAdmin = async (admin_id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();


        try
        {

            let response = await useAdminsApi.getAdmin(admin_id);


            FormStore.setFields(response.data);


            await getRoles();
            await getRolePermissions(response.data.role_id);
        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterService.redirectToRoute('admins');
            }
        }

        useLoadingSpinner.hide();

    };
    const getRoles = async () =>
    {
        useLoadingSpinner.show();


        try
        {
            let response = await useRolesApi.getAllRoles();

            adminsStore.roles = response.data;
        } catch (error)
        {

        }

        useLoadingSpinner.hide();
    }
    const getRolePermissions = async (role_id) =>
    {
        if (role_id)
        {
            useLoadingSpinner.show();

            try
            {
                let response = await useRolesApi.getRolePermission(role_id);

                adminsStore.rolePermissions = response.data;
            } catch (error)
            {

            }

            useLoadingSpinner.hide();
        } else
        {
            adminsStore.rolePermissions = [];
        }

    }


    return {
        getRoles,
        updateAdmin,
        storeNewAdmin,
        getAllAdmins,
        getRolePermissions,
        deleteAdmin,
        showAdmin,
        openConfirmModal
    }

}