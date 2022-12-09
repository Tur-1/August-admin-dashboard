<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import ConfirmModal from "@/components/ConfirmModal/index.vue";

import CategoriesOnProgress from "@/modules/Categories/stores/CategoriesOnProgress";
import useCategoryService from "@/modules/Categories/services/useCategoryService";
import { ref } from "vue";

const emits = defineEmits(["onCategoryDelete"]);

const { destroyCategory } = useCategoryService();

let category = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();

  category.value.id = id;
  category.value.index = index;
};
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
        <a href="#" class="d-flex align-items-center">
          <img
            v-if="!category.image_url"
            src="@/assets/img/defult-image.png"
            class="rounded me-3"
            style="max-width: 70px"
            alt="Avatar"
          />
          <img
            v-if="category.image_url"
            :src="category.image_url"
            class="rounded me-3"
            style="max-width: 70px"
            alt="Avatar"
          />
        </a>
      </td>
      <td>
        <span class="fw-normal">{{ category.name }}</span>
      </td>
      <td>
        <span class="fw-normal">
          {{ category.section?.name ?? "..." }}
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
            @click="openModal({ id: category.id, index: index })"
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
    :onProgress="CategoriesOnProgress.destroy"
    @onConfirm="destroyCategory(category)"
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
