import { reactive, ref, watch } from "vue";


import { defineStore } from 'pinia'



const useUserStore = defineStore('userStore', () =>
{
    let isAuthenticated = ref(false);

    let user = ref();
    let permissions = ref();
    let access_token = ref();
    let token_type = 'Bearer ';



    const setUserData = (userData) => 
    {
        user.value = userData.user
        permissions.value = userData.permissions
        access_token.value = userData.access_token
        isAuthenticated.value = true;

    }
    const userCanAccess = (permission) => 
    {
        if (permissions.value)
        {
            return permissions.value.find(ele => ele == permission);
        }
    }

    const removeUserData = () =>
    {
        user.value = [];
        permissions.value = [];
        access_token.value = '';
        isAuthenticated.value = false;
    }
    return {
        user,
        setUserData,
        permissions,
        access_token,
        token_type,
        userCanAccess,
        removeUserData,
        isAuthenticated
    }
}, {
    persist: true,
})

export default useUserStore;