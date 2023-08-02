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
            :error="FormStore.errors.name"
          />
          <FormInput
            label="Email address *"
            v-model="FormStore.fields.email"
            id="email1"
            type="email"
            :error="FormStore.errors.email"
          />
          <FormInput
            label="Password *"
            v-model="FormStore.fields.password"
            id="Password1"
            type="password"
            :error="FormStore.errors.password"
          />
          <FormInput
            label="phone *"
            v-model="FormStore.fields.phone_number"
            id="phone1"
            type="number"
            :error="FormStore.errors.phone_number"
          />
          <FormSelect
            label="Gender *"
            v-model="FormStore.fields.gender"
            :error="FormStore.errors.gender"
            id="gender"
            :options="['Male', 'Female']"
          />
        </div>
      </div>
      <Permissions />
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
import useUsersService from "@/pages/Users/services/useUsersService";
import { useRoute } from "vue-router";
import Permissions from "@/pages/Users/components/Permissions.vue";

const route = useRoute();
const { updateUser, showUser } = useUsersService();

onMounted(showUser);
</script>
