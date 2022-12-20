import api from "@/api";



const getAllProducts = () =>
{
    return api().get('products');
}
const storeNewProduct = (fields) =>
{

    return api().post("/products/store", fields);
}
const updateProduct = ({ fields, id }) =>
{

    return api().post("/products/update/" + id, fields);
}
const getProduct = (id) =>
{
    return api().post("/products/show/" + id);
}
const deleteProduct = (id) =>
{
    return api().delete("/products/delete/" + id);
}

export default {
    getAllProducts,
    storeNewProduct,
    updateProduct,
    getProduct,
    deleteProduct
}