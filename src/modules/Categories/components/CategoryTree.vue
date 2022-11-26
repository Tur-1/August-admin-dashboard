<script setup>
// import CategoryTree from "@/modules/Categories/components/CategoryTree.vue";
const porps = defineProps({
  category: Object,
  dash: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <option :value="category.id">
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
