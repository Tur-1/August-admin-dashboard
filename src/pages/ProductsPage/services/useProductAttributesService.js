
import { useLoadingSpinner } from "@/components/LoadingSpinner"; import useUserStore from "@/Auth/store/userStore";

import useColorsApi from "@/pages/Colors/api/useColorsApi";
import ProductAttributesStore from "@/pages/Products/stores/ProductAttributesStore";
import useBrandsApi from "@/pages/Brands/api/useBrandsApi";
import useCategoryApi from "@/pages/Categories/api/useCategoryApi";
import useSizesApi from "@/pages/Sizes/api/useSizesApi";
import useSectionApi from "@/pages/Categories/api/useSectionApi";

const AuthUser = useUserStore();
export default function useProductAttributesService()
{


    const getColors = async () =>
    {

        let response = await useColorsApi.getAllColors();

        ProductAttributesStore.value.colors = response.data;

    }

    const getBrands = async () =>
    {

        let response = await useBrandsApi.getAllBrands();

        ProductAttributesStore.value.brands = response.data;

    }
    const getSizeOptions = async () =>
    {

        let response = await useSizesApi.getAllSizes();

        ProductAttributesStore.value.sizes = response.data;

    }
    const getSections = async () =>
    {


        let response = await useSectionApi.getSections();

        ProductAttributesStore.value.sections = response.data;

    }
    const getAllCategoriesBySection = async (section_id) =>
    {
        useLoadingSpinner.show();
        if (section_id)
        {

            let response = await useCategoryApi.getAllCategoriesBySection(section_id);


            ProductAttributesStore.value.categories = response.data;
        } else
        {
            ProductAttributesStore.value.categories = [];
        }
        useLoadingSpinner.hide();
    }

    return {
        getColors,
        getBrands,
        getAllCategoriesBySection,
        getSections,
        getSizeOptions,
    }

}