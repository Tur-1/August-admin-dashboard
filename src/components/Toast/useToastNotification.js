import { reactive } from "vue";

let backgroundErrorColor = 'bg-alert-danger';
let backgroundSuccessColor = 'bg-alert-success';




let useToastNotification = reactive({

    message: '',
    background: backgroundSuccessColor,
    isOpen: false,
    error: false,
    time: 3200,


    open({ error } = {})
    {

        this.isOpen = true;

        const withMessage = (message) =>
        {
            this.message = message;
        }


        this.setBackground(error);
        setTimeout(() =>
        {
            this.isOpen = false;
        }, this.time);

        return {
            withMessage
        }
    },
    close()
    {
        this.isOpen = false;
        this.message = '';
    },
    setBackground(error) 
    {
        this.error = error ? error : false;
        this.background = error ? backgroundErrorColor : backgroundSuccessColor;
    },

})

export default useToastNotification;