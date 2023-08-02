import api from "@/api";



const getAll = () =>
{
    return api().get('brands');
}

const getAllBrands = () =>
{
    return api().get('brands-get-all');
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
    return api().post("/brands/delete/" + id);
}

export default {
    storeNewBrand,
    updateBrand,
    getBrand,
    getAll,
    getAllBrands,
    deleteBrand
}