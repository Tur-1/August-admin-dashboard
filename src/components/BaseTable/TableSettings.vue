<template>
  <div class="row mb-4 w-100">
    <div class="col-lg-9 col-md-7">
      <div class="d-flex flex-wrap">
        <slot />
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  inputPlaceholder: String,
  inputClass: String,
});
const emits = defineEmits(["update:modelValue"]);
</script>
