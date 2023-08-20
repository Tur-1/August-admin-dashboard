<script setup>
import useCategoryService from "@/pages/CategoriesPage/services/useCategoryService";
import { ref, watch } from "vue";

let search = ref("");

const { getAllCategories } = useCategoryService();

watch(search, async (value) => {
  await getAllCategories({ query: value });
});
</script>

<template>
  <div class="input-group me-2 me-lg-3 fmxw-300">
    <span class="input-group-text">
      <i class="fa-solid fa-magnifying-glass"></i>
    </span>
    <input
      type="text"
      class="form-control"
      placeholder="search categories"
      v-model="search"
    />
  </div>
</template>
