<script setup>
import { ref, onMounted } from "vue";
import { ListBox, ListBoxItem } from "@/components/ListBox";
import useCategoryService from "@/pages/CategoriesPage/services/useCategoryService";
import useCategoriesStore from "@/pages/CategoriesPage/stores/CategoriesStore";
import useSectionService from "@/pages/CategoriesPage/services/useSectionService";

let activeSection = ref("All");
const { getAllCategories } = useCategoryService();
const { getSections } = useSectionService();

const categoriesStore = useCategoriesStore();
const selectSection = async ({ id, name }) => {
  activeSection.value = name;

  await getAllCategories({ section_id: id });
};

onMounted(getSections);
</script>

<template>
  <ListBox :activeItem="activeSection">
    <ListBoxItem
      label="All"
      @click="selectSection({ id: null, name: 'All' })"
      :active="activeSection == 'All'"
    />
    <ListBoxItem
      v-for="section in categoriesStore.sections"
      :label="section.name"
      @click="selectSection({ id: section.id, name: section.name })"
      :active="activeSection == section.name"
    />
  </ListBox>
</template>
