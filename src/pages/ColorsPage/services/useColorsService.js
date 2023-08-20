
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import ColorsStore from "@/pages/ColorsPage/stores/ColorsStore";
import useColorsApi from "@/pages/ColorsPage/api/useColorsApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { appendFormData } from "@/helpers";

export default function useColorsService()
{

    const getAllColors = async () =>
    {

        let response = await useColorsApi.getAll();

        ColorsStore.value.filtered = response.data.data;
        ColorsStore.value.list = response.data;
        ColorsStore.value.pagination = response.data.pagination;

    }
    const storeNewColor = async () =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            const formData = appendFormData(FormStore.fields);

            let response = await useColorsApi.storeNewColor(formData);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

            FormStore.setErrors(error);
        }
        FormStore.hideProgress();

    };
    const updateColor = async (id) =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();


        try
        {

            const formData = appendFormData(FormStore.fields);


            let response = await useColorsApi.updateColor({
                id: id,
                fields: formData
            });

            FormStore.setFields(response.data.color);

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

            FormStore.setErrors(error);
        }

        FormStore.hideProgress();

    };
    const deleteColor = async ({ id, index }) =>
    {

        useConfirmModal.showLoading()
        let response = await useColorsApi.deleteColor(id);

        ColorsStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading()

    };
    const showColor = async (id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();


        let response = await useColorsApi.getColor(id);

        FormStore.setFields(response.data.color);

        useLoadingSpinner.hide();

    };



    return {
        updateColor,
        storeNewColor,
        getAllColors,
        deleteColor,
        showColor
    }

}