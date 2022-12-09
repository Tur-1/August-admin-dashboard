import useCategoryService from "@/modules/Categories/services/useCategoryService";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";


function setShowingEntries(per_page) 
{
    const { getAllCategories } = useCategoryService();
    CategoriesTableEntries.setActiveEntrie(per_page)
    getAllCategories();

}
export default setShowingEntries