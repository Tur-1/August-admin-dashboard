
import { reactive, ref } from "vue";

import { defineStore } from 'pinia'

const useUsersStore = defineStore('UsersStore', () =>
{
    let isLoading = ref(false);

    let user_id = reactive({
        id: null,
        index: null
    });
    let users = reactive([]);
    let permissions = reactive([]);
    let roles = reactive([]);
    let rolePermissions = reactive([]);
    let paginationLinks = reactive([]);
    let tableColumns = [
        { label: "#", field: "id" },
        { label: "Name", field: "name" },
        { label: "Gender", field: "gender" },
        { label: "Email", field: "email" },
        { label: "Role", field: "role_name" },
        { label: "Actions", Actions: { routeName: "usersEdit" } },
    ];
    const showLoading = () => 
    {
        isLoading.value = true;

    }
    const hideLoading = () => 
    {
        isLoading.value = false;
    }

    return {
        isLoading,
        showLoading,
        hideLoading,
        users,
        permissions,
        roles,
        rolePermissions,
        paginationLinks,
        tableColumns,
        user_id
    }
})

export default useUsersStore;