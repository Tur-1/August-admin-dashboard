<script setup>
import { ref } from "vue";
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
</script>

<template>
  <transition-group name="list">
    <tr v-for="(category, index) in CategoryStore.filtered" :key="category.id">
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
        </a>
      </td>
      <td>
        <span class="fw-normal">{{ category.name }}</span>
      </td>

      <td>
        <DropdownMenu>
          <RouterLink
            class="dropdown-item d-flex align-items-center"
            :to="{ name: 'categoriesEdit', params: { id: category.id } }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
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
