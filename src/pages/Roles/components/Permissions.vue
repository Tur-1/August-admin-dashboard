<template>
  <div class="card border-0 shadow p-2 pb-4 mb-4">
    <div class="card-header mx-lg-4 p-0 py-3 py-lg-3 mb-4 mb-md-0">
      <h3 class="h5 mb-0">permissions</h3>
    </div>
    <div class="card-body">
      <div class="row">
        <div
          class="col-12 col-lg-6"
          v-for="(permission, key) in RolesStore.permissions"
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
                v-model="FormStore.fields.permissions"
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
  </div>
</template>

<script setup>
import RolesStore from "@/pages/Roles/stores/RolesStore";
import { FormStore } from "@/components/BaseForm";
</script>
