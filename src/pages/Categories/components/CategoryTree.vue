<script setup>
import { FormStore } from "@/components/BaseForm";

const porps = defineProps({
  category: Object,
  dash: {
    type: Number,
    default: 1,
  },
  selected: Boolean,
});
</script>

<template>
  <option :value="category.id" :selected="selected">
    <template v-for="d in dash">
      {{ "-" }}
    </template>

    <span>{{ category.name }}</span>
  </option>
  <CategoryTree
    v-if="category.children"
    :dash="dash + 1"
    v-for="category in category.children"
    :category="category"
    :selected="
      FormStore.fields.parent_id == category.id ||
      FormStore.fields.category_id == category.id
    "
  />
</template>

<style scoped>
.catgory-item {
  padding-left: 10px !important;
}
</style>
