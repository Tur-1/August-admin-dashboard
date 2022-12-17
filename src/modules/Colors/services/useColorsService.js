
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import colorsStore from "@/modules/Colors/stores/colorsStore";
import useColorsApi from "@/modules/Colors/api/useColorsApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import { appendFormData } from "@/helpers";


export default function useColorsService()
{

    const getAllColors = async () =>
    {

        let response = await useColorsApi.getAllColors();

        colorsStore.value.filtered = response.data.data;
        colorsStore.value.list = response.data;
        colorsStore.value.pagination = response.data.pagination;




    }
    const storeNewColor = async (formData) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            appendFormData(formData, FormStore.fields);

            let response = await useColorsApi.storeNewColor(formData);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);

        } catch (error)
        {

            FormStore.setErrors(error.response);
        }
        FormStore.hideProgress();

    };
    const updateColor = async (formData) =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();


        try
        {

            appendFormData(formData, FormStore.fields);
            let response = await useColorsApi.updateColor({
                id: FormStore.fields.id,
                fields: formData
            });

            FormStore.setFields(response.data.data.color);

            useToastNotification.open(response.data.data.message);
        } catch (error)
        {

            FormStore.setErrors(error.response);
        }

        FormStore.hideProgress();

    };
    const deleteColor = async ({ id, index }) =>
    {
        useConfirmModal.onProgress(true)
        let response = await useColorsApi.deleteColor(id);

        colorsStore.value.filtered.splice(index, 1);
        useConfirmModal.close();

        useToastNotification.open(response.data.data.message);

        useConfirmModal.onProgress(false)

    };
    const showColor = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();

        let response = await useColorsApi.getColor(route.params.id);

        FormStore.setFields(response.data.data.color);

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