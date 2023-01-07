import CategoryStore from "@/modules/Categories/stores/CategoryStore";


function FilterCategoriesBySection(sectionId)
{
    CategoryStore.filtered = CategoryStore.list.data.filter((category) =>
    {
        if (sectionId !== null)
        {
            return category.section_id == sectionId;
        } else
        {
            return category;
        }

    });
}


export default FilterCategoriesBySection