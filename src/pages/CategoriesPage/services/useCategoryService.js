import useCategoryApi from "@/pages/CategoriesPage/api/useCategoryApi";
import CategoryStore from "@/pages/CategoriesPage/stores/CategoryStore";
import useRouterService from "@/router/useRouterService";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useUserStore from "@/Auth/store/userStore";
import useToastNotification from "@/components/Toast/useToastNotification";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { useRoute } from "vue-router";
import { FormStore } from "@/components/BaseForm";
import { appendFormData } from "@/helpers";
import useSectionService from "@/pages/CategoriesPage/services/useSectionService";

const AuthUser = useUserStore();
export default function useCategoryService()
{



    const getAllCategories = async ({ url, query, section_id } = {}) =>
    {


        if (AuthUser.userCanAccess('access-categories'))
        {
            useLoadingSpinner.show();
            let response = await useCategoryApi.getAllCategories(
                {
                    url: url,
                    query: query,
                    section_id: section_id

                });


            CategoryStore.list = response.data.data;
            CategoryStore.pagination = response.data.meta.pagination;

            useLoadingSpinner.hide();

        }

    }

    const getAllCategoriesBySection = async (section_id) =>
    {

        if (AuthUser.userCanAccess('access-categories') && section_id)
        {

            useLoadingSpinner.show();

            let response = await useCategoryApi.getAllCategoriesBySection(section_id);

            CategoryStore.sectionCategories = response.data;

            useLoadingSpinner.hide();

        }
    }

    const storeNewCategory = async (formData) =>
    {
        if (AuthUser.userCanAccess('create-categories'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();

            try
            {
                const formData = appendFormData(FormStore.fields);

                let response = await useCategoryApi.storeNewCategory(formData);

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
    const updateCategory = async (formData) =>
    {
        if (AuthUser.userCanAccess('update-categories'))
        {
            FormStore.showProgress();
            FormStore.clearErrors();

            try
            {
                const formData = appendFormData(FormStore.fields);


                let response = await useCategoryApi.updateCategory({
                    formData: formData,
                    id: FormStore.fields.id
                });


                FormStore.setFields(response.data.category);


                useToastNotification.open().withMessage(response.data.message);


            } catch (error)
            {

                console.log(error.response);
                FormStore.setErrors(error);
            }
            FormStore.hideProgress();
        }
    };
    const destroyCategory = async (category) =>
    {


        if (AuthUser.userCanAccess('delete-categories'))
        {
            useConfirmModal.showLoading()

            let response = await useCategoryApi.deleteCategory(category.id);

            CategoryStore.list.splice(category.index, 1);
            useConfirmModal.close();

            useToastNotification.open().withMessage(response.data.message);

            useConfirmModal.hideLoading()
        }


    }
    const showCategory = async () =>
    {
        if (AuthUser.userCanAccess('view-categories'))
        {
            useLoadingSpinner.show();
            FormStore.clearErrors();


            const route = useRoute();

            let response = await useCategoryApi.getCategory(route.params.id);

            FormStore.setFields(response.data);
            const { getSections } = useSectionService();

            await getSections();
            await getAllCategoriesBySection(FormStore.fields.section_id);
            useLoadingSpinner.hide();

        }
    };

    return {
        getAllCategoriesBySection,
        getAllCategories,
        storeNewCategory,
        destroyCategory,
        showCategory,
        updateCategory
    }

}