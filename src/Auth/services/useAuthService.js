import useAuthApi from "@/Auth/api/useAuthApi";
import loginForm from "@/Auth/store/loginForm";
import useRouterService from "@/router/useRouterService";

import useToastNotification from "@/components/Toast/useToastNotification";


import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useUserStore from "@/Auth/store/userStore";


export default function useAuthService()
{
    const userStore = useUserStore();
    const login = async () =>
    {
        if (!userStore.isAuthenticated)
        {
            useLoadingSpinner.show();
            loginForm.clearErrors();


            try
            {
                let response = await useAuthApi.login(loginForm.fields);

                userStore.setUserData(response.data);

                useRouterService.redirectToRoute('dashboard');

            } catch (error)
            {

                if (error.response.status == 422)
                {
                    loginForm.setErrors(error.response);
                }
            }

            useLoadingSpinner.hide();

        } else
        {
            useRouterService.redirectToRoute('dashboard');
        }
    };

    const logout = async () =>
    {

        if (userStore.isAuthenticated)
        {
            useLoadingSpinner.show();

            try
            {
                await useAuthApi.logout();

                userStore.removeUserData();

                useRouterService.redirectToRoute('login');
            } catch (error)
            {
                useRouterService.redirectToRoute('login');

            }

            useLoadingSpinner.hide();
        } else
        {
            useRouterService.redirectToRoute('login');
        }


    };

    const getAuthUser = async () =>
    {


        if (userStore.isAuthenticated)
        {
            useLoadingSpinner.show();

            try
            {
                let response = await useAuthApi.getAuthUser();

                userStore.setUserData(response.data);

            } catch (error)
            {
                console.log(error.response);
            }

            useLoadingSpinner.hide();

        } else
        {
            useRouterService.redirectToRoute('dashboard');
        }
    }

    const userHasPermission = (permission) =>
    {

        return userStore.permissions.includes(permission);
    }
    return {
        login,
        logout,
        getAuthUser,
        userHasPermission,
    }
}

