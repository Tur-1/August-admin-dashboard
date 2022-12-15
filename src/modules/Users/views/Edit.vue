<template>
  <section class="main-section">
    <BaseForm
      @onSubmit="updateUser(route.params.id)"
      submitTitle="update"
      title="update user"
    >
      <div class="row">
        <div class="col-12 col-lg-6">
          <FormInput
            label="name *"
            v-model="FormStore.fields.name"
            id="name1"
            type="text"
            :error="FormStore.errors.name?.[0]"
          />
          <FormInput
            label="Email address *"
            v-model="FormStore.fields.email"
            id="email1"
            type="email"
            :error="FormStore.errors.email?.[0]"
          />
          <FormInput
            label="Password *"
            v-model="FormStore.fields.password"
            id="Password1"
            type="password"
            :error="FormStore.errors.password?.[0]"
          />
          <FormInput
            label="phone *"
            v-model="FormStore.fields.phone_number"
            id="phone1"
            type="number"
            :error="FormStore.errors.phone_number?.[0]"
          />
          <FormSelect
            label="Gender *"
            v-model="FormStore.fields.gender"
            :error="FormStore.errors.gender?.[0]"
            id="gender"
            :options="['Male', 'Female']"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>

<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormSelect,
} from "@/components/BaseForm";

import { onMounted } from "vue";
import useUsersService from "@/modules/Users/services/useUsersService";
import { useRoute } from "vue-router";
const route = useRoute();
const { updateUser, showUser } = useUsersService();

onMounted(showUser);
</script>
