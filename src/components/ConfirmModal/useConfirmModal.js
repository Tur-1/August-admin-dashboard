import { reactive } from "vue";


const useConfirmModal = reactive({
    isOpen: false,


    open()
    {

        this.isOpen = true;

    }, close()
    {

        this.isOpen = false;

    },
})


export default useConfirmModal