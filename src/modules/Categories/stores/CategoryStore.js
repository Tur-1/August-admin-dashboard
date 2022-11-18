import { ref } from 'vue';

let CategoryStore = ref({
    list: [],
    filtered: [],
    pagination: [],
});


export default CategoryStore;