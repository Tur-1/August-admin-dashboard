import useCategoryApi from "@/modules/Categories/api/useCategoryApi";

import CategoriesOnProgress from "@/modules/Categories/stores/CategoriesOnProgress";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";

import CategoriesTableEntries from "@/modules/Categories/stores/CategoriesTableEntries";
import CategoryForm from "@/modules/Categories/stores/CategoryForm";
import useRouterService from "@/router/useRouterService";
import FormData from "form-data";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useToastNotification from "@/components/Toast/useToastNotification";
import { useRoute } from "vue-router";


export default function useSectionService()
{

    const storeNewSection = async (formData) =>
    {
        CategoryForm.showProgress();
        CategoryForm.clearErrors();

        try
        {
            let field;
            for (field in CategoryForm.fields)
            {
                formData.append(field, CategoryForm.fields[field]);
            }


            let response = await useCategoryApi.storeNewSection(formData);

            CategoryForm.clearFields();

            useRouterService.redirectBack();

            useToastNotification.open(response.data.data.message);



        } catch (error)
        {
            CategoryForm.setErrors(error.response);
        }
        CategoryForm.hideProgress();

    };
    const getSection = async () =>
    {
        useLoadingSpinner.show();

        const route = useRoute();

        let response = await useCategoryApi.getCategory(route.params.id);


        CategoryForm.fields.id = response.data.data.id;
        CategoryForm.fields.name = response.data.data.name;
        CategoryForm.fields.image_url = response.data.data.image_url;

        useLoadingSpinner.hide();

    };
    const updateSection = async (formData) =>
    {



        CategoryForm.showProgress();
        CategoryForm.clearErrors();

        try
        {
            let field;
            for (field in CategoryForm.fields)
            {
                formData.append(field, CategoryForm.fields[field]);
            }


            let response = await useCategoryApi.updateSection({
                id: CategoryForm.fields.id,
                formData: formData
            });



            console.log(response.data);

            CategoryForm.fields = response.data.data.category;

            useToastNotification.open(response.data.data.message);



        } catch (error)
        {

            CategoryForm.setErrors(error.response);
        }
        CategoryForm.hideProgress();

    };
    return {

        storeNewSection,
        getSection,
        updateSection
    }

}