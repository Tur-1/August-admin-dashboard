import { reactive } from "vue";
import router from '@/router'



const useRouterService = reactive({


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