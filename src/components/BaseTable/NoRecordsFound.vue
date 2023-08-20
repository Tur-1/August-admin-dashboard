<template>
  <tr v-show="show">
    <td :colspan="columns.length" class="text-center">
      <h5>{{ noRecordsFoundTitle ?? "No Records Found" }}</h5>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  columns: Array,
  noRecordsFoundTitle: String,
});
</script>
