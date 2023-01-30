import useUserStore from "@/Auth/store/userStore";
import config from "@/config/app";
import axios from "axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
const userStore = useUserStore();
let token = null;
if (userStore.access_token)
{
    token = `Bearer ${ userStore.access_token }`;
} else
{
    token = null;
}
// axios.defaults.headers.common['Authorization'] = token;

export default (url = config.APP_API_URL) =>
{
    return axios.create({
        baseURL: url,
    })
}