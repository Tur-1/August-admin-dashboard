

import api from "@/api";

const logout = () =>
{

    return api().post('/logout');
}
const setCSRFCookie = () =>
{
    api().get("http://api.localhost:8000/sanctum/csrf-cookie");
}

const login = (fields) =>
{
    setCSRFCookie();
    return api().post("/login", fields);
}
const getUserPermissions = () =>
{

    return api().get("/get-user-permissions");
}

export default {
    logout,
    login,
    getUserPermissions

}