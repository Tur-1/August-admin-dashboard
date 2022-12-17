import api from "@/api";



const getAllBrands = () =>
{
    return api().get('brands');
}
const storeNewBrand = (fields) =>
{

    return api().post("/brands/store", fields);
}
const updateBrand = ({ fields, id }) =>
{

    return api().post("/brands/update/" + id, fields);
}
const getBrand = (id) =>
{
    return api().post("/brands/show/" + id);
}
const deleteBrand = (id) =>
{
    return api().delete("/brands/delete/" + id);
}

export default {
    storeNewBrand,
    updateBrand,
    getBrand,
    getAllBrands,
    deleteBrand
}