<template>
  <nav aria-label="breadcrumb" class="d-none d-md-inline-block mb-3">
    <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
      <li class="breadcrumb-item">
        <RouterLink :to="{ name: 'dashboard' }">
          <svg
            class="icon icon-xxs"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </RouterLink>
      </li>
      <li v-if="$slots.breadcrumbItem" class="breadcrumb-item">
        <slot name="breadcrumbItem" />
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        {{ title }}
      </li>
    </ol>
  </nav>

  <div
    class="d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap align-items-center mb-2 mt-2"
  >
    <div class="d-block">
      <h2 class="h4 sidebar-text">{{ title }}</h2>
    </div>

    <div class="btn-toolbar mb-2 mb-md-0">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

defineProps(["title"]);

const route = useRoute();
</script>
