import useCategoryApi from "@/pages/CategoriesPage/api/useCategoryApi";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useToastNotification from "@/components/Toast/useToastNotification";
import { FormStore } from "@/components/BaseForm";
import { appendFormData } from "@/helpers";
import useSectionApi from "@/pages/CategoriesPage/api/useSectionApi";
import useCategoriesStore from "@/pages/CategoriesPage/stores/CategoriesStore";


export default function useSectionService()
{

    const categoriesStore = useCategoriesStore();
    const getSections = async () =>
    {
        let response = await useSectionApi.getSections();
        categoriesStore.sections = response.data;
    }

    const storeNewSection = async (formData) =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {
            const formData = appendFormData(FormStore.fields);

            let response = await useSectionApi.storeNewSection(formData);

            FormStore.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open().withMessage(response.data.message);



        } catch (error)
        {

        }
        FormStore.hideProgress();

    };
    const showSection = async (id) =>
    {

        useLoadingSpinner.show();



        try
        {
            let response = await useCategoryApi.getCategory(id);

            FormStore.setFields(response.data);
        } catch (error)
        {

        }

        useLoadingSpinner.hide();

    };
    const updateSection = async (formData) =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        try
        {

            const formData = appendFormData(FormStore.fields);

            let response = await useSectionApi.updateSection({
                id: FormStore.fields.id,
                formData: formData
            });

            FormStore.setFields(response.data.category);
            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

        }
        FormStore.hideProgress();

    };
    return {
        getSections,
        storeNewSection,
        showSection,
        updateSection
    }

}