import api from "@/api";



const getAllCategories = ({ url, query, section_id } = {}) =>
{
    return api().get(url ?? "categories", {
        params: {
            search: query,
            section: section_id
        }
    });
}


const getAllCategoriesBySection = (section_id) =>
{
    return api().get(`categories/${ section_id }/sections`);
}

const storeNewCategory = (fields) =>
{

    return api().post("categories/store", fields);
}

const getCategory = (id) =>
{

    return api().post("categories/show/" + id);

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
    getAllCategoriesBySection,
    getAllCategories,
    storeNewCategory,
    getCategory,
    deleteCategory,
    updateCategory

}