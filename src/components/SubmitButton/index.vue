<template>
  <button class="btn btn-gray-800" :class="class" type="submit" :disabled="FormStore.onProgress ?? props.onProgress">
    <span>{{ title }}</span>

  </button>
</template>

<script setup>
import { FormStore } from "@/components/BaseForm";

const props = defineProps({
  class: String,
  title: {
    type: String,
    require: true,
  },
  onProgress: Boolean,
});
</script>
