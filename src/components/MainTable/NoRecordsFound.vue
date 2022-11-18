<template>
  <tr v-show="show">
    <td :colspan="colspan" class="text-center">
      <h5>{{ recordsTitle }}</h5>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  recordsTitle: String,
  colspan: Number,
});
</script>
