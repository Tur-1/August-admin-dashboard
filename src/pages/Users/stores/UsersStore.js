import { reactive } from 'vue';

let UsersStore = reactive({
    list: [],
    filtered: [],
    pagination: [],
    roles: [],
    rolePermissions: [],
});


export default UsersStore;