<template>
  <div class="row">
    <div class="col-12 col-lg-6">
      <FormSelect
        label="Roles *"
        v-model="FormStore.fields.role_id"
        @change="getRolePermissions(FormStore.fields.role_id)"
        :error="FormStore.errors.role_id?.[0]"
        id="roles"
        defaultOption="-- select role --"
      >
        <option
          v-for="role in UsersStore.roles"
          :value="role.id"
          :selected="FormStore.fields.role_id == role.id"
        >
          {{ role.name }}
        </option>
      </FormSelect>
    </div>
    <div class="row">
      <div
        class="col-12 col-lg-6"
        v-for="(permission, key) in UsersStore.rolePermissions"
      >
        <div class="role">
          <h6 class="permission-page-name">{{ key }}</h6>
          <div
            class="form-check permissions-checkbox"
            v-for="per in permission"
          >
            <input
              class="form-check-input"
              type="checkbox"
              v-model="FormStore.fields.permissionsIds"
              :value="per.id"
              :id="'permission-' + per.id"
            />
            <label class="form-check-label" :for="'permission-' + per.id">
              {{ per.name }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FormSelect, FormStore } from "@/components/BaseForm";
import UsersStore from "@/modules/Users/stores/UsersStore";
import useUsersService from "@/modules/Users/services/useUsersService";

const { getRolePermissions } = useUsersService();
</script>
