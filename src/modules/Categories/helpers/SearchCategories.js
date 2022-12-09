import CategoryStore from "@/modules/Categories/stores/CategoryStore";


function SearchCategories(value) 
{
    CategoryStore.value.filtered = CategoryStore.value.list.data.filter(
        (category) =>
        {
            return category.name.toLowerCase().includes(value.toLowerCase());
        }
    );
}

export default SearchCategories