import { reactive } from 'vue';

let CategoryStore = reactive({
    isLoading: false,
    list: [],
    pagination: [],
    sections: [],
    sectionCategories: [],
});


export default CategoryStore;