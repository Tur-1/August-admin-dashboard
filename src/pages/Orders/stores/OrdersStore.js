import { ref } from 'vue';

let OrdersStore = ref({
    list: [],
    filtered: [],
    pagination: [],
});


export default OrdersStore;