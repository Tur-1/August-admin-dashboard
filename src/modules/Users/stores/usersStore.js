import { ref } from 'vue';

let UsersStore = ref({
    list: [],
    filtered: [],
    pagination: [],
    roles: [],
    rolePermissions: [],
});


export default UsersStore;