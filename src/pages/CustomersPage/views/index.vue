<script setup>
import { onMounted } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useCustomersService from "@/pages/CustomersPage/services/useCustomersService";
import { BaseTable } from "@/components/BaseTable";
import useCustomersStore from "@/pages/CustomersPage/stores/CustomersStore";

const CustomersStore = useCustomersStore();
const { getAllCustomers, openConfirmModal, deleteCustomer } =
  useCustomersService();
onMounted(getAllCustomers);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Customers List">
      <ButtonLink title="New Customer" routeName="customersCreate" />
    </PageHeader>

    <BaseTable
      :columns="CustomersStore.tableColumns"
      :data="CustomersStore.customers"
      :isLoading="CustomersStore.isLoading"
      :pagination_links="CustomersStore.paginationLinks"
      @onDelete="(customer) => openConfirmModal(customer)"
      @onDeleteConfirm="deleteCustomer"
      @onPageChange="async (url) => await getAllCustomers({ url: url })"
    />
  </section>
</template>
