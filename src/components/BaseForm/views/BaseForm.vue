<template>
  <form @submit.prevent="$emit('onSubmit')" enctype="multipart/form-data">
    <div class="card border-0 shadow p-2 pb-4 mb-4">
      <div class="card-header mx-lg-4 p-0 py-3 py-lg-3 mb-4 mb-md-0 d-flex justify-content-between">
        <h3 class="h5 mb-0">{{ title }}</h3>

        <SubmitButton :title="submitTitle" />
      </div>
      <div class="card-body p-0 p-md-4">
        <slot />
      </div>
    </div>
  </form>
</template>

<script setup>
import SubmitButton from "@/components/SubmitButton/index.vue";

defineProps(["title", "submitTitle"]);
defineEmits(["onSubmit"]);
</script>
