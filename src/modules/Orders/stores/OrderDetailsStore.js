import { reactive } from 'vue';

let OrderDetailsStore = reactive({
    order: [],
    products: [],
    coupon: [],
    address: [],
});


export default OrderDetailsStore;