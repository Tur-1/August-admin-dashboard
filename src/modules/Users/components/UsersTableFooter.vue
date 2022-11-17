<template>
  <div class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
    <Bootstrap5Pagination :data="data" @pagination-change-page="getUsers" />
    <div class="fw-normal small mt-4 mt-lg-0">
      Showing <b>5</b> out of <b>25</b> entries
    </div>
  </div>
</template>

<script setup>
import usersService from "@/modules/Users/services/useUsersService";

import { Bootstrap5Pagination } from "laravel-vue-pagination";

import useUsersService from "@/modules/Users/services/useUsersService";

const { getUsers } = useUsersService();

defineProps(["data"]);
</script>
