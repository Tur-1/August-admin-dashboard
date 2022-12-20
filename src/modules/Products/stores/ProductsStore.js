import { ref } from 'vue';

let ProductsStore = ref({
    list: [],
    filtered: [],
    pagination: [],
});


export default ProductsStore;