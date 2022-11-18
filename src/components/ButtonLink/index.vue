<template>
  <RouterLink
    :to="{ name: routeName }"
    :class="class"
    class="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
  >
    <slot />
    <span class="ms-2">{{ title }}</span>
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
