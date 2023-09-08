import api from "@/api";



const getRoles = (obj) =>
{

    return api().get(obj.url ?? "/roles").catch(error =>
    {

    });
}

const getAllRoles = () =>
{
    return api().get("/get-all-roles");
}
const getRolePermission = (role_id) =>
{
    return api().get(`/roles/${ role_id }/permissions`);
}
const getAllPermissions = () =>
{
    return api().get("roles/permissions");
}

const storeNewRole = (fields) =>
{

    return api().post("/roles/store", fields);
}
const updateRole = (fields, id) =>
{

    return api().post("/roles/update/" + id, fields);
}
const getRole = (id) =>
{
    return api().post("/roles/show/" + id);
}
const deleteRole = (id) =>
{
    return api().post("/roles/delete/" + id);
}

export default {
    getRolePermission,
    getAllRoles,
    getAllPermissions,
    storeNewRole,
    updateRole,
    getRole,
    getRoles,
    deleteRole
}