import api from "@/api";




const getSections = () =>
{
    return api().get('categories/sections');
}
const storeNewSection = (fields) =>
{

    return api().post("categories/sections/store", fields);
}
const updateSection = ({ id: id, formData: formData }) =>
{

    return api().post(`categories/sections/${ id }/update`, formData);
}
export default {
    getSections,
    storeNewSection,
    updateSection,

}