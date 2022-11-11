import config from "@/config/app";
import axios from "axios";


export default (url = config.APP_API_URL) =>
{
    return axios.create({
        baseURL: url,
    })
}