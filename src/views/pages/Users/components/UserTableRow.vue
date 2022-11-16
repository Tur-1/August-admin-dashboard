<template>
  <transition-group name="list">
    <tr v-for="(user, index) in users.filtered" :key="user.id">
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
        <a href="#" class="d-flex align-items-center"
          ><img
            src="@/assets/img/team/profile-picture-1.jpg"
            class="avatar rounded-circle me-3"
            alt="Avatar"
          />
          <div class="d-block">
            <span class="fw-bold">{{ user.name }}</span>
            <div class="small text-gray">{{ user.email }}</div>
          </div>
        </a>
      </td>
      <td>
        <span class="fw-normal">{{ user.created_at }}</span>
      </td>
      <td>
        <span class="fw-normal">{{ user.gender }}</span>
      </td>
      <td>
        <DropdownMenu>
          <RouterLink
            class="dropdown-item d-flex align-items-center"
            :to="{ name: 'update user', params: { id: user.id } }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            @click="$emit('onUserDelete', { id: user.id, index: index })"
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
  <tr v-show="users.filtered.length == 0">
    <td colspan="5" class="text-center">
      <h5>No users Found</h5>
    </td>
  </tr>
</template>

<script setup>
import DropdownMenu from "@/views/components/DropdownMenu/index.vue";
import users from "@/views/pages/Users/stores/users";

const emits = defineEmits(["onUserDelete"]);
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
