<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import useCategoriesStore from "@/pages/CategoriesPage/stores/CategoriesStore";
import { CategoryRowSkeleton } from "@/pages/CategoriesPage/components";
import defultImage from "@/assets/img/defult-image.png";

const emits = defineEmits(["onDelete"]);

const categoriesStore = useCategoriesStore();
</script>

<template>
  <transition-group name="list" v-if="!categoriesStore.isLoading">
    <tr
      v-for="(category, index) in categoriesStore.categories"
      :key="category.id"
    >
      <td>
        <span class="fw-normal">{{ category.id }}</span>
      </td>
      <td class="d-flex align-items-center">
        <a href="#" class="d-flex align-items-center">
          <img
            :src="category.image_url ?? defultImage"
            class="rounded me-3"
            style="width: 70px; height: 100%"
            alt="Avatar"
          />
        </a>
        <span class="fw-normal ms-2">{{ category.name }}</span>
      </td>

      <td>
        <span class="fw-normal">
          {{ category.section_name ?? "..." }}
        </span>
      </td>
      <td>
        <DropdownMenu>
          <RouterLink
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
  <CategoryRowSkeleton v-if="categoriesStore.isLoading" />
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
