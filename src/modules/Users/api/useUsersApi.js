import api from "@/api";



const getUsers = (obj) =>
{

    return api().get(obj.url ?? "/users", { params: { records: obj.records, search: obj.search } });
}
const storeNewUser = (fields) =>
{

    return api().post("/users/store", fields);
}
const updateUser = (fields, id) =>
{

    return api().put("/users/update/" + id, fields);
}
const getUser = (id) =>
{
    return api().post("/users/show/" + id);
}
const deleteUser = (id) =>
{
    return api().delete("/users/delete/" + id);
}

export default {
    storeNewUser,
    updateUser,
    getUser,
    getUsers,
    deleteUser
}