<template>
  <section class="main-section">
    <FormCard
      @onSubmit="storeNewUser"
      submitTitle="create"
      title="new user"
      :onProgress="userForm.onProgress"
    >
      <div class="row">
        <div class="col-12 col-lg-6">
          <FormInput
            label="name *"
            v-model="userForm.fields.name"
            id="name1"
            type="text"
            :error="userForm.errors.name"
          />
          <FormInput
            label="Email address *"
            v-model="userForm.fields.email"
            id="email1"
            type="email"
            :error="userForm.errors.email"
          />
          <FormInput
            label="Password *"
            v-model="userForm.fields.password"
            id="Password1"
            type="password"
            :error="userForm.errors.password"
          />
          <FormInput
            label="phone *"
            v-model="userForm.fields.phone_number"
            id="phone1"
            type="number"
            :error="userForm.errors.phone_number"
          />
          <FormSelect
            label="Gender *"
            v-model="userForm.fields.gender"
            :error="userForm.errors.gender"
            id="gender"
            :options="['Male', 'Female']"
          />
        </div>
      </div>
    </FormCard>
  </section>
</template>

<script setup>
import FormInput from "@/components/FormInput/index.vue";
import FormSelect from "@/components/FormSelect/index.vue";
import FormCard from "@/components/FormCard/index.vue";
import useUsersService from "@/modules/Users/services/useUsersService";
import { onMounted } from "vue";

const { userForm, storeNewUser } = useUsersService();

onMounted(() => {
  userForm.clearFields();
});
</script>
