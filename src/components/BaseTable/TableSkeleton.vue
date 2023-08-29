<template>
  <tr v-show="skeletonLoading.isLoading" v-for="i in 12">
    <td class="placeholder-wave" v-for="column in columns">
      <span class="placeholder col-8"></span>
    </td>
  </tr>
</template>

<script setup>
import { skeletonLoading } from '@/helpers';

defineProps(["columns"]);
</script>
