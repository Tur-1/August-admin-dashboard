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
    <tr v-for="(Order, index) in OrdersStore.filtered" :key="Order.id">
      <td>
        <div class="form-check dashboard-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="userCheck1"
          />
          <label class="form-check-label" for="userCheck1"></label>
        </div>
      </td>
      <td>
        <span class="fw-bold">{{ Order.code }}</span>
      </td>
      <td>
        <span class="fw-bold"
          >{{ Order.amount }} {{ Order.type !== "Fixed" ? "%" : "" }}</span
        >
      </td>
      <td>
        <span class="fw-bold">{{ Order.starts_at }}</span>
      </td>
      <td>
        <span class="fw-bold">{{ Order.expires_at }}</span>
      </td>
      <td>
        <span
          class="badge rounded-pill fw-bold"
          :class="{
            'text-bg-danger': !Order.is_active,
            'text-bg-success': Order.is_active,
          }"
        >
          {{ Order.is_active ? "Active" : "Expired" }}
        </span>
      </td>

      <td>
        <DropdownMenu>
          <RouterLink
            class="dropdown-item d-flex align-items-center"
            :to="{ name: 'OrdersEdit', params: { id: Order.id } }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            @click="$emit('onDelete', { id: Order.id, index: index })"
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
