import api from "@/api";



const getAllProducts = () =>
{
    return api().get('products');
}



const storeNewProduct = () =>
{

    return api().post("products/store");
}
const updateProduct = ({ fields, id }) =>
{
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    return api().post("/products/update/" + id, fields, config);
}

const uploadProductImages = ({ fields, id }) =>
{

    return api().post("/products/update/" + id, fields, config);
}
const getProduct = (id) =>
{
    return api().post("/products/show/" + id);
}
const publishProduct = (id, publish_value) =>
{
    return api().post(`/products/${ id }/publish/` + publish_value);
}
const deleteProduct = (id) =>
{
    return api().post("/products/delete/" + id);
}
const deleteProductImage = (image_id) =>
{
    return api().post("/products/images/delete/" + image_id);
}
const changeProductMainImage = (image_id) =>
{
    return api().post("/products/images/update-main-image/" + image_id);
}

export default {
    getAllProducts,
    storeNewProduct,
    updateProduct,
    getProduct,
    deleteProductImage,
    deleteProduct,
    changeProductMainImage,
    publishProduct
}