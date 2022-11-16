<script setup>
import { RouterView, useRoute } from "vue-router";
import Navbar from "@/views/components/Navbar/index.vue";
import MobileNavbar from "@/views/components/MobileNavbar/index.vue";
import Sidebar from "@/views/components/Sidebar/index.vue";
import Footer from "@/views/components/Footer/index.vue";
import Toast from "@/views/components/Toast/index.vue";

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
  </main>
</template>
