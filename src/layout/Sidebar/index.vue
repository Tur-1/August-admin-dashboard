<script setup>
import { useRouter } from "vue-router";
import SidebarLink from "./SidebarLink.vue"; 
import useAuthStore from "@/Auth/store/AuthStore";
const authStore = useAuthStore();

let sidebarMenu = document.getElementById('sidebarMenu');
useRouter().afterEach(() =>
{
  sidebarMenu.classList.remove('show')
})
</script>

<template>
  <Teleport to="#sidebarMenu">
    <div class="simplebar-wrapper">
      <div class="simplebar-height-auto-observer-wrapper">
        <div class="simplebar-height-auto-observer"></div>
      </div>
      <div class="simplebar-mask">
        <div class="simplebar-offset">
          <div class="simplebar-content-wrapper" style="overflow-y: scroll;">
            <div class="simplebar-content">
              <div class="sidebar-inner px-4 pt-3">


                <ul class="nav flex-column pt-3 pt-md-0">
                  <div class="d-flex  align-items-center justify-content-between">
                    <RouterLink to="/" class="d-flex align-items-center text-white">
                      <span class="mt-1 ms-1 sidebar-text">AUGUST </span>
                    </RouterLink>
                    <div class="d-md-none">
                      <div class="collapse-close d-md-none">
                        <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
                          aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation" class="">
                          <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>

                  </div>


                  <hr />
                  <SidebarLink toRoute="dashboard" title="Dashboard" :activeRouteNames="['dashboard']">
                    <template #icon>
                      <i class="fa-solid fa-house"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-admins')" toRoute="admins" title="Admins"
                    :activeRouteNames="['adminsCreate', 'adminsEdit', 'admins']">
                    <template #icon>
                      <i class="fa-solid fa-users"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-roles')" toRoute="roles" title="Roles"
                    :activeRouteNames="['rolesCreate', 'rolesEdit', 'roles']">
                    <template #icon>
                      <i class="fa-solid fa-users-rectangle"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-orders')" toRoute="orders" title="orders"
                    :activeRouteNames="['ordersEdit', 'orders']">
                    <template #icon>
                      <i class="fa-solid fa-boxes-stacked"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-customers')" toRoute="customers" title="Customers"
                    :activeRouteNames="['customersCreate', 'customersEdit', 'customers']">
                    <template #icon>
                      <i class="fa-solid fa-users"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-products')" toRoute="products" title="products"
                    :activeRouteNames="['productsCreate', 'productsEdit', 'products']">
                    <template #icon>
                      <i class="fa-solid fa-cart-plus"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-categories')" toRoute="categories" title="Categories"
                    :activeRouteNames="[
                      'categoriesCreate',
                      'categoriesEdit',
                      'categories',
                    ]">
                    <template #icon>
                      <i class="fa-solid fa-table-list"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-colors')" toRoute="colors" title="Colors"
                    :activeRouteNames="['colorsCreate', 'colorsEdit', 'colors']">
                    <template #icon>
                      <i class="fa-solid fa-palette"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-brands')" toRoute="brands" title="brands"
                    :activeRouteNames="['brandsCreate', 'brandsEdit', 'brands']">
                    <template #icon>
                      <i class="fa-regular fa-copyright"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-reviews')" toRoute="reviews" title="reviews"
                    :activeRouteNames="['reviewsCreate', 'reviewsEdit', 'reviews']">
                    <template #icon>
                      <i class="fa-regular fa-comment-dots"></i>
                    </template>
                  </SidebarLink>

                  <SidebarLink v-if="authStore.userCan('access-banners')" toRoute="banners" title="banners"
                    :activeRouteNames="['bannersCreate', 'bannersEdit', 'banners']">
                    <template #icon>
                      <i class="fa-regular fa-image"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-coupons')" toRoute="coupons" title="coupons"
                    :activeRouteNames="['couponsCreate', 'couponsEdit', 'coupons']">
                    <template #icon>
                      <i class="fa-solid fa-tags"></i>
                    </template>
                  </SidebarLink>
                  <SidebarLink v-if="authStore.userCan('access-sizes')" toRoute="sizes" title="sizes"
                    :activeRouteNames="['sizesCreate', 'sizesEdit', 'sizes']">
                    <template #icon>
                      <i class="fa-solid fa-list-ul"></i>
                    </template>
                  </SidebarLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Teleport>
</template>
