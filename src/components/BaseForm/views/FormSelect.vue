<template>
  <div class="mb-3">
    <label class="form-input-label" v-if="label" :for="id">{{ label }}</label>

    <select
      class="form-select"
      :class="[{ 'is-invalid': error }, props.class]"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
    >
      <option v-if="defaultOption" value="">{{ defaultOption }}</option>
      <slot v-if="!props.options" />
      <option
        v-if="props.options"
        v-for="(option, index) in props.options"
        :key="index"
        :selected="modelValue == option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    <div v-show="error" v-for="err in error" class="d-flex flex-column">
      <span class="text-danger mt-1 ms-2" style="font-size: 12px">
        {{ err }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "modelValue",
  "id",
  "class",
  "label",
  "error",
  "options",
  "defaultOption",
]);
</script>
