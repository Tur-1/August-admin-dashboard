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
      v-for="role in usersStore.roles"
      :value="role.id"
      :selected="FormStore.fields.role_id == role.id"
    >
      {{ role.name }}
    </option>
  </FormSelect>
</template>

<script setup>
import { FormSelect, FormStore } from "@/components/BaseForm";
import useUsersStore from "@/pages/UsersPage/stores/UsersStore";
import useUsersService from "@/pages/UsersPage/services/useUsersService";

const { getRolePermissions } = useUsersService();
const usersStore = useUsersStore();
</script>
