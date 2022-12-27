<template>
  <button
    class="btn btn-gray-800 d-flex"
    :class="class"
    type="submit"
    :disabled="FormStore.onProgress ?? props.onProgress"
  >
    <span>{{ title }}</span>
    <div
      class="spinner-border spinner-border-sm opacity-0"
      role="status"
      :class="{
        'opacity-100 onProgress': FormStore.onProgress ?? props.onProgress,
      }"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
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
