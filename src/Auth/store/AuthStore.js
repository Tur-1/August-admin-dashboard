import { reactive, ref } from "vue";
import { defineStore } from 'pinia'



const useAuthStore = defineStore('AuthStore', () =>
{

    let isAuthenticated = ref(false);
    let user = ref([]);
    let permissions = ref([]);

    const updatePermissions = (permissions) => 
    {
        permissions.value = permissions;
    }
    const userCan = (permission) => 
    {
        return permissions.value.includes(permission);
    }

    const reset = () =>
    {

        user.value = [];
        permissions.value = [];
        isAuthenticated.value = false;
    }

    return {
        user,
        permissions,
        userCan,
        reset,
        isAuthenticated,
        updatePermissions
    }
}, {
    persist: true,
})

export default useAuthStore;