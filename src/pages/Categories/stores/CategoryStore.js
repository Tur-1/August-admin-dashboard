import { reactive } from 'vue';

let CategoryStore = reactive({
    list: [],
    pagination: [],
    sections: [],
    sectionCategories: [],
});


export default CategoryStore;