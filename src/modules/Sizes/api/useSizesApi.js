import api from "@/api";



const getSizes = (obj) =>
{

    return api().get(obj.url ?? "/sizes");
}
const storeNewSize = (fields) =>
{

    return api().post("/sizes/store", fields);
}
const updateSize = (fields, id) =>
{

    return api().put("/sizes/update/" + id, fields);
}
const getSize = (id) =>
{
    return api().post("/sizes/show/" + id);
}
const deleteSize = (id) =>
{
    return api().delete("/sizes/delete/" + id);
}

export default {
    storeNewSize,
    updateSize,
    getSize,
    getSizes,
    deleteSize
}