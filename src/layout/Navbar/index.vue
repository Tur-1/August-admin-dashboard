<template>
  <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
    <div class="container-fluid px-0">
      <div class="d-flex justify-content-between w-100" id="navbarSupportedContent">
        <div>

        </div>


        <ul class="navbar-nav align-items-center">

          <li v-if="authStore.isAuthenticated" class="nav-item dropdown ms-lg-3"><a
              class="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <div class="media d-flex align-items-center"><img class="avatar rounded-circle" alt="Image placeholder"
                  :src="authStore.user?.gender == 'Male' ? maleAvatar : femaleAvatar">
                <div class="media-body ms-2 text-dark align-items-center d-none d-lg-block"><span
                    class="mb-0 font-small fw-bold text-gray-900">{{ authStore.user?.name }}</span></div>
              </div>
            </a>
            <div class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">


              <div role="separator" class="dropdown-divider my-1"></div><a role="button" @click="logout"
                class="dropdown-item d-flex align-items-center" href="#"><svg class="dropdown-icon text-danger me-2"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                  </path>
                </svg> Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import maleAvatar from "@/assets/img/avatars/avatar_male.png";
import femaleAvatar from "@/assets/img/avatars/avatar_female.png";
import useAuthService from "@/Auth/services/useAuthService";
import useAuthStore from "@/Auth/store/AuthStore";
const authStore = useAuthStore();
const { logout } = useAuthService();
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  #navbar-search-main {
    width: 75% !important;
  }
}
</style>
 
