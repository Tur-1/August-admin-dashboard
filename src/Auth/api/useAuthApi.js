
import axios from "axios";

axios.defaults.withCredentials = true;

const setCsrfCookie = () =>
{
    axios.get("http://localhost:8000/sanctum/csrf-cookie");
}
const logout = () =>
{
    return axios.post('http://localhost:8000/api/logout');
}
const isAuthenticated = () =>
{
    return axios.get('http://localhost:8000/api/isAuthenticated');
}
const login = (fields) =>
{
    setCsrfCookie();
    return axios.post("http://localhost:8000/api/login", fields);
}

export default {
    logout,
    isAuthenticated,
    login

}