<template>
  <section class="main-section">
    <form @submit.prevent="storeNewUserService.storeNewUser">
      <div class="card border-0 shadow p-2 pb-4 mb-4">
        <div class="card-header mx-lg-4 p-0 py-3 py-lg-3 mb-4 mb-md-0 d-flex justify-content-between">
          <h3 class="h5 mb-0">Billing details</h3>

          <SubmitButton :title="route.name == 'update user' ? 'update' : 'create'"
            :onProgress="storeNewUserService.userForm.onProgress" />
        </div>
        <div class="card-body p-0 p-md-4">
          <div class="row" v-if="!onProgress">
            <div class="col-12 col-lg-6">
              <FormInput label="name *" v-model="storeNewUserService.userForm.fields.name" id="name1" type="text"
                :error="storeNewUserService.userForm.errors.name" />
              <FormInput label="Email address *" v-model="storeNewUserService.userForm.fields.email" id="email1"
                type="email" :error="storeNewUserService.userForm.errors.email" />
              <FormInput label="Password *" v-model="storeNewUserService.userForm.fields.password" id="Password1"
                type="password" :error="storeNewUserService.userForm.errors.password" />
              <FormInput label="phone *" v-model="storeNewUserService.userForm.fields.phone_number" id="phone1"
                type="number" :error="storeNewUserService.userForm.errors.phone_number" />
              <FormSelect label="Gender *" v-model="storeNewUserService.userForm.fields.gender" :class="{
                'is-invalid': storeNewUserService.userForm.errors.gender,
              }" :error="storeNewUserService.userForm.errors.gender" id="gender" :options="['Male', 'Female']" />
            </div>
            <div class="col-12 col-lg-6"></div>
          </div>
          <div class="row justify-content-center" v-if="onProgress">
            <div class="spinner-border  opacity-100" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <Permissions /> -->
    </form>
  </section>
</template>

<script setup>
import FormInput from "@/views/components/FormInput/index.vue";
import FormSelect from "@/views/components/FormSelect/index.vue";
import Permissions from "@/views/pages/Users/components/Permissions.vue";
import SubmitButton from "@/views/components/SubmitButton/index.vue";
import storeNewUserService from "@/views/pages/Users/services/storeNewUserService";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import useUsersApi from "@/views/pages/Users/api/useUsersApi";


const route = useRoute();
let onProgress = ref(false);

onMounted(async () =>
{
  if (route.name == 'update user')
  {
    onProgress.value = true;
    let user = await useUsersApi.getUser(route.params.id);

    storeNewUserService.userForm.fields = user.data.data;
    onProgress.value = false;
  }
});
</script>
