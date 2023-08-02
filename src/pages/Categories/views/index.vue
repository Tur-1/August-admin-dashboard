<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";

import useCategoryService from "@/pages/Categories/services/useCategoryService";
import { ref, onMounted } from "vue";
import CategoryRow from "@/pages/Categories/components/CategoryRow.vue";
import SearchCategories from "@/pages/Categories/components/SearchCategories.vue";

import SectionFilter from "@/pages/Categories/components/SectionFilter.vue";
import CategoryRowSkeleton from "@/pages/Categories/components/CategoryRowSkeleton.vue";
import CategoryStore from "@/pages/Categories/stores/CategoryStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable, TableSettings } from "@/components/MainTable";
import { Pagination } from "@/components/Pagination";
import useUserStore from "@/Auth/store/userStore";
import useSectionService from "@/pages/Categories/services/useSectionService";

const AuthUser = useUserStore();
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

    <template v-if="AuthUser.userCanAccess('access-categories')">
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
