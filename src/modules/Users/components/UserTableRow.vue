<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import UsersStore from "@/modules/Users/stores/UsersStore";
import useUsersService from "@/modules/Users/services/useUsersService";
import AuthUser from "@/Auth/store/AuthUser";
import maleAvatar from "@/assets/img/avatars/avatar_male.png";
import femaleAvatar from "@/assets/img/avatars/avatar_female.png";
const emits = defineEmits(["onDelete"]);

const { getAllUsers } = useUsersService();

await getAllUsers();
</script>

<template>
  <transition-group name="list">
    <tr v-for="(user, index) in UsersStore.filtered" :key="user">
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
        <a href="#" class="d-flex align-items-center">
          <img
            :src="user.gender == 'Male' ? maleAvatar : femaleAvatar"
            class="avatar rounded-circle me-3"
            alt="Avatar"
          />

          <span class="fw-bold">{{ user.name }}</span>
        </a>
      </td>
      <td>
        <span class="fw-normal">{{ user.email }}</span>
      </td>

      <td>
        <span class="fw-normal">{{ user.gender }}</span>
      </td>
      <td>
        <span class="fw-normal">{{ user.role_name }}</span>
      </td>
      <td>
        <DropdownMenu>
          <RouterLink
            v-if="AuthUser.userCanAccess('view-users')"
            class="dropdown-item d-flex align-items-center"
            :to="{ name: 'usersEdit', params: { id: user.id } }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            v-if="AuthUser.userCanAccess('delete-users')"
            @click="$emit('onDelete', { id: user.id, index: index })"
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
