<script setup>
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import useCategoryService from "@/modules/Categories/services/useCategoryService";
import { ref } from "vue";

import { SelectBox, SelectItem } from "@/components/SelectBox";

const { filterBySection } = useCategoryService();

let selectedSection = ref("All");

const selectSection = ({ id, name }) => {
  filterBySection(id);
  selectedSection.value = name;
};
</script>

<template>
  <SelectBox :activeItem="selectedSection">
    <SelectItem
      label="All"
      @click="selectSection({ id: null, name: 'All' })"
      :active="selectedSection == 'All'"
      :closeOnClick="true"
    />
    <SelectItem
      v-for="section in CategoryStore.sections"
      :label="section.name"
      @click="selectSection({ id: section.id, name: section.name })"
      :active="selectedSection == section.name"
      :closeOnClick="true"
    />
  </SelectBox>
</template>
