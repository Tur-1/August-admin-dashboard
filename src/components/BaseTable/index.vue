<script setup>
import
{
  TableSkeleton,
  TableHead,
  TableRow,
  NoRecordsFound,
  TableSettings,
} from "@/components/BaseTable";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
import Pagination from "@/components/Pagination/index.vue";
import { skeletonLoading } from "@/helpers";

const emtis = defineEmits([
  "onDelete",
  "onPageChange",
  "onDeleteConfirm",
  "onSearch",
]);

const props = defineProps({
  isLoading: Boolean,
  noRecordsFoundTitle: String,
  confirmTitle: String,
  pagination_links: Array,
  modelValue: String,
  searchable: Boolean,
  columns: {
    type: Array,
    require: true,
  },
  data: {
    type: Array,
  },
});
</script>
<template>
  <TableSettings v-if="$slots.tableSettings" :searchable="searchable" @onSearch="(search) => $emit('onSearch', search)">
    <slot name="tableSettings" />
  </TableSettings>

  <div class="card shadow mt-3">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-hover">
          <TableHead :columns="columns" />
          <tbody>
            <template v-if="!$slots.row">
              <TableRow :show="!skeletonLoading.isLoading" :columns="columns" :data="data"
                @onDelete="(object) => $emit('onDelete', object)" />

              <TableSkeleton :columns="columns" />
            </template>
            <NoRecordsFound :show="!skeletonLoading.isLoading && data?.length == 0" :columns="columns"
              :noRecordsFoundTitle="noRecordsFoundTitle" />
            <slot name="row" />
          </tbody>
        </table>
      </div>
    </div>
    <Pagination :links="pagination_links" @onPageChange="(url) => $emit('onPageChange', url)" />
  </div>

  <ConfirmModal @onConfirm="$emit('onDeleteConfirm')" @onClose="useConfirmModal.close()">
    <template #body v-if="confirmTitle">
      <span>{{ confirmTitle }}</span>
    </template>
  </ConfirmModal>
</template>
<style scoped>
table.table {
  margin-bottom: 95px !important;
}
</style>
