import { reactive, ref } from "vue";
import { defineStore } from 'pinia'



const useAuthStore = defineStore('AuthStore', () =>
{

    let isAuthenticated = ref(false);
    let user = ref([]);
    let permissions = ref([]);
    let access_token = ref(null);


    const userCan = (permission) => 
    {

        return permissions.value.includes(permission);

    }

    const reset = () =>
    {

        user.value = [];
        access_token.value = null;
        permissions.value = [];
        isAuthenticated.value = false;
    }

    return {
        user,
        permissions,
        access_token,
        userCan,
        reset,
        isAuthenticated
    }
}, {
    persist: true,
})

export default useAuthStore;