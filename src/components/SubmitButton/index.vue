<template>
  <button
    class="btn btn-gray-800"
    :class="class"
    type="submit"
    :disabled="props.isLoading"
  >
    <span>{{ title }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  class: String,
  title: {
    type: String,
    require: true,
  },
  isLoading: Boolean,
});
</script>
