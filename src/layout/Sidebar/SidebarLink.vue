<template>
  <li class="nav-item " :class="{ active: props.activeRouteNames.includes(route.name) }">
    <RouterLink :to="{ name: props.toRoute }" class="nav-link ">
      <span class="sidebar-icon">
        <slot name="icon" />
      </span>
      <span class="sidebar-text">{{ props.title }}</span>
    </RouterLink>
  </li>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  toRoute: {
    type: String,
    require: true,
  },
  activeRouteNames: {
    type: Array,
    require: false,
  },
});
</script>
