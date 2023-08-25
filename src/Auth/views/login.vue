<template>
  <section class="main-section">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div
          class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500"
        >
          <div class="text-center text-md-center mb-4 mt-md-0">
            <p class="mb-2">You can log in with :</p>
            <p class="mb-2">1. Email: <strong>admin@admin.com</strong></p>
            <p>Password <strong>123456</strong></p>
          </div>
          <form @submit.prevent="login" class="mt-4">
            <!-- Form -->
            <div class="form-group mb-4">
              <label for="email">Your Email</label>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">
                  <svg
                    class="icon icon-xs text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    ></path>
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    ></path>
                  </svg>
                </span>
                <input
                  v-model="FormStore.fields.email"
                  type="email"
                  class="form-control"
                  placeholder="example@company.com"
                  id="email"
                />
              </div>
              <span class="text-danger" v-for="err in FormStore.errors.email">
                {{ err }}
              </span>
            </div>
            <!-- End of Form -->
            <div class="form-group">
              <!-- Form -->
              <div class="form-group mb-4">
                <label for="password">Your Password</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon2"
                    ><svg
                      class="icon icon-xs text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <input
                    v-model="FormStore.fields.password"
                    type="password"
                    placeholder="Password"
                    class="form-control"
                    id="password"
                  />
                </div>
                <span
                  class="text-danger"
                  v-for="err in FormStore.errors.password"
                >
                  {{ err }}
                </span>
              </div>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-gray-800">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useAuthService from "@/Auth/services/useAuthService";
import { FormStore } from "@/components/BaseForm";

const { login } = useAuthService();
</script>
