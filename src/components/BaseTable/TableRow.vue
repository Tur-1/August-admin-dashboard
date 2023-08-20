<template>
  <tr v-for="(item, index) in data" :key="item.id">
    <td v-for="column in columns" :key="column.id">
      <span class="fw-normal" v-if="column.label !== 'Actions'">
        {{ item[column.field] }}
      </span>
      <DropdownMenu v-if="column.Actions">
        <RouterLink
          class="dropdown-item d-flex align-items-center"
          :to="{
            name: column.Actions.routeName,
            params: { id: item.id },
          }"
        >
          <i class="fa-solid fa-pen-to-square"></i>
          Edit
        </RouterLink>

        <a
          @click="$emit('onDelete', { id: item.id, index: index })"
          role="button"
          class="dropdown-item d-flex align-items-center text-danger"
        >
          <i class="fa-solid fa-trash-can"></i>
          Delete
        </a>
      </DropdownMenu>
    </td>
  </tr>
</template>

<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";

defineProps(["columns", "data"]);
defineEmits(["onDelete"]);
</script>
