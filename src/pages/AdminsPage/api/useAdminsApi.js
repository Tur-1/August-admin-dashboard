import api from "@/api";



const getAllAdmins = (obj) =>
{

    return api().get(obj.url ?? "/admins", { params: { search: obj.search } });
}
const storeNewAdmin = (fields) =>
{

    return api().post("/admins/store", fields);
}
const updateAdmin = (fields, id) =>
{

    return api().post("/admins/update/" + id, fields);
}
const getAdmin = (id) =>
{
    return api().post("/admins/show/" + id);
}
const deleteAdmin = (id) =>
{
    return api().post("/admins/delete/" + id);
}

export default {
    storeNewAdmin,
    updateAdmin,
    getAdmin,
    getAllAdmins,
    deleteAdmin
}