import TableEntries from "@/components/MainTable/TableEntries";
import useCategoryService from "@/modules/Categories/services/useCategoryService";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";



function setShowingEntries(records) 
{
    const { getAllCategories } = useCategoryService();
    TableEntries.setActiveEntrie(records)
    getAllCategories();

}
export default setShowingEntries