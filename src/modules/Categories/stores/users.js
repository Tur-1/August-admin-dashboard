import { ref } from 'vue';

let users = ref({
    list: [],
    filtered: [],
    pagination: [],
});


export default users;