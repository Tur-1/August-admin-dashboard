

import api from "@/api";

const logout = () =>
{

    return api().post('/logout');
}

const login = (fields) =>
{

    return api().post("/login", fields);
}

export default {
    logout,
    login,

}