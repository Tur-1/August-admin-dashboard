<script setup>
import { RouterView, useRoute } from "vue-router";
import layout from "@/layout/index.vue";
import useRouterService from "@/router/useRouterService";

const route = useRoute();
</script>
<template>
  <layout v-if="useRouterService.isAuthenticated" />

  <template v-if="!useRouterService.isAuthenticated">
    <RouterView :key="route.path" />
  </template>

</template>
