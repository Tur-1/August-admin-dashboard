<template>
  <div class="LoadingSpinner" v-if="useLoadingSpinner.isOnProgress">
    <div class="spinner-box">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import useLoadingSpinner from "@/components/LoadingSpinner/useLoadingSpinner";
</script>
