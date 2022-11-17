import { reactive, ref } from 'vue';

let perPage = reactive({
    number: 10,
    set(number)
    {
        this.number = number
    }
});


export default perPage;