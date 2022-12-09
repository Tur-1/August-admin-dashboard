<script setup>
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
    <div class="catgory-item">
      <i class="fas fa-share fa-flip-vertical me-1"></i>
      {{ category.name }}
    </div>
  </option>
  <CategoryTree
    v-if="category.children"
    :dash="dash + 1"
    v-for="category in category.children"
    :category="category"
  />
</template>

<style scoped>
.catgory-item {
  padding-left: 10px !important;
}
</style>
