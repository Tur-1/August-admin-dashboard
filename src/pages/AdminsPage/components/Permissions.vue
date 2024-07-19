<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="false" aria-controls="collapseOne">
          Permissions
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body row">

          <div class="form-control">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" @change="selectAllPermissions" value="all-permissions"
                id="all-permissions" v-model="allPermissionsChecked" />
              <label class="form-check-label" for="all-permissions">
                All Permissions
              </label>
            </div>
          </div>
          <div class="col-12 col-lg-6" v-for="(permission, key) in adminsStore.rolePermissions">
            <div class="role">
              <h6 class="permission-page-name">{{ key }}</h6>
              <div class="form-check permissions-checkbox" v-for="per in permission">
                <input class="form-check-input" type="checkbox" v-model="FormStore.fields.permissions_id"
                  :value="per.id" :id="'permission-' + per.id" />
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
import useAdminsStore from "@/pages/AdminsPage/stores/AdminsStore";
import { ref } from "vue";

const adminsStore = useAdminsStore();
let allPermissionsChecked = ref(false);
const selectAllPermissions = () =>
{
  if (allPermissionsChecked.value == true)
  {
    for (const key in adminsStore.rolePermissions)
    {
      adminsStore.rolePermissions[key].forEach((permission) =>
      {
        FormStore.fields.permissions_id.push(permission.id);
      });
    }

  }
}
</script>
