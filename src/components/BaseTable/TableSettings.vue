<template>
  <div class="row mb-4 w-100">
    <div class="d-flex flex-wrap">
      <div class="input-group me-2 me-lg-3 fmxw-300" v-if="searchable">
        <span class="input-group-text">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="search"
          v-model="search"
        />
      </div>

      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  searchable: Boolean,
});
const emtis = defineEmits(["onSearch"]);
let search = ref("");

watch(search, async (value) => {
  emtis("onSearch", value);
});
</script>
