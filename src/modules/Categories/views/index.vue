<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useCategoryService from "@/modules/Categories/services/useCategoryService";
import { onMounted } from "vue";
import CategoryRow from "@/modules/Categories/components/CategoryRow.vue";
import CategoryRowSkeleton from "@/modules/Categories/components/CategoryRowSkeleton.vue";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import onProgress from "@/modules/Users/stores/onProgress";
import entries from "@/components/MainTable/entries";
import MainTableSettings from "@/components/MainTable/MainTableSettings.vue";

const { getAllCategories, setShowingEntries } = useCategoryService();

onMounted(getAllCategories);

// let search = ref("");
// watch(search, (value) => {
//   CategoryStore.value.filtered = CategoryStore.value.list.data.filter(
//     (category) => {
//       return category.name.toLowerCase().includes(value.toLowerCase());
//     }
//   );
// });
</script>
<template>
  <section class="main-section">
    <PageHeader title="Categories List">
      <ButtonLink title="New Category" routeName="categoriesCreate">
        <i class="fa-solid fa-plus" />
      </ButtonLink>
    </PageHeader>

    <!-- <MainTableSettings
      :entries="entries.data"
      :activeEntrie="entries.activeEntrie"
      @setShowingEntries="setShowingEntries"
      inputPlaceholder="search categories"
      v-model="search"
    /> -->

    <!-- <MainTable
      :headTitles="['image', 'name', 'section', 'Action']"
      @onChangePage="getAllUsers"
      :paginationLinks="CategoryStore.pagination.links"
      :entries="entries.activeEntrie"
      :totalEntries="CategoryStore.pagination.total"
      :onNoRecordsFound="CategoryStore.filtered.length == 0"
      recordsTitle="No Users Found"
    >
      <CategoryRow v-if="!onProgress.index" />

      <CategoryRowSkeleton v-if="onProgress.index" />
    </MainTable> -->
  </section>
</template>
