import { reactive } from "vue";

let backgroundErrorColor = 'bg-alert-danger';
let backgroundSuccessColor = 'bg-alert-success';


let useToastNotification = reactive({

    message: '',
    background: backgroundSuccessColor,
    isOpen: false,
    time: 3500,


    open(message, success = true)
    {
        this.isOpen = true;
        this.message = message;

        this.background = success ? backgroundSuccessColor : backgroundErrorColor;


        setTimeout(() =>
        {
            this.isOpen = false;
        }, this.time);
    },
    close()
    {
        this.isOpen = false;
        this.message = '';
    }
})

export default useToastNotification;