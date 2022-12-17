<template>
  <div class="row mb-4 w-100">
    <div class="col-lg-9 col-md-7">
      <div class="d-flex flex-wrap">
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
    </div>
    <div class="col">
      <div class="btn-group d-flex justify-content-end">
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
              v-for="entrie in TableEntries.data"
              @click="$emit('onChangeEntries', entrie.number)"
              role="button"
              class="dropdown-item d-flex align-items-center fw-bold"
              :class="{
                active: activeEntries == entrie.number,
              }"
            >
              {{ entrie.number }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TableEntries from "@/components/MainTable/TableEntries";

const props = defineProps({
  modelValue: String,
  inputPlaceholder: String,
  inputClass: String,
  activeEntries: Number,
});
const emits = defineEmits(["onChangeEntries", "update:modelValue"]);
</script>
