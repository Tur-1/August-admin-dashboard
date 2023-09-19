
import config from "@/config/app";
import useRouterService from "@/router/useRouterService";
import axios from "axios";
import useAuthStore from "@/Auth/store/AuthStore";
import { FormStore } from "@/components/BaseForm";
import { isNotAuthenticated, isNotAuthorized, isUnprocessableContent } from "@/helpers";


axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

export default (url = config.APP_API_URL) =>
{

    const authUser = useAuthStore();
    let create = axios.create({
        baseURL: url,
    });
    create.interceptors.response.use((response) => response,
        (error) =>
        {
            if (isUnprocessableContent(error))
            {
                FormStore.setErrors(error);
            }
            if (isNotAuthenticated(error))
            {
                useRouterService.redirectToRoute('login');
            }
            if (isNotAuthorized(error))
            {
                authUser.updatePermissions(error.response);
                useRouterService.redirectToRoute('Forbidden');
            }
            console.log(error);

            // But, be SURE to return the rejected promise, so the caller still has 
            // the option of additional specialized handling at the call-site:
            return Promise.reject(error);

        });

    return create;

}