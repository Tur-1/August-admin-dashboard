<template>
  <div class="table-settings mb-4">
    <div class="d-flex justify-content-between align-items-center flex-wrap">
      <div class="d-flex">
        <div class="input-group me-2 me-lg-3 fmxw-300">
          <span class="input-group-text">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            class="form-control"
            :placeholder="inputPlaceholder"
            :class="inputClass"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
          />
        </div>

        <slot />
      </div>

      <div class="btn-group">
        <div class="dropdown me-1">
          <button
            class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-1"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa-solid fa-sliders" style="font-size: 20px"></i>
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu dropdown-menu-end pb-0">
            <span class="small ps-3 fw-bold text-dark">Show</span>
            <a
              v-for="entrie in entries.data"
              @click="$emit('setShowingEntries', entrie.number)"
              role="button"
              class="dropdown-item d-flex align-items-center fw-bold"
              :class="{
                active: entrie.active,
              }"
            >
              {{ entrie.number }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- == entries.activeEntrie -->
</template>

<script setup>
const props = defineProps({
  entries: Object,
  modelValue: String,
  inputPlaceholder: String,
  inputClass: String,
});
const emits = defineEmits(["setShowingEntries", "update:modelValue"]);
</script>
