
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import ColorsStore from "@/modules/Colors/stores/ColorsStore";
import useColorsApi from "@/modules/Colors/api/useColorsApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import { appendFormData } from "@/helpers";
import AuthUser from "@/Auth/store/AuthUser";

export default function useColorsService()
{

    const getAllColors = async () =>
    {
        if (AuthUser.userCanAccess('access-colors'))
        {
            let response = await useColorsApi.getAll();

            ColorsStore.value.filtered = response.data.data;
            ColorsStore.value.list = response.data;
            ColorsStore.value.pagination = response.data.pagination;

        }
    }
    const storeNewColor = async () =>
    {
        if (AuthUser.userCanAccess('create-colors'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();

            try
            {
                const formData = appendFormData(FormStore.fields);

                let response = await useColorsApi.storeNewColor(formData);

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
    const updateColor = async () =>
    {
        if (AuthUser.userCanAccess('update-colors'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();


            try
            {

                const formData = appendFormData(FormStore.fields);


                let response = await useColorsApi.updateColor({
                    id: FormStore.fields.id,
                    fields: formData
                });

                FormStore.setFields(response.data.color);

                useToastNotification.open(response.data.message);
            } catch (error)
            {

                FormStore.setErrors(error.response);
            }

            FormStore.hideProgress();
        }
    };
    const deleteColor = async ({ id, index }) =>
    {
        if (AuthUser.userCanAccess('delete-colors'))
        {
            useConfirmModal.onProgress(true)
            let response = await useColorsApi.deleteColor(id);

            ColorsStore.value.filtered.splice(index, 1);
            useConfirmModal.close();

            useToastNotification.open(response.data.message);

            useConfirmModal.onProgress(false)
        }
    };
    const showColor = async () =>
    {
        if (AuthUser.userCanAccess('view-colors'))
        {
            useLoadingSpinner.show();
            FormStore.clearErrors();

            const route = useRoute();

            let response = await useColorsApi.getColor(route.params.id);

            FormStore.setFields(response.data.color);

            useLoadingSpinner.hide();
        }
    };



    return {
        updateColor,
        storeNewColor,
        getAllColors,
        deleteColor,
        showColor
    }

}