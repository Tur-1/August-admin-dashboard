<script setup>
import { NoRecordsFound, TableHead } from "@/components/MainTable";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";

const props = defineProps({
  showNoRecordsFound: Boolean,
  noRecordsFoundTitle: String,
  confirmTitle: String,
  fields: {
    type: Array,
    require: true,
  },
});

defineEmits(["onDelete"]);
</script>
<template>
  <div class="card card-body shadow border-0 table-wrapper table-responsive">
    <table class="table user-table table-hover align-items-center">
      <TableHead :fields="fields" />
      <tbody>
        <slot />

        <NoRecordsFound
          :show="false"
          :recordsTitle="noRecordsFoundTitle"
          :colspan="fields.length + 1"
        />
      </tbody>
    </table>
    <slot name="footer"> </slot>
  </div>

  <ConfirmModal
    @onConfirm="$emit('onDelete')"
    @onClose="useConfirmModal.close()"
  >
    <template #body v-if="confirmTitle">
      <span>{{ confirmTitle }}</span>
    </template>
  </ConfirmModal>
</template>
