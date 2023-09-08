import useAuthApi from "@/Auth/api/useAuthApi";
import useRouterService from "@/router/useRouterService";
import useAuthStore from '@/Auth/store/AuthStore'
import useToastNotification from "@/components/Toast/useToastNotification";


import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { FormStore } from "@/components/BaseForm";



export default function useAuthService()
{
    const authStore = useAuthStore();
    const login = async () =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();

        try
        {
            let response = await useAuthApi.login(FormStore.fields);



            authStore.user = response.data.user;
            authStore.permissions = response.data.permissions;

            authStore.isAuthenticated = true;
            useRouterService.redirectToRoute('dashboard');

        } catch (error)
        {

        }

        useLoadingSpinner.hide();


    };

    const logout = async () =>
    {


        useLoadingSpinner.show();

        try
        {
            let response = await useAuthApi.logout();


            authStore.reset();
            useRouterService.redirectToRoute('login');
        } catch (error)
        {

            console.log(error);
        }

        useLoadingSpinner.hide();


    };

    const getAdminPermissions = async () =>
    {

        useLoadingSpinner.show();

        let response = await useAuthApi.getAdminPermissions();

        authStore.permissions = response.data.permissions;

        useLoadingSpinner.hide();
    }
    return {
        login,
        logout,
        getAdminPermissions
    }
}

