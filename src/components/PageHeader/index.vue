<template>
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-4"
  >
    <div class="d-block mb-4 mb-md-0">
      <h2 class="h4 sidebar-text">{{ title }}</h2>
    </div>
    <div class="btn-toolbar mb-2 mb-md-0">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>
