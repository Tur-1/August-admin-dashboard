<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import SizesStore from "@/modules/Sizes/stores/SizesStore";
import useSizesService from "@/modules/Sizes/services/useSizesService";
import useUserStore from "@/Auth/store/userStore";
const emits = defineEmits(["onDelete"]);

const { getAllSizes } = useSizesService();
const AuthUser = useUserStore();
await getAllSizes();
</script>

<template>
  <transition-group name="list">
    <tr v-for="(size, index) in SizesStore.filtered" :key="size.id">
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
        <span class="fw-bold">{{ size.name }}</span>
      </td>

      <td>
        <DropdownMenu>
          <RouterLink
            v-if="AuthUser.userCanAccess('view-size-options')"
            class="dropdown-item d-flex align-items-center"
            :to="{ name: 'sizesEdit', params: { id: size.id } }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            v-if="AuthUser.userCanAccess('delete-size-options')"
            @click="$emit('onDelete', { id: size.id, index: index })"
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
