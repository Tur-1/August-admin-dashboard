<template>
  <Sidebar />
  <main class="main">
    <Header />
    <div class="container-fluid">
      <RouterView :key="route.path" />
    </div>

    <Toast />
    <LoadingSpinner />
  </main>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import Header from "@/layout/Header/index.vue";
import Sidebar from "@/layout/Sidebar/index.vue";
import Footer from "@/layout/Footer/index.vue";
import Toast from "@/components/Toast/index.vue";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import useRouterService from "@/router/useRouterService";

const route = useRoute();
</script>
