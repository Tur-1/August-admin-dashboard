import { ref } from 'vue';

let usersStore = ref({
    list: [],
    filtered: [],
    pagination: [],
    roles: [],
    rolePermissions: [],
});


export default usersStore;