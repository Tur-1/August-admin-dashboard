<script setup>
import { NoRecordsFound } from "@/components/MainTable";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
const props = defineProps({
  paginationLinks: Array,
  results: Number,
  totalResults: Number,
  showNoRecordsFound: Boolean,
  noRecordsFoundTitle: String,
  confirmTitle: String,
  fields: {
    type: Array,
    require: true,
  },
});

defineEmits(["onChangePage", "onDelete"]);
</script>
<template>
  <div class="card card-body shadow border-0 table-wrapper table-responsive">
    <table class="table user-table table-hover align-items-center">
      <thead>
        <tr>
          <th class="border-bottom">
            <div class="form-check dashboard-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="userCheck55"
                value=""
              />
              <label class="form-check-label" for="userCheck55"> </label>
            </div>
          </th>
          <th class="border-bottom" v-for="field in fields">{{ field }}</th>
        </tr>
      </thead>
      <tbody>
        <slot />
        <NoRecordsFound
          :show="showNoRecordsFound"
          :recordsTitle="noRecordsFoundTitle"
          :colspan="fields.length + 1"
        />
      </tbody>
    </table>
    <div
      class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between"
    >
      <nav aria-label="Page navigation example" v-if="paginationLinks">
        <ul class="pagination mb-0">
          <li
            class="page-item"
            v-for="link in paginationLinks"
            :class="{ active: link.active }"
          >
            <a
              role="button"
              @click="$emit('onChangePage', { url: link.url })"
              class="page-link"
              href="#"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
      <div
        v-if="results && totalResults"
        class="fw-normal small mt-4 mt-lg-0"
        style="display: inline-block; margin-left: auto"
      >
        Showing
        <b>{{ results }}</b>
        out of
        <b>{{ totalResults }}</b>
        entries
      </div>
    </div>

    <ConfirmModal
      @onConfirm="$emit('onDelete')"
      @onClose="useConfirmModal.close()"
    >
      <span>{{ confirmTitle ?? "are you sure ?" }}</span>
    </ConfirmModal>
  </div>
</template>
