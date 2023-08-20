<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import OrdersStore from "@/pages/OrdersPage/stores/OrdersStore";
import useOrdersService from "@/pages/OrdersPage/services/useOrdersService";
import useUserStore from "@/Auth/store/userStore";
import { useConfirmModal, ConfirmModal } from "@/components/ConfirmModal";
import { ref } from "vue";

const { getAllOrders, deleteOrder } = useOrdersService();

await getAllOrders();

const AuthUser = useUserStore();

let order = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  order.value.id = id;
  order.value.index = index;
};
</script>

<template>
  <tr v-for="(order, index) in OrdersStore.filtered" :key="order.order.id">
    <td>
      <a href="#" class="text-primary fw-bold">{{ order.order.id }}</a>
    </td>

    <td>{{ order.order.user.name }}</td>
    <td>{{ order.order.date }}</td>
    <td>{{ order.order.total }}</td>
    <td>{{ order.order.status }}</td>

    <td>
      <DropdownMenu>
        <RouterLink
          v-if="AuthUser.userCanAccess('view-orders')"
          class="dropdown-item d-flex align-items-center"
          :to="{ name: 'ordersEdit', params: { id: order.order.id } }"
        >
          <i class="fa-solid fa-pen-to-square"></i>
          Edit
        </RouterLink>

        <a
          v-if="AuthUser.userCanAccess('delete-orders')"
          @click="openModal({ id: order.order.id, index: index })"
          role="button"
          class="dropdown-item d-flex align-items-center text-danger"
        >
          <i class="fa-solid fa-trash-can"></i>
          Delete
        </a>
      </DropdownMenu>
    </td>
  </tr>

  <ConfirmModal
    @onConfirm="deleteOrder(order)"
    @onClose="useConfirmModal.close()"
  />
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
