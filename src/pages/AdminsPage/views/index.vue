<script setup>
import { onMounted } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import { BaseTable } from "@/components/BaseTable";
import useAdminsService from "@/pages/AdminsPage/services/useAdminsService";
import useAdminsStore from "@/pages/AdminsPage/stores/AdminsStore";
import useAuthStore from "@/Auth/store/AuthStore";

const AdminsStore = useAdminsStore();
const authStore = useAuthStore();

const { getAllAdmins, openConfirmModal, deleteAdmin } = useAdminsService();
onMounted(getAllAdmins);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Admins List">
      <ButtonLink
        title="New Admin"
        routeName="adminsCreate"
        v-if="authStore.userCan('view-admins')"
      />
    </PageHeader>

    <BaseTable
      :columns="AdminsStore.tableColumns"
      :data="AdminsStore.admins"
      :pagination_links="AdminsStore.paginationLinks"
      @onDelete="(admin) => openConfirmModal(admin)"
      @onDeleteConfirm="deleteAdmin"
      @onPageChange="async (url) => await getAllAdmins({ url: url })"
    />
  </section>
</template>
