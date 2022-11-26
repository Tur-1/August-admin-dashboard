<template>
  <section class="main-section">
    <FormCard
      @onSubmit="updateUser(route.params.id)"
      submitTitle="update"
      title="update user"
      :onProgress="userForm.onProgress"
    >
      <div class="row" v-if="!onProgress">
        <div class="col-12 col-lg-6">
          <FormInput
            label="name *"
            v-model="userForm.fields.name"
            id="name1"
            type="text"
            :error="userForm.errors.name?.[0]"
          />
          <FormInput
            label="Email address *"
            v-model="userForm.fields.email"
            id="email1"
            type="email"
            :error="userForm.errors.email?.[0]"
          />
          <FormInput
            label="Password *"
            v-model="userForm.fields.password"
            id="Password1"
            type="password"
            :error="userForm.errors.password?.[0]"
          />
          <FormInput
            label="phone *"
            v-model="userForm.fields.phone_number"
            id="phone1"
            type="number"
            :error="userForm.errors.phone_number?.[0]"
          />
          <FormSelect
            label="Gender *"
            v-model="userForm.fields.gender"
            :error="userForm.errors.gender?.[0]"
            id="gender"
            :options="['Male', 'Female']"
          />
        </div>
      </div>
      <div
        class="row justify-content-center align-content-center align-items-center"
        style="min-height: 500px"
        v-if="onProgress"
      >
        <div class="spinner-border opacity-100" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </FormCard>
  </section>
</template>

<script setup>
import FormInput from "@/components/FormInput/index.vue";
import FormSelect from "@/components/FormSelect/index.vue";
import FormCard from "@/components/FormCard/index.vue";

import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import useUsersApi from "@/modules/Users/api/useUsersApi";
import useUsersService from "@/modules/Users/services/useUsersService";

const { userForm, updateUser } = useUsersService();
const route = useRoute();
let onProgress = ref(false);
onMounted(async () => {
  onProgress.value = true;
  let user = await useUsersApi.getUser(route.params.id);

  userForm.value.fields = user.data.data;
  onProgress.value = false;
});
</script>
