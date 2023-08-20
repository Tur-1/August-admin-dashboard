<script setup>
import { onMounted } from "vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useOrdersService from "@/pages/OrdersPage/services/useOrdersService";
import useOrdersStore from "@/pages/OrdersPage/stores/OrdersStore";
import { BaseTable } from "@/components/BaseTable";

const { getAllOrders, deleteOrder, openConfirmModal } = useOrdersService();
const ordersStore = useOrdersStore();
onMounted(getAllOrders);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Orders List"> </PageHeader>
    <BaseTable
      :columns="ordersStore.tableColumns"
      :data="ordersStore.orders"
      :isLoading="ordersStore.isLoading"
      :pagination_links="ordersStore.paginationLinks"
      @onDelete="(order) => openConfirmModal(order)"
      @onDeleteConfirm="deleteOrder"
      @onPageChange="async (url) => await getAllOrders({ url: url })"
    />
  </section>
</template>
