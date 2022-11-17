<template>
  <RouterLink
    :to="{ name: routeName }"
    :class="class"
    class="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
  >
    <svg
      v-if="withPlusIcon"
      class="icon icon-xs me-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      ></path>
    </svg>
    {{ title }}
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  routeName: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  class: String,
  withPlusIcon: Boolean,
});
</script>
