<template>
  <li
    class="sidenav-item mb-2"
    :class="{ active: props.activeRouteNames.includes(route.name) }"
  >
    <RouterLink :to="{ name: props.toRoute }" class="sidenav-link row">
      <span class="sidebar-icon col-1">
        <slot name="icon" />
      </span>

      <span class="sidebar-text col">{{ props.title }}</span>
    </RouterLink>
  </li>
</template>

<script setup>
import { ref } from "vue";
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
