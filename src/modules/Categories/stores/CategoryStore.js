import { ref } from 'vue';

let CategoryStore = ref({
    list: [],
    filtered: [],
    pagination: [],
    sections: [],
    sectionCategories: [],
});


export default CategoryStore;