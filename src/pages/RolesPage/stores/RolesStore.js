import { reactive, ref } from "vue";
import { defineStore } from 'pinia'

const useRolesStore = defineStore('RolesStore', () =>
{
    let isLoading = ref(false);

    let role_id = reactive({
        id: null,
        index: null
    });
    let roles = reactive([]);
    let paginationLinks = reactive([]);
    let permissions = reactive([]);


    let tableColumns = [
        { label: "#", field: "id" },
        { label: "Name", field: "name" },
        { label: "Actions", Actions: { routeName: "rolesEdit" } },
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
        roles,
        role_id,
        paginationLinks,
        tableColumns,
        permissions
    }
})

export default useRolesStore;