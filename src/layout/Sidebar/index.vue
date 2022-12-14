<template>
  <aside class="sidenav">
    <div class="d-flex flex-column flex-shrink-0 p-3 w-100">
      <a href="/src/index.html" class="d-flex align-items-center text-white">
        <span class="sidebar-icon">
          <img
            src="/src/assets/img/brand/light.svg"
            height="20"
            width="20"
            alt="Volt Logo" /></span
        ><span class="mt-1 ms-1 sidebar-text">AUGUST </span>
      </a>
      <hr />

      <ul class="sidenav-items">
        <SidebarLink
          toRoute="dashboard"
          title="Dashboard"
          :activeRouteNames="['dashboard']"
        >
          <template #icon>
            <i class="fa-solid fa-house"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          toRoute="users"
          title="Users"
          :activeRouteNames="['usersCreate', 'usersEdit', 'users']"
        >
          <template #icon>
            <i class="fa-solid fa-users"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          toRoute="categories"
          title="Categories"
          :activeRouteNames="[
            'categoriesCreate',
            'categoriesEdit',
            'categories',
          ]"
        >
          <template #icon>
            <i class="fa-solid fa-table-list"></i>
          </template>
        </SidebarLink>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from "vue-router";
import SidebarLink from "./SidebarLink.vue";

const route = useRoute();
</script>
