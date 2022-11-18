<template>
  <div class="table-settings mb-4">
    <div class="row justify-content-between align-items-center">
      <div class="col-9 col-lg-8 d-md-flex">
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
      </div>
      <div class="col-3 col-lg-4 d-flex justify-content-end">
        <div class="btn-group">
          <div class="dropdown me-1">
            <button
              class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-1"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                class="icon icon-sm"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                ></path>
              </svg>
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu dropdown-menu-end pb-0">
              <span class="small ps-3 fw-bold text-dark">Show</span>
              <a
                v-for="entrie in props.entries"
                @click="$emit('setShowingEntries', entrie.number)"
                role="button"
                class="dropdown-item d-flex align-items-center fw-bold"
                :class="{
                  active: entrie.number == props.activeEntrie,
                }"
              >
                {{ entrie.number }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  entries: Object,
  activeEntrie: Number,
  modelValue: String,
  inputPlaceholder: String,
  inputClass: String,
});
const emits = defineEmits(["setShowingEntries", "update:modelValue"]);
</script>
