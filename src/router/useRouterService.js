import { reactive } from "vue";
import router from '@/router'



const useRouterService = reactive({
    isAuthenticated: false,

    redirectBack()
    {
        return router.back();
    },
    redirectToRoute(routeName)
    {
        return router.push({ name: routeName });
    },
});


export default useRouterService;