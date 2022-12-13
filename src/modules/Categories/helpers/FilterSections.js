import CategoryStore from "@/modules/Categories/stores/CategoryStore";


function FilterSections() 
{
    return CategoryStore.value.list.data.filter((category) =>
    {
        return category.section == null
    });
}
export default FilterSections