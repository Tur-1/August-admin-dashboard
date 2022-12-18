<template>
  <section class="main-section">
    <BaseForm
      @onSubmit="updateRole(route.params.id)"
      submitTitle="update"
      title="update Role"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-6">
          <FormInput
            label="name *"
            v-model="FormStore.fields.name"
            id="name1"
            type="text"
            :error="FormStore.errors.name?.[0]"
          />
        </div>
        <Permissions />
      </div>
    </BaseForm>
  </section>
</template>

<script setup>
import { FormStore, BaseForm, FormInput } from "@/components/BaseForm";

import Permissions from "@/modules/Roles/components/Permissions.vue";
import { onMounted } from "vue";
import useRolesService from "@/modules/Roles/services/useRolesService";
import { useRoute } from "vue-router";

const route = useRoute();
const { updateRole, showRole, getAllPermissions } = useRolesService();

onMounted(async () => {
  await showRole();
  await getAllPermissions();
});
</script>
