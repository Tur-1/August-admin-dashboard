<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import RolesStore from "@/modules/Roles/stores/RolesStore";
import useRolesService from "@/modules/Roles/services/useRolesService";
import useUserStore from "@/Auth/store/userStore";
const emits = defineEmits(["onDelete"]);

const { getRoles } = useRolesService();
const AuthUser = useUserStore();
await getRoles();
</script>

<template>
  <transition-group name="list">
    <tr v-for="(role, index) in RolesStore.filtered" :key="role.id">
      <td>
        <div class="form-check dashboard-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="userCheck1"
          />
          <label class="form-check-label" for="userCheck1"></label>
        </div>
      </td>
      <td>
        <span class="fw-bold">{{ role.name }}</span>
      </td>

      <td>
        <DropdownMenu>
          <RouterLink
            v-if="AuthUser.userCanAccess('view-roles')"
            class="dropdown-item d-flex align-items-center"
            :to="{ name: 'rolesEdit', params: { id: role.id } }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            v-if="AuthUser.userCanAccess('delete-roles')"
            @click="$emit('onDelete', { id: role.id, index: index })"
            role="button"
            class="dropdown-item d-flex align-items-center text-danger"
          >
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </a>
        </DropdownMenu>
      </td>
    </tr>
  </transition-group>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
