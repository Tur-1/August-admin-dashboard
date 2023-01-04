<script setup>
import { ref } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import OrderRow from "@/modules/Orders/components/OrderRow.vue";
import OrderRowSkeleton from "@/modules/Orders/components/OrderRowSkeleton.vue";
import useOrdersService from "@/modules/Orders/services/useOrdersService";
import OrdersStore from "@/modules/Orders/stores/OrdersStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable } from "@/components/MainTable";

const { deleteOrder, getAllOrders } = useOrdersService();

let fields = ["Code", "amount", "START DATE", "END DATE", "STATUS", "Action"];

let Order = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  Order.value.id = id;
  Order.value.index = index;
};
</script>
<template>
  <section class="main-section">
    <PageHeader title="Orders List"> </PageHeader>
  </section>
</template>
