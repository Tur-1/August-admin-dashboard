<script setup>
import {
  TableSkeleton,
  TableHead,
  TableRow,
  NoRecordsFound,
} from "@/components/BaseTable";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
import Pagination from "@/components/Pagination/index.vue";

const emtis = defineEmits(["onDelete", "onPageChange", "onDeleteConfirm"]);

const props = defineProps({
  isLoading: Boolean,
  noRecordsFoundTitle: String,
  confirmTitle: String,
  pagination_links: Array,
  columns: {
    type: Array,
    require: true,
  },
  data: {
    type: Array,
    require: true,
  },
});
</script>
<template>
  <div class="card shadow">
    <div class="card-body">
      <table class="table table-hover">
        <TableHead :columns="columns" />
        <tbody>
          <template v-if="!$slots.row">
            <TableRow
              v-if="!props.isLoading"
              :columns="columns"
              :data="data"
              @onDelete="(object) => $emit('onDelete', object)"
            />

            <TableSkeleton v-if="props.isLoading" :columns="columns" />
            <NoRecordsFound
              :show="!props.isLoading && data.length == 0"
              :columns="columns"
              :noRecordsFoundTitle="noRecordsFoundTitle"
            />
          </template>
          <slot name="row" />
        </tbody>
      </table>
    </div>
    <Pagination
      :links="pagination_links"
      @onPageChange="(url) => $emit('onPageChange', url)"
    />
  </div>

  <ConfirmModal
    @onConfirm="$emit('onDeleteConfirm')"
    @onClose="useConfirmModal.close()"
  >
    <template #body v-if="confirmTitle">
      <span>{{ confirmTitle }}</span>
    </template>
  </ConfirmModal>
</template>
