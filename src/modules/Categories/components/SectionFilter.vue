<script setup>
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import { ref, onMounted } from "vue";
import { ListBox, ListBoxItem } from "@/components/ListBox";
import { FilterCategoriesBySection } from "@/modules/Categories/helpers";
import useCategoryService from "@/modules/Categories/services/useCategoryService";

const { getAllSections } = useCategoryService();

let selectedSection = ref("All");

const selectSection = ({ id, name }) => {
  FilterCategoriesBySection(id);
  selectedSection.value = name;
};

onMounted(getAllSections);
</script>

<template>
  <ListBox :activeItem="selectedSection">
    <ListBoxItem
      label="All"
      @click="selectSection({ id: null, name: 'All' })"
      :active="selectedSection == 'All'"
    />
    <ListBoxItem
      v-for="section in CategoryStore.sections"
      :label="section.name"
      @click="selectSection({ id: section.id, name: section.name })"
      :active="selectedSection == section.name"
    />
  </ListBox>
</template>
