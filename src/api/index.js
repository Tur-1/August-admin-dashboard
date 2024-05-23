
import config from "@/config/app";
import useRouterService from "@/router/useRouterService";
import axios from "axios";
import useAuthStore from "@/Auth/store/AuthStore";
import { FormStore } from "@/components/BaseForm";
import { isNotAuthenticated, isNotAuthorized, isUnprocessableContent } from "@/helpers";


const api = (url = config.APP_API_URL) =>
{
    let Axios = axios.create({
        baseURL: url,
        withCredentials: true,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });

    const authUser = useAuthStore();

    Axios.interceptors.response.use((response) => response,
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

                authUser.permissions = error.response.data.data;
                useRouterService.redirectToRoute('Forbidden');
            }

            // But, be SURE to return the rejected promise, so the caller still has 
            // the option of additional specialized handling at the call-site:
            return Promise.reject(error);

        });
    return Axios;
}

export default api