<template>
  <div class="table-settings mb-4">
    <div class="row justify-content-between align-items-center">
      <div class="col-9 col-lg-8 d-md-flex">
        <div class="input-group me-2 me-lg-3 fmxw-300">
          <span class="input-group-text">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search users"
            v-model="search"
          />
        </div>
      </div>
      <div class="col-3 col-lg-4 d-flex justify-content-end">
        <div class="btn-group">
          <div class="dropdown me-1">
            <button
              class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-1"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                class="icon icon-sm"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                ></path>
              </svg>
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu dropdown-menu-end pb-0">
              <span class="small ps-3 fw-bold text-dark">Show</span>
              <a
                @click="$emit('setPerPage', 5)"
                role="button"
                class="dropdown-item d-flex align-items-center fw-bold"
                :class="{ active: perPage.number == 5 }"
              >
                5
              </a>
              <a
                class="dropdown-item fw-bold"
                role="button"
                @click="$emit('setPerPage', 10)"
                :class="{ active: perPage.number == 10 }"
              >
                10
              </a>
              <a
                class="dropdown-item fw-bold rounded-bottom"
                role="button"
                @click="$emit('setPerPage', 20)"
                :class="{ active: perPage.number == 20 }"
              >
                20
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import perPage from "@/modules/Users/stores/perPage";
import users from "@/modules/Users/stores/users";
import { ref, watch } from "vue";

defineEmits(["setPerPage"]);

let search = ref("");
watch(search, (value) => {
  users.value.filtered = users.value.list.data.filter((user) => {
    return user.name.toLowerCase().includes(value.toLowerCase());
  });
});
</script>
