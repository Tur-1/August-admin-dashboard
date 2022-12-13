<template>
  <div class="form-group mb-3">
    <label :for="id">{{ label }}</label>
    <input
      class="form-control"
      :class="[{ 'is-invalid': error }, props.class]"
      :type="type ?? 'text'"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :aria-describedby="id"
    />

    <span class="text-danger mt-1 ms-2" style="font-size: 12px" v-show="error">
      {{ error }}
    </span>
  </div>
</template>
<script setup>
const props = defineProps([
  "id",
  "type",
  "placeholder",
  "label",
  "error",
  "class",
  "modelValue",
]);
</script>
