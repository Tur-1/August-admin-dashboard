import api from "@/api";



const getAllCategories = ({ records: records, url: url }) =>
{
    return api().get(url ?? "categories", { params: { records: records } });
}
const getSections = () =>
{
    return api().get('categories/sections');
}
const getCategoriesBySection = (section_id) =>
{
    return api().get(`categories/sections/${ section_id }`);
}
const storeNewCategory = (fields) =>
{

    return api().post("categories/store", fields);
}
const storeNewSection = (fields) =>
{

    return api().post("categories/section/store", fields);
}
const getCategory = (id) =>
{

    return api().post("categories/show/" + id);

}
const updateSection = ({ id: id, formData: formData }) =>
{

    return api().post("categories/section/update/" + id, formData);
}
const updateCategory = ({ id: id, formData: formData }) =>
{

    return api().post("categories/update/" + id, formData);
}

const deleteCategory = (id) =>
{
    return api().post(`categories/delete/${ id }`);
}
export default {
    getAllCategories,
    getCategoriesBySection,
    storeNewCategory,
    getSections,
    storeNewSection,
    getCategory,
    deleteCategory,
    updateSection,
    updateCategory

}