<script setup>
import { onMounted } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useSizesService from "@/pages/SizesPage/services/useSizesService";
import { BaseTable } from "@/components/BaseTable";
import useSizeStore from "@/pages/SizesPage/stores/SizeStore";
const { deleteSize, getAllSizes, openConfirmModal } = useSizesService();
const sizeStore = useSizeStore();
onMounted(getAllSizes);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Sizes List">
      <ButtonLink title="New Size" routeName="sizesCreate" />
    </PageHeader>
    <BaseTable
      :columns="sizeStore.tableColumns"
      :data="sizeStore.sizes"
      :isLoading="sizeStore.isLoading"
      :pagination_links="sizeStore.paginationLinks"
      @onDelete="(size) => openConfirmModal(size)"
      @onDeleteConfirm="deleteSize"
      @onPageChange="async (url) => await getAllSizes({ url: url })"
    />
  </section>
</template>
