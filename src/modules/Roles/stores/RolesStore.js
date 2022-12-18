import { ref } from 'vue';

let RolesStore = ref({
    list: [],
    filtered: [],
    pagination: [],
    permissions: [],
});


export default RolesStore;