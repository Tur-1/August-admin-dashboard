<template>
  <div class="form-group mb-3">
    <label v-if="label" :for="id" class="form-input-label">{{ label }}</label>
    <input
      class="form-control"
      :class="[{ 'is-invalid': error }, props.class]"
      :type="type ?? 'text'"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :aria-describedby="id"
      :step="step"
    />

    <div v-show="error" v-for="err in error" class="d-flex flex-column">
      <span class="text-danger mt-1 ms-2" style="font-size: 12px">
        {{ err }}
      </span>
    </div>
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
  "step",
]);
</script>
