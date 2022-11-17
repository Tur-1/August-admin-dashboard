import api from "@/api";



const getUsers = ({ perPage, url }) =>
{
    return api().get(url ?? "/users", { params: { per_page: perPage } });
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