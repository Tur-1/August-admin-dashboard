<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import OrdersStore from "@/modules/Orders/stores/OrdersStore";
import useOrdersService from "@/modules/Orders/services/useOrdersService";

const emits = defineEmits(["onDelete"]);

const { getAllOrders } = useOrdersService();

await getAllOrders();
</script>

<template>
  <transition-group name="list">
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
            class="dropdown-item d-flex align-items-center"
            :to="{ name: 'ordersEdit', params: { id: order.order.id } }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            @click="$emit('onDelete', { id: order.order.id, index: index })"
            role="button"
            class="dropdown-item d-flex align-items-center text-danger"
          >
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </a>
        </DropdownMenu>
      </td>
    </tr>
  </transition-group>
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
