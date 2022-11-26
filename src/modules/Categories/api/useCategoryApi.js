import api from "@/api";



const getAllCategories = ({ perPage, url }) =>
{
    return api().get(url ?? "/categories", { params: { per_page: perPage } });
}
const getCategoriesBySection = (section_id) =>
{
    return api().get(`/categories/${ section_id }/section`,);
}
const storeNewCategory = (fields) =>
{

    return api().post("/categories/store", fields);
}

export default {
    getAllCategories,
    getCategoriesBySection,
    storeNewCategory

}