<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useCategoryService from "@/modules/Categories/services/useCategoryService";
import { onMounted, ref, watch } from "vue";
import CategoryRow from "@/modules/Categories/components/CategoryRow.vue";
import SectionFilter from "@/modules/Categories/components/SectionFilter.vue";
import CategoryRowSkeleton from "@/modules/Categories/components/CategoryRowSkeleton.vue";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import CategoriesOnProgress from "@/modules/Categories/stores/CategoriesOnProgress";
import CategoriesTableEntries from "@/modules/Categories/stores/CategoriesTableEntries";
import MainTableSettings from "@/components/MainTable/MainTableSettings.vue";
import MainTable from "@/components/MainTable/index.vue";

import {
  SearchCategories,
  SetShowingEntries,
} from "@/modules/Categories/helpers";

const { getAllCategories } = useCategoryService();

onMounted(getAllCategories);

let search = ref("");

watch(search, (value) => {
  SearchCategories(value);
});
</script>
<template>
  <section class="main-section">
    <PageHeader title="Categories List">
      <ButtonLink title="New Category" routeName="categoriesCreate" />
      <ButtonLink title="New Section" routeName="sectionCreate" class="ms-2" />
    </PageHeader>

    <MainTableSettings
      @setShowingEntries="SetShowingEntries"
      inputPlaceholder="search categories"
      v-model="search"
      :entries="CategoriesTableEntries"
    >
      <SectionFilter />
    </MainTableSettings>

    <MainTable
      :fields="['image', 'name', 'section', 'Action']"
      @onChangePage="getAllCategories"
      :paginationLinks="CategoryStore.pagination.links"
      :entries="CategoriesTableEntries.activeEntrie"
      :totalEntries="CategoryStore.pagination.total"
      :showNoRecordsFound="
        CategoryStore.filtered.length == 0 && !CategoriesOnProgress.index
      "
      noRecordsFoundTitle="No Categories Found"
    >
      <CategoryRow v-if="!CategoriesOnProgress.index" />

      <CategoryRowSkeleton v-if="CategoriesOnProgress.index" />
    </MainTable>
  </section>
</template>
