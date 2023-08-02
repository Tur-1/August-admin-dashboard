<template>
  <div
    class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between"
  >
    <nav aria-label="Page navigation example">
      <ul class="pagination mb-0">
        <li
          class="page-item"
          v-for="(link, index) in props.links"
          :class="{ active: link.active }"
        >
          <button
            :disabled="link.url == null || link.active == true"
            @click="$emit('changePage', link.url)"
            class="page-link"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>
    </nav>
    <div
      class="fw-normal small mt-4 mt-lg-0"
      style="display: inline-block; margin-left: auto"
    >
      Showing
      <b>{{ props.showingResult }}</b>
      out of
      <b>{{ props.total }}</b>
      entries
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  links: Array,
  showingResult: Number,
  total: Number,
});
const emits = defineEmits(["changePage"]);
</script>
