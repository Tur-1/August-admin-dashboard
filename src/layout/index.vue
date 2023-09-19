<template>
  <MobileNavbar />
  <Sidebar />
  <Teleport to="#app">
    <Navbar />
    <RouterView :key="route.path" />

    <Footer />
  </Teleport>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import Sidebar from "@/layout/Sidebar/index.vue";
import Footer from "@/layout/Footer/index.vue";
import Navbar from "@/layout/Navbar/index.vue";
import MobileNavbar from "@/layout/MobileNavbar/index.vue";

const route = useRoute();
</script>
