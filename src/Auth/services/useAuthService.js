import useAuthApi from "@/Auth/api/useAuthApi";
import loginForm from "@/Auth/store/loginForm";
import useRouterService from "@/router/useRouterService";

import useToastNotification from "@/components/Toast/useToastNotification";
import AuthUser from "@/Auth/store/authUser";
import { useLoadingSpinner } from "@/components/LoadingSpinner";

export default function useAuthService()
{
    const login = async () =>
    {
        useLoadingSpinner.show();
        loginForm.clearErrors();
        try
        {
            let response = await useAuthApi.login(loginForm.fields);


            useRouterService.redirectToRoute('dashboard');

        } catch (error)
        {

            if (error.response.status == 422)
            {
                loginForm.setErrors(error.response);
            }
        }

        useLoadingSpinner.hide();
    };

    const logout = async () =>
    {
        useLoadingSpinner.show();


        await useAuthApi.logout();;

        AuthUser.permissions = [];
        AuthUser.user = [];

        useRouterService.redirectToRoute('login');


        useLoadingSpinner.hide();
    };
    return {
        login,
        logout
    }
}

