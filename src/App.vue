<script setup>
import { RouterView, useRoute } from "vue-router";
import Navbar from "@/layout/Navbar/index.vue";
import MobileNavbar from "@/layout/MobileNavbar/index.vue";
import Sidebar from "@/layout/Sidebar/index.vue";
import Footer from "@/layout/Footer/index.vue";
import Toast from "@/components/Toast/index.vue";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const route = useRoute();
</script>

<template>
  <MobileNavbar />
  <Sidebar />
  <main class="content">
    <Navbar />
    <RouterView :key="route.path" />
    <Footer />
    <Toast />
    <LoadingSpinner />
  </main>
</template>
