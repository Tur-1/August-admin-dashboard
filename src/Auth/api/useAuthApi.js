
import useUserStore from "@/Auth/store/userStore";
import axios from "axios";

axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = `Bearer ${ userStore.access_token }`;


const setCsrfCookie = () =>
{
    axios.get("http://localhost:8000/sanctum/csrf-cookie");
}
const logout = () =>
{
    const userStore = useUserStore();
    return axios.post('http://localhost:8000/api/logout', {
        headers: {
            "Authorization": 'Bearer ' + userStore.access_token
        }
    }
    );
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