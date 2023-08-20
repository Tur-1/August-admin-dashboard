<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Permissions
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body row">
          <div
            class="col-12 col-lg-6"
            v-for="(permission, key) in usersStore.rolePermissions"
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
                  v-model="FormStore.fields.permissions_id"
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
  </div>
</template>

<script setup>
import { FormStore } from "@/components/BaseForm";
import useUsersStore from "@/pages/UsersPage/stores/UsersStore";

const usersStore = useUsersStore();
</script>
