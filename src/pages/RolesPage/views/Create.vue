<template>
  <section class="main-section">
    <BaseForm @onSubmit="storeNewRole" submitTitle="create" title="new role">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-6">
          <FormInput
            label="name *"
            v-model="FormStore.fields.name"
            id="name1"
            type="text"
            :error="FormStore.errors.name"
          />
        </div>
        <Permissions />
      </div>
    </BaseForm>
  </section>
</template>

<script setup>
import { FormStore, BaseForm, FormInput } from "@/components/BaseForm";
import useRolesService from "@/pages/RolesPage/services/useRolesService";
import Permissions from "@/pages/RolesPage/components/Permissions.vue";

import { onMounted } from "vue";

const { storeNewRole, getAllPermissions } = useRolesService();

onMounted(async () => {
  FormStore.setFields({
    name: "",
    permissions: [],
  });

  await getAllPermissions();
});
</script>
