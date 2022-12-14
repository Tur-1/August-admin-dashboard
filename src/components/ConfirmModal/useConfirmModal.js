import { reactive } from "vue";


const useConfirmModal = reactive({
    isOpen: false,
    isOnProgress: false,
    onProgress(BooleanValue)
    {
        this.isOnProgress = BooleanValue;
    },

    open()
    {

        this.isOpen = true;

    }, close()
    {

        this.isOpen = false;

    },
})


export default useConfirmModal