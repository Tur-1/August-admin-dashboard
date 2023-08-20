import useCategoryApi from "@/pages/CategoriesPage/api/useCategoryApi";
import useUserStore from "@/Auth/store/userStore";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useToastNotification from "@/components/Toast/useToastNotification";
import { useRoute } from "vue-router";
import { FormStore } from "@/components/BaseForm";
import { appendFormData } from "@/helpers";
import useSectionApi from "@/pages/CategoriesPage/api/useSectionApi";
import CategoryStore from "@/pages/CategoriesPage/stores/CategoryStore";

const AuthUser = useUserStore();
export default function useSectionService()
{


    const getSections = async () =>
    {

        let response = await useSectionApi.getSections();
        CategoryStore.sections = response.data;


    }

    const storeNewSection = async (formData) =>
    {
        if (AuthUser.userCanAccess('create-categories'))
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
                FormStore.setErrors(error);
            }
            FormStore.hideProgress();
        }
    };
    const showSection = async () =>
    {
        if (AuthUser.userCanAccess('view-categories'))
        {
            useLoadingSpinner.show();

            const route = useRoute();

            let response = await useCategoryApi.getCategory(route.params.id);

            FormStore.setFields(response.data);

            useLoadingSpinner.hide();
        }
    };
    const updateSection = async (formData) =>
    {
        if (AuthUser.userCanAccess('update-categories'))
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

                FormStore.setErrors(error);
            }
            FormStore.hideProgress();
        }
    };
    return {
        getSections,
        storeNewSection,
        showSection,
        updateSection
    }

}