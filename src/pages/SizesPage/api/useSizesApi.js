import api from "@/api";



const getSizes = (obj) =>
{

    return api().get(obj.url ?? "/sizes");
}

const getAllSizes = (obj) =>
{

    return api().get("/sizes-get-all");
}
const storeNewSize = (fields) =>
{

    return api().post("/sizes/store", fields);
}
const updateSize = (fields, id) =>
{

    return api().post("/sizes/update/" + id, fields);
}
const getSize = (id) =>
{
    return api().post("/sizes/show/" + id);
}
const deleteSize = (id) =>
{
    return api().post("/sizes/delete/" + id);
}

export default {
    storeNewSize,
    updateSize,
    getSize,
    getSizes,
    deleteSize,
    getAllSizes
}