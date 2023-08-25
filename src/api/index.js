
import useAuthStore from "@/Auth/store/AuthStore";
import config from "@/config/app";
import axios from "axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;



export default (url = config.APP_API_URL) =>
{
    const authStore = useAuthStore();


    return axios.create({
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${ authStore.access_token }`
        },
        baseURL: url,
    })
}