<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useCategoryService from "@/modules/Categories/services/useCategoryService";
import { ref, watch } from "vue";
import CategoryRow from "@/modules/Categories/components/CategoryRow.vue";
import SectionFilter from "@/modules/Categories/components/SectionFilter.vue";
import CategoryRowSkeleton from "@/modules/Categories/components/CategoryRowSkeleton.vue";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import CategoriesTableEntries from "@/modules/Categories/stores/CategoriesTableEntries";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable, TableSettings } from "@/components/MainTable";

import {
  SearchCategories,
  SetShowingEntries,
} from "@/modules/Categories/helpers";

const { getAllCategories, destroyCategory } = useCategoryService();

let search = ref("");

watch(search, (value) => {
  SearchCategories(value);
});

let category = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  category.value.id = id;
  category.value.index = index;
};
</script>
<template>
  <section class="main-section">
    <PageHeader title="Categories List">
      <ButtonLink title="New Category" routeName="categoriesCreate" />
      <ButtonLink title="New Section" routeName="sectionCreate" class="ms-2" />
    </PageHeader>

    <TableSettings
      @setShowingEntries="SetShowingEntries"
      inputPlaceholder="search categories"
      v-model="search"
      :entries="CategoriesTableEntries"
    >
      <SectionFilter />
    </TableSettings>

    <MainTable
      :fields="['image', 'name', 'section', 'Action']"
      @onChangePage="getAllCategories"
      @onDelete="destroyCategory(category)"
      :pagination-links="CategoryStore.pagination.links"
      :results="CategoryStore.pagination.per_page"
      :total-results="CategoryStore.pagination.total"
      no-records-found-title="No Categories Found"
      :showNoRecordsFound="CategoryStore.filtered.length == 0"
    >
      <Suspense>
        <CategoryRow @onDelete="openModal" />

        <template #fallback>
          <CategoryRowSkeleton />
        </template>
      </Suspense>
    </MainTable>
  </section>
</template>
