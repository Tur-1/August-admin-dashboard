<template>
  <div class="d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap align-items-center mb-2 mt-2">
    <div class="d-block">
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
