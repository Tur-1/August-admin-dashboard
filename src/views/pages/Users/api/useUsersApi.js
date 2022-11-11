import api from "@/api";




const storeNewUser = (fields) =>
{

    return api().post("/users/create", fields);
}
const updateUser = (fields, id) =>
{

    return api().post("/users/update/" + id, fields);
}
const getUser = (id) =>
{
    return api().post("/users/find/" + id);
}
export default {
    storeNewUser,
    updateUser,
    getUser
}