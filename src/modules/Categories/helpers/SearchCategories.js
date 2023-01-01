import CategoryStore from "@/modules/Categories/stores/CategoryStore";


function SearchCategories(value) 
{
    CategoryStore.filtered = CategoryStore.list.data.filter(
        (category) =>
        {
            return category.name.toLowerCase().includes(value.toLowerCase());
        }
    );
}

export default SearchCategories