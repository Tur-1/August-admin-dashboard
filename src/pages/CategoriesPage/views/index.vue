<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";

import useCategoryService from "@/pages/CategoriesPage/services/useCategoryService";
import { ref, onMounted } from "vue";
import CategoryRow from "@/pages/CategoriesPage/components/CategoryRow.vue";
import SearchCategories from "@/pages/CategoriesPage/components/SearchCategories.vue";

import SectionFilter from "@/pages/CategoriesPage/components/SectionFilter.vue";
import CategoryRowSkeleton from "@/pages/CategoriesPage/components/CategoryRowSkeleton.vue";
import CategoryStore from "@/pages/CategoriesPage/stores/CategoryStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable, TableSettings } from "@/components/MainTable";
import { Pagination } from "@/components/Pagination";
import useSectionService from "@/pages/CategoriesPage/services/useSectionService";

const { destroyCategory, getAllCategories } = useCategoryService();
const { getSections } = useSectionService();

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  category.value.id = id;
  category.value.index = index;
};

const fields = ["image", "name", "section", "Action"];
let category = ref({ id: "", index: "" });

onMounted(getSections);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Categories List">
      <ButtonLink title="New Category" routeName="categoriesCreate" />
      <ButtonLink title="New Section" routeName="sectionCreate" class="ms-2" />
    </PageHeader>

    <template>
      <TableSettings>
        <SearchCategories />
        <SectionFilter />
      </TableSettings>

      <MainTable
        :fields="fields"
        @onDelete="destroyCategory(category)"
        no-records-found-title="No Categories Found"
        :show-no-records-found="CategoryStore.list.length == 0"
      >
        <Suspense>
          <CategoryRow @onDelete="openModal" />

          <template #fallback>
            <CategoryRowSkeleton />
          </template>
        </Suspense>

        <template #footer>
          <Pagination
            @changePage="(link) => getAllCategories({ url: link })"
            :links="CategoryStore.pagination.links"
            :showingResult="CategoryStore.pagination.to"
            :total="CategoryStore.pagination.total"
          />
        </template>
      </MainTable>
    </template>
  </section>
</template>
