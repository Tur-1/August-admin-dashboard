
import { useLoadingSpinner } from "@/components/LoadingSpinner"; import useUserStore from "@/Auth/store/userStore";

import useColorsApi from "@/modules/Colors/api/useColorsApi";
import ProductAttributesStore from "@/modules/Products/stores/ProductAttributesStore";
import useBrandsApi from "@/modules/Brands/api/useBrandsApi";
import useCategoryApi from "@/modules/Categories/api/useCategoryApi";
import useSizesApi from "@/modules/Sizes/api/useSizesApi";

const AuthUser = useUserStore();
export default function useProductAttributesService()
{


    const getColors = async () =>
    {
        useLoadingSpinner.show();
        let response = await useColorsApi.getAllColors();

        ProductAttributesStore.value.colors = response.data;
        useLoadingSpinner.hide();
    }

    const getBrands = async () =>
    {

        useLoadingSpinner.show();
        let response = await useBrandsApi.getAllBrands();

        ProductAttributesStore.value.brands = response.data;
        useLoadingSpinner.hide();
    }
    const getSizeOptions = async () =>
    {

        useLoadingSpinner.show();
        let response = await useSizesApi.getAllSizes();

        ProductAttributesStore.value.sizes = response.data;
        useLoadingSpinner.hide();
    }
    const getSections = async () =>
    {

        useLoadingSpinner.show();
        let response = await useCategoryApi.getSections();

        ProductAttributesStore.value.sections = response.data;
        useLoadingSpinner.hide();
    }
    const getCategories = async (section_id) =>
    {

        if (section_id)
        {
            let response = await useCategoryApi.getCategoriesBySection(section_id);
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
        getCategories,
        getSections,
        getSizeOptions,
    }

}