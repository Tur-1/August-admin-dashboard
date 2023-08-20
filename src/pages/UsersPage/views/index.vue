<script setup>
import { onMounted } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useUsersService from "@/pages/UsersPage/services/useUsersService";
import { BaseTable } from "@/components/BaseTable";
import useUsersStore from "@/pages/UsersPage/stores/UsersStore";

const usersStore = useUsersStore();
const { getAllUsers, openConfirmModal, deleteUser } = useUsersService();
onMounted(getAllUsers);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Users List">
      <ButtonLink title="New User" routeName="usersCreate" />
    </PageHeader>

    <BaseTable
      :columns="usersStore.tableColumns"
      :data="usersStore.users"
      :isLoading="usersStore.isLoading"
      :pagination_links="usersStore.paginationLinks"
      @onDelete="(user) => openConfirmModal(user)"
      @onDeleteConfirm="deleteUser"
      @onPageChange="async (url) => await getAllUsers({ url: url })"
    />
  </section>
</template>
