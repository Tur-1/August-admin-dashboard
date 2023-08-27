import { reactive } from "vue";
import router from '@/router'
import config from "@/config/app";



const useRouterService = reactive({


    redirectBack()
    {
        return router.back();
    },
    redirectToRoute(routeName)
    {
        return router.push({ name: routeName });
    },
    setPageTitle(title)
    {

        if (title)
        {
            document.title = `${ config.APP_NAME }  ${ title != 'August' ? ' - ' + title : '' }`.toString().toUpperCase();
        } else
        {
            document.title = config.APP_NAME;
        }
    },
    redirectUnauthorizedUser(error, routeName = 'dashboard') 
    {
        if (error && error.response.status == 401)
        {
            redirectToRoute(routeName);
        }
    }
});


export default useRouterService;