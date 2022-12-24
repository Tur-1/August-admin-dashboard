import api from "@/api";



const getAllProducts = () =>
{
    return api().get('products');
}
const storeNewProduct = (fields) =>
{
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    return api().post("products/store", fields, config);
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