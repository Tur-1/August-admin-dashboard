import { ref } from 'vue';

let CategoryStore = ref({
    list: [],
    filtered: [],
    pagination: [],
    sections: [],
});


export default CategoryStore;