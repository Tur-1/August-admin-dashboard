
import { reactive, ref } from "vue";

import { defineStore } from 'pinia'

const useAdminsStore = defineStore('AdminsStore', () =>
{


    let admin_id = reactive({
        id: null,
        index: null
    });
    let admins = reactive([]);
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
        { label: "Actions", Actions: { routeName: "adminsEdit" } },
    ];


    return {
        admins,
        permissions,
        roles,
        rolePermissions,
        paginationLinks,
        tableColumns,
        admin_id
    }
})

export default useAdminsStore;