import { reactive, ref } from 'vue';

let ReviewsStore = reactive({
    list: [],
    filtered: [],
    pagination: [],
    review: [],
});


export default ReviewsStore;