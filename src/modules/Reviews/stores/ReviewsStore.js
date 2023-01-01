import { reactive, ref } from 'vue';

let ReviewsStore = reactive({
    list: [],
    filtered: [],
    pagination: [],
});


export default ReviewsStore;