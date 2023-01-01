import { reactive, ref } from 'vue';

let CategoryStore = reactive({
    list: [],
    filtered: [],
    pagination: [],
    sections: [],
    sectionCategories: [],
});


export default CategoryStore;