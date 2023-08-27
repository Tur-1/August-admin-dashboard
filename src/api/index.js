
import config from "@/config/app";
import axios from "axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

export default (url = config.APP_API_URL) =>
{
    return axios.create({
        baseURL: url,
    });

}