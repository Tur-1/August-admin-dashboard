<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useRolesService from "@/pages/RolesPage/services/useRolesService";
import useRolesStore from "@/pages/RolesPage/stores/RolesStore";
import { BaseTable } from "@/components/BaseTable";
import { onMounted } from "vue";

const { deleteRole, getRoles, openConfirmModal } = useRolesService();
const roleStore = useRolesStore();
onMounted(getRoles);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Roles List">
      <ButtonLink title="New Role" routeName="rolesCreate" />
    </PageHeader>

    <BaseTable
      :columns="roleStore.tableColumns"
      :data="roleStore.roles"
      :isLoading="roleStore.isLoading"
      :pagination_links="roleStore.paginationLinks"
      @onDelete="(role) => openConfirmModal(role)"
      @onDeleteConfirm="deleteRole"
      @onPageChange="async (url) => await getRoles({ url: url })"
    />
  </section>
</template>
