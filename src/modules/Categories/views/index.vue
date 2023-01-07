<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useCategoryService from "@/modules/Categories/services/useCategoryService";
import { ref, watch, onMounted } from "vue";
import CategoryRow from "@/modules/Categories/components/CategoryRow.vue";
import SectionFilter from "@/modules/Categories/components/SectionFilter.vue";
import CategoryRowSkeleton from "@/modules/Categories/components/CategoryRowSkeleton.vue";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable, TableSettings } from "@/components/MainTable";

import {
  SearchCategories,
  setShowingEntries,
} from "@/modules/Categories/helpers";
import AuthUser from "@/Auth/store/AuthUser";
const { getAllCategories, destroyCategory } = useCategoryService();

onMounted(getAllCategories);

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

const fields = ["image", "name", "section", "Action"];
</script>
<template>
  <section class="main-section">
    <PageHeader title="Categories List">
      <ButtonLink
        title="New Category"
        routeName="categoriesCreate"
        v-if="AuthUser.userCanAccess('create-categories')"
      />
      <ButtonLink
        title="New Section"
        routeName="sectionCreate"
        class="ms-2"
        v-if="AuthUser.userCanAccess('create-categories')"
      />
    </PageHeader>

    <TableSettings
      v-if="AuthUser.userCanAccess('access-categories')"
      @onChangeEntries="setShowingEntries"
      inputPlaceholder="search categories"
      v-model="search"
      :activeEntries="CategoryStore.pagination.per_page"
    >
      <SectionFilter />
    </TableSettings>

    <MainTable
      v-if="AuthUser.userCanAccess('access-categories')"
      :fields="fields"
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
