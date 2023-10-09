

import api from "@/api";


const setCSRFCookie = () =>
{
    api().get("http://e-august.shop/sanctum/csrf-cookie");
}

const login = (fields) =>
{
    setCSRFCookie();
    return api().post("login", fields);
}
const logout = () =>
{

    return api().post('logout');
}
const getAdminPermissions = () =>
{

    return api().get("get-admin-permissions");
}

export default {
    logout,
    login,
    getAdminPermissions

}