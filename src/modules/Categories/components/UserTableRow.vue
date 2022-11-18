<script setup>
import { ref } from "vue";
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import usersStore from "@/modules/Users/stores/usersStore";
import ConfirmModal from "@/components/ConfirmModal/index.vue";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import useUsersService from "@/modules/Users/services/useUsersService";
import onProgress from "@/modules/Users/stores/onProgress";

const emits = defineEmits(["onUserDelete"]);

const { deleteUser } = useUsersService();

let userId = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  userId.value.id = id;
  userId.value.index = index;
};
</script>

<template>
  <transition-group name="list">
    <tr v-for="(user, index) in usersStore.filtered" :key="user.id">
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
        <span class="fw-normal">Admin</span>
      </td>
      <td>
        <DropdownMenu>
          <RouterLink
            class="dropdown-item d-flex align-items-center"
            :to="{ name: 'usersEdit', params: { id: user.id } }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            @click="openModal({ id: user.id, index: index })"
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

  <ConfirmModal
    :onProgress="onProgress.destroy"
    @onConfirm="deleteUser(userId)"
    @onClose="useConfirmModal.close()"
  >
    <span>are you sure ?</span>
  </ConfirmModal>
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
