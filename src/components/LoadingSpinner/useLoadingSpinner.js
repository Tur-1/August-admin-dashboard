import { reactive } from "vue";



const useLoadingSpinner = reactive({
    isOnProgress: false,
    show()
    {
        this.isOnProgress = true;
    },
    hide()
    {

        this.isOnProgress = false;
    }
});

export default useLoadingSpinner;