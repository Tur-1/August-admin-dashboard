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
          <th class="border-bottom" v-for="name in headNames">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
    <div
      class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between"
    >
      <Bootstrap5Pagination
        v-if="paginationData"
        :data="paginationData"
        @pagination-change-page="$emit('paginationChangePage')"
      />
      <div class="fw-normal small mt-4 mt-lg-0">
        Showing <b>{{ showingEntries }}</b> out of
        <b>{{ totalShowingEntries }}</b> entries
      </div>
    </div>
  </div>
</template>

<script setup>
import { Bootstrap5Pagination } from "laravel-vue-pagination";

defineProps([
  "paginationData",
  "showingEntries",
  "totalShowingEntries",
  "headNames",
]);

defineEmits(["paginationChangePage"]);
</script>
