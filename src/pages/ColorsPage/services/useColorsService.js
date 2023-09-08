
import useToastNotification from "@/components/Toast/useToastNotification";
import useRouterService from "@/router/useRouterService";
import useColorsStore from "@/pages/ColorsPage/stores/ColorsStore";
import useColorsApi from "@/pages/ColorsPage/api/useColorsApi";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useConfirmModal } from "@/components/ConfirmModal";
import { FormStore } from "@/components/BaseForm";
import { appendFormData, isNotFound, skeletonLoading } from "@/helpers";

export default function useColorsService()
{

    const ColorsStore = useColorsStore();
    const getAllColors = async () =>
    {

        skeletonLoading.show();

        try
        {
            let response = await useColorsApi.getAll();

            ColorsStore.colors = response.data.data;
            ColorsStore.paginationLinks = response.data.meta.pagination.links;
        } catch (error)
        {

        }

        skeletonLoading.hide();

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


        }

        FormStore.hideProgress();

    };
    const deleteColor = async () =>
    {

        useConfirmModal.showLoading()

        try
        {
            let response = await useColorsApi.deleteColor(ColorsStore.color_id.id);

            ColorsStore.colors.splice(ColorsStore.color_id.index, 1);
            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

        }
        useConfirmModal.hideLoading()

    };
    const showColor = async (id) =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();


        try
        {

            let response = await useColorsApi.getColor(id);

            FormStore.setFields(response.data.color);
        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterService.redirectToRoute('colors');
            }
        }

        useLoadingSpinner.hide();

    };

    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        ColorsStore.color_id.id = id;
        ColorsStore.color_id.index = index;
    };

    return {
        updateColor,
        storeNewColor,
        getAllColors,
        deleteColor,
        showColor,
        openConfirmModal
    }

}