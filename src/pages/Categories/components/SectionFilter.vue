<script setup>
import CategoryStore from "@/pages/Categories/stores/CategoryStore";
import { ref } from "vue";
import { ListBox, ListBoxItem } from "@/components/ListBox";
import useCategoryService from "@/pages/Categories/services/useCategoryService";
import { isNotNull } from "@/helpers";

let activeSection = ref("All");
const { getAllCategories } = useCategoryService();

const selectSection = async ({ id, name }) => {
  activeSection.value = name;

  await getAllCategories({ section_id: id });
};
</script>

<template>
  <ListBox :activeItem="activeSection">
    <ListBoxItem
      label="All"
      @click="selectSection({ id: null, name: 'All' })"
      :active="activeSection == 'All'"
    />
    <ListBoxItem
      v-for="section in CategoryStore.sections"
      :label="section.name"
      @click="selectSection({ id: section.id, name: section.name })"
      :active="activeSection == section.name"
    />
  </ListBox>
</template>
