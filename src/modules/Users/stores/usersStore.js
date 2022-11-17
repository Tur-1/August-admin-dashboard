import { ref } from 'vue';

let usersStore = ref({
    list: [],
    filtered: [],
    pagination: [],
});


export default usersStore;