<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import CategoryStore from "@/pages/CategoriesPage/stores/CategoryStore";
import useUserStore from "@/Auth/store/userStore";
import useCategoryService from "@/pages/CategoriesPage/services/useCategoryService";

const { getAllCategories } = useCategoryService();
const emits = defineEmits(["onDelete"]);

const defultImage = "./src/assets/img/defult-image.png";

const AuthUser = useUserStore();

await getAllCategories();
</script>

<template>
  <transition-group name="list">
    <tr v-for="(category, index) in CategoryStore.list" :key="category.id">
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
            :src="category.image_url ?? defultImage"
            class="rounded me-3"
            style="width: 70px; height: 100%"
            alt="Avatar"
          />
        </a>
      </td>
      <td>
        <span class="fw-normal">{{ category.name }}</span>
      </td>
      <td>
        <span class="fw-normal">
          {{ category.section_name ?? "..." }}
        </span>
      </td>
      <td>
        <DropdownMenu>
          <RouterLink
            v-if="AuthUser.userCanAccess('view-categories')"
            class="dropdown-item d-flex align-items-center"
            :to="{
              name: category.is_section ? 'sectionEdit' : 'categoriesEdit',
              params: { id: category.id },
            }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            v-if="AuthUser.userCanAccess('delete-categories')"
            @click="$emit('onDelete', { id: category.id, index: index })"
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
