<script setup>
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import { ref } from "vue";
import { ListBox, ListBoxItem } from "@/components/ListBox";
import { filterCategoriesBySection } from "@/modules/Categories/helpers";

let selectedSection = ref("All");

const selectSection = ({ id, name }) => {
  filterCategoriesBySection(id);
  selectedSection.value = name;
};
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
