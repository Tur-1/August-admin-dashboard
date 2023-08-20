import { reactive } from "vue";


const useConfirmModal = reactive({
    isOpen: false,
    isLoading: false,
    showLoading()
    {
        this.isLoading = true;
    },
    hideLoading()
    {
        this.isLoading = false;
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