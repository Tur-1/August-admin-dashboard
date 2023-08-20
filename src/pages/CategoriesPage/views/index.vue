<script setup>
import { BaseTable } from "@/components/BaseTable";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import { CategoryRow, SectionFilter } from "@/pages/CategoriesPage/components";
import useCategoryService from "@/pages/CategoriesPage/services/useCategoryService";
import useCategoriesStore from "@/pages/CategoriesPage/stores/CategoriesStore";
import { onMounted } from "vue";

const { destroyCategory, getAllCategories, openConfirmModal } =
  useCategoryService();

const categoriesStore = useCategoriesStore();
onMounted(getAllCategories);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Categories List">
      <ButtonLink title="New Category" routeName="categoriesCreate" />
      <ButtonLink title="New Section" routeName="sectionCreate" class="ms-2" />
    </PageHeader>

    <BaseTable
      :columns="categoriesStore.tableColumns"
      :data="categoriesStore.categories"
      :isLoading="categoriesStore.isLoading"
      :pagination_links="categoriesStore.paginationLinks"
      @onDeleteConfirm="destroyCategory"
      @onPageChange="async (url) => await getAllCategories({ url: url })"
      :searchable="true"
      @onSearch="async (value) => await getAllCategories({ query: value })"
    >
      <template #tableSettings>
        <SectionFilter />
      </template>
      <template #row>
        <CategoryRow @onDelete="openConfirmModal" />
      </template>
    </BaseTable>
  </section>
</template>
