<template>
  <RouterLink
    :to="{ name: routeName, params: params }"
    :class="class"
    class="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
  >
    <i :class="icon ?? 'fa-solid fa-plus'" />
    <span class="ms-2">{{ title }}</span>
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  class: String,
  icon: String,
  routeName: {
    type: String,
    require: true,
  },
  params: Object,
  title: {
    type: String,
    require: true,
  },
});
</script>
