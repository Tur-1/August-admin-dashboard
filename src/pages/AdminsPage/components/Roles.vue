<template>
  <FormSelect
    label="Roles *"
    v-model="FormStore.fields.role_id"
    @change="getRolePermissions(FormStore.fields.role_id)"
    :error="FormStore.errors.role_id"
    id="roles"
    defaultOption="-- select role --"
  >
    <option
      v-for="role in adminsStore.roles"
      :value="role.id"
      :selected="FormStore.fields.role_id == role.id"
    >
      {{ role.name }}
    </option>
  </FormSelect>
</template>

<script setup>
import { FormSelect, FormStore } from "@/components/BaseForm";
import useAdminsService from "@/pages/AdminsPage/services/useAdminsService";
import useAdminsStore from "@/pages/AdminsPage/stores/AdminsStore";

const { getRolePermissions } = useAdminsService();
const adminsStore = useAdminsStore();
</script>
