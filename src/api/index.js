
import config from "@/config/app";
import useRouterService from "@/router/useRouterService";
import axios from "axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

export default (url = config.APP_API_URL) =>
{


    let create = axios.create({
        baseURL: url,
    });

    create.interceptors.response.use(function (response)
    {

        // Optional: Do something with response data
        return response;
    }, function (error)
    {
        // Do whatever you want with the response error here:

        if (error.response.status == 403)
        {
            useRouterService.redirectToRoute('Forbidden');

        }
        // But, be SURE to return the rejected promise, so the caller still has 
        // the option of additional specialized handling at the call-site:
        return Promise.reject(error);
    });
    return create;

}