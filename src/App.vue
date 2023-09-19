<script setup>
import { RouterView, useRoute } from "vue-router";
import Toast from "@/components/Toast/index.vue";
import Sidebar from "@/layout/Sidebar/index.vue";
import Footer from "@/layout/Footer/index.vue";
import Navbar from "@/layout/Navbar/index.vue";
import MobileNavbar from "@/layout/MobileNavbar/index.vue";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const route = useRoute();
</script>
<template>
  <MobileNavbar />
  <Sidebar />
  <Teleport to="#app">
    <Navbar />
    <RouterView :key="route.path" />

    <Footer />
  </Teleport>
  <Toast />
  <LoadingSpinner />
</template>
