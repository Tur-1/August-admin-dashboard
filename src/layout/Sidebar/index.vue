<script setup>
import useAuthStore from "@/Auth/store/AuthStore";
import SidebarLink from "./SidebarLink.vue";

const authStore = useAuthStore();
</script>

<template>
  <aside class="sidenav">
    <div class="d-flex flex-column flex-shrink-0 p-3 w-100">
      <RouterLink to="/" class="d-flex align-items-center text-white">
        <span class="mt-1 ms-1 sidebar-text">AUGUST </span>
      </RouterLink>

      <hr />

      <ul class="sidenav-items">
        <SidebarLink
          toRoute="dashboard"
          title="Dashboard"
          :activeRouteNames="['dashboard']"
        >
          <template #icon>
            <i class="fa-solid fa-house"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-admins')"
          toRoute="admins"
          title="Admins"
          :activeRouteNames="['adminsCreate', 'adminsEdit', 'admins']"
        >
          <template #icon>
            <i class="fa-solid fa-users"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-roles')"
          toRoute="roles"
          title="Roles"
          :activeRouteNames="['rolesCreate', 'rolesEdit', 'roles']"
        >
          <template #icon>
            <i class="fa-solid fa-users-rectangle"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-orders')"
          toRoute="orders"
          title="orders"
          :activeRouteNames="['ordersEdit', 'orders']"
        >
          <template #icon>
            <i class="fa-solid fa-boxes-stacked"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-customers')"
          toRoute="customers"
          title="Customers"
          :activeRouteNames="['customersCreate', 'customersEdit', 'customers']"
        >
          <template #icon>
            <i class="fa-solid fa-users"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-products')"
          toRoute="products"
          title="products"
          :activeRouteNames="['productsCreate', 'productsEdit', 'products']"
        >
          <template #icon>
            <i class="fa-solid fa-cart-plus"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-categories')"
          toRoute="categories"
          title="Categories"
          :activeRouteNames="[
            'categoriesCreate',
            'categoriesEdit',
            'categories',
          ]"
        >
          <template #icon>
            <i class="fa-solid fa-table-list"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-colors')"
          toRoute="colors"
          title="Colors"
          :activeRouteNames="['colorsCreate', 'colorsEdit', 'colors']"
        >
          <template #icon>
            <i class="fa-solid fa-palette"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-brands')"
          toRoute="brands"
          title="brands"
          :activeRouteNames="['brandsCreate', 'brandsEdit', 'brands']"
        >
          <template #icon>
            <i class="fa-regular fa-copyright"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-reviews')"
          toRoute="reviews"
          title="reviews"
          :activeRouteNames="['reviewsCreate', 'reviewsEdit', 'reviews']"
        >
          <template #icon>
            <i class="fa-regular fa-comment-dots"></i>
          </template>
        </SidebarLink>

        <SidebarLink
          v-if="authStore.userCan('access-banners')"
          toRoute="banners"
          title="banners"
          :activeRouteNames="['bannersCreate', 'bannersEdit', 'banners']"
        >
          <template #icon>
            <i class="fa-regular fa-image"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-coupons')"
          toRoute="coupons"
          title="coupons"
          :activeRouteNames="['couponsCreate', 'couponsEdit', 'coupons']"
        >
          <template #icon>
            <i class="fa-solid fa-tags"></i>
          </template>
        </SidebarLink>
        <SidebarLink
          v-if="authStore.userCan('access-sizes')"
          toRoute="sizes"
          title="sizes"
          :activeRouteNames="['sizesCreate', 'sizesEdit', 'sizes']"
        >
          <template #icon>
            <i class="fa-solid fa-list-ul"></i>
          </template>
        </SidebarLink>
      </ul>
    </div>
  </aside>
</template>
