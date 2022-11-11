import api from "@/api";
import axios from "axios";


axios.defaults.withCredentials = true;

const setCsrfCookie = () =>
{
    api().get("http://localhost:8000/sanctum/csrf-cookie");
}
const isAuthenticated = () =>
{
    return api().get('isAuthenticated');
}
const login = (fields) =>
{
    setCsrfCookie();
    return api().post("login", fields);
}
const logout = () =>
{
    return api().post("logout");
}
const register = (fields) =>
{
    setCsrfCookie();
    return api().post("register", fields);
}

export default {
    register,
    login,
    isAuthenticated,
    logout
}