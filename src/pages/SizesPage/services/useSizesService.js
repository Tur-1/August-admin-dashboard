import useSizesApi from "@/pages/SizesPage/api/useSizesApi";
import useToastNotification from "@/components/Toast/useToastNotification";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useSizeStore from "@/pages/SizesPage/stores/SizeStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { FormStore } from "@/components/BaseForm";
import useRouterService from "@/router/useRouterService";
import { skeletonLoading } from "@/helpers";


export default function useSizesService()
{
    const sizeStore = useSizeStore();
    const getAllSizes = async ({ url } = {}) =>
    {
        skeletonLoading.show();

        let response = await useSizesApi.getSizes({
            url: url,
        });

        sizeStore.sizes = response.data.data;
        sizeStore.paginationLinks = response.data.pagination.links;
        skeletonLoading.hide();
    }
    const storeNewSize = async () =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            let response = await useSizesApi.storeNewSize(FormStore.fields);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

            FormStore.setErrors(error);

        }
        FormStore.hideProgress();

    };
    const updateSize = async (id) =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            let response = await useSizesApi.updateSize(FormStore.fields, id);


            FormStore.setFields(response.data.size);


            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

            FormStore.setErrors(error);

        }
        FormStore.hideProgress();

    };
    const deleteSize = async () =>
    {

        useConfirmModal.showLoading()
        let response = await useSizesApi.deleteSize(sizeStore.size_id.id);

        sizeStore.sizes.splice(sizeStore.size_id.index, 1);
        useConfirmModal.close();

        useToastNotification.open().withMessage(response.data.message);

        useConfirmModal.hideLoading()

    };
    const showSize = async (id) =>
    {

        FormStore.clearErrors();
        useLoadingSpinner.show();

        let response = await useSizesApi.getSize(id);

        FormStore.setFields(response.data.size);

        useLoadingSpinner.hide();

    };
    const openConfirmModal = ({ id, index }) =>
    {
        useConfirmModal.open();
        sizeStore.size_id.id = id;
        sizeStore.size_id.index = index;
    };



    return {
        updateSize,
        storeNewSize,
        getAllSizes,
        deleteSize,
        showSize,
        openConfirmModal
    }

}