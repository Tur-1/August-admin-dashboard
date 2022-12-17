import { ref } from 'vue';

let CouponsStore = ref({
    list: [],
    filtered: [],
    pagination: [],
});


export default CouponsStore;