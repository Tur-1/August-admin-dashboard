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
          <th class="border-bottom" v-for="title in headTitles">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
    <div
      v-if="paginationLinks"
      class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between"
    >
      <nav aria-label="Page navigation example">
        <ul class="pagination mb-0">
          <li
            class="page-item"
            v-for="link in paginationLinks"
            :class="{ active: link.active }"
          >
            <a
              role="button"
              @click="$emit('onChangePage', link.url)"
              class="page-link"
              href="#"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
      <div
        class="fw-normal small mt-4 mt-lg-0"
        style="display: inline-block; margin-left: auto"
      >
        Showing
        <b>{{ showingEntries }}</b>
        out of
        <b>{{ totalShowingEntries }}</b>
        entries
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  paginationLinks: Array,
  showingEntries: Number,
  totalShowingEntries: Number,
  headTitles: {
    type: Array,
    require: true,
  },
});

defineEmits(["onChangePage"]);
</script>
