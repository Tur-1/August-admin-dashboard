<script setup>
import { ref } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import SizeRow from "@/modules/Sizes/components/SizeRow.vue";
import SizeRowSkeleton from "@/modules/Sizes/components/SizeRowSkeleton.vue";
import useSizesService from "@/modules/Sizes/services/useSizesService";
import SizesStore from "@/modules/Sizes/stores/SizesStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable } from "@/components/MainTable";
import useUserStore from "@/Auth/store/userStore";
const { deleteSize, getAllSizes } = useSizesService();

let fields = ["Name", "Action"];

let Size = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  Size.value.id = id;
  Size.value.index = index;
};
const AuthUser = useUserStore();
</script>
<template>
  <section class="main-section">
    <PageHeader title="Sizes List">
      <ButtonLink
        title="New Size"
        routeName="sizesCreate"
        v-if="AuthUser.userCanAccess('create-size-options')"
      />
    </PageHeader>

    <MainTable
      v-if="AuthUser.userCanAccess('access-size-options')"
      :fields="fields"
      @onChangePage="getAllSizes"
      @onDelete="deleteSize(Size)"
      :pagination-links="SizesStore.pagination.links"
      :results="SizesStore.pagination.per_page"
      :total-results="SizesStore.pagination.total"
      no-records-found-title="No Sizes Found"
      :showNoRecordsFound="SizesStore.filtered.length == 0"
    >
      <Suspense>
        <SizeRow @onDelete="openModal" />

        <template #fallback>
          <SizeRowSkeleton />
        </template>
      </Suspense>
    </MainTable>
  </section>
</template>
