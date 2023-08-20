<template>
  <thead class="thead-light">
    <tr>
      <th class="border-bottom" v-for="column in columns" :key="column.id">
        {{ column.label }}
      </th>
    </tr>
  </thead>
</template>

<script setup>
defineProps(["columns"]);
</script>
