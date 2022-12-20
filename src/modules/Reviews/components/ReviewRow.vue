<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import CouponsStore from "@/modules/Coupons/stores/CouponsStore";
import useCouponsService from "@/modules/Coupons/services/useCouponsService";

const emits = defineEmits(["onDelete"]);

const { getAllCoupons } = useCouponsService();

await getAllCoupons();
</script>

<template>
  <transition-group name="list">
    <tr v-for="(coupon, index) in CouponsStore.filtered" :key="coupon.id">
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
        <span class="fw-bold">{{ coupon.code }}</span>
      </td>
      <td>
        <span class="fw-bold"
          >{{ coupon.amount }} {{ coupon.type !== "Fixed" ? "%" : "" }}</span
        >
      </td>
      <td>
        <span class="fw-bold">{{ coupon.starts_at }}</span>
      </td>
      <td>
        <span class="fw-bold">{{ coupon.expires_at }}</span>
      </td>
      <td>
        <span
          class="badge rounded-pill fw-bold"
          :class="{
            'text-bg-danger': !coupon.is_active,
            'text-bg-success': coupon.is_active,
          }"
        >
          {{ coupon.is_active ? "Active" : "Expired" }}
        </span>
      </td>

      <td>
        <DropdownMenu>
          <RouterLink
            class="dropdown-item d-flex align-items-center"
            :to="{ name: 'couponsEdit', params: { id: coupon.id } }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            @click="$emit('onDelete', { id: coupon.id, index: index })"
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
