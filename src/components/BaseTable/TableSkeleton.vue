<template>
  <tr v-for="i in 12">
    <td class="placeholder-wave" v-for="column in columns">
      <span class="placeholder col-8"></span>
    </td>
  </tr>
</template>

<script setup>
defineProps(["columns"]);
</script>
