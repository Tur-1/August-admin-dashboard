<template>
  <aside class="sidenav">
    <div class="d-flex flex-column flex-shrink-0 p-3 w-100">
      <RouterLink to="/" class="d-flex align-items-center text-white">
        <span class="sidebar-icon">
          <img src="/src/assets/img/brand/light.svg" height="20" width="20" alt="Volt Logo" /></span><span
          class="mt-1 ms-1 sidebar-text">AUGUST </span>
      </RouterLink>

      <hr />

      <ul class="sidenav-items">
        <SidebarLink v-if="AuthUser.userCanAccess('access-dashboard')" toRoute="dashboard" title="Dashboard"
          :activeRouteNames="['dashboard']">
          <template #icon>
            <i class="fa-solid fa-house"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-users')" toRoute="users" title="Users"
          :activeRouteNames="['usersCreate', 'usersEdit', 'users']">
          <template #icon>
            <i class="fa-solid fa-users"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-roles')" toRoute="roles" title="Roles"
          :activeRouteNames="['rolesCreate', 'rolesEdit', 'roles']">
          <template #icon>
            <i class="fa-solid fa-users-rectangle"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-orders')" toRoute="orders" title="orders"
          :activeRouteNames="['ordersEdit', 'orders']">
          <template #icon>
            <i class="fa-solid fa-boxes-stacked"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-products')" toRoute="products" title="products"
          :activeRouteNames="['productsCreate', 'productsEdit', 'products']">
          <template #icon>
            <i class="fa-solid fa-cart-plus"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-categories')" toRoute="categories" title="Categories"
          :activeRouteNames="[
            'categoriesCreate',
            'categoriesEdit',
            'categories',
          ]">
          <template #icon>
            <i class="fa-solid fa-table-list"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-colors')" toRoute="colors" title="Colors"
          :activeRouteNames="['colorsCreate', 'colorsEdit', 'colors']">
          <template #icon>
            <i class="fa-solid fa-palette"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-brands')" toRoute="brands" title="brands"
          :activeRouteNames="['brandsCreate', 'brandsEdit', 'brands']">
          <template #icon>
            <i class="fa-regular fa-copyright"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-reviews')" toRoute="reviews" title="reviews"
          :activeRouteNames="['reviewsCreate', 'reviewsEdit', 'reviews']">
          <template #icon>
            <i class="fa-regular fa-comment-dots"></i>
          </template>
        </SidebarLink>

        <SidebarLink v-if="AuthUser.userCanAccess('access-banners')" toRoute="banners" title="banners"
          :activeRouteNames="['bannersCreate', 'bannersEdit', 'banners']">
          <template #icon>
            <i class="fa-regular fa-image"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-coupons')" toRoute="coupons" title="coupons"
          :activeRouteNames="['couponsCreate', 'couponsEdit', 'coupons']">
          <template #icon>
            <i class="fa-solid fa-tags"></i>
          </template>
        </SidebarLink>
        <SidebarLink v-if="AuthUser.userCanAccess('access-size-options')" toRoute="sizes" title="sizes"
          :activeRouteNames="['sizesCreate', 'sizesEdit', 'sizes']">
          <template #icon>
            <i class="fa-solid fa-list-ul"></i>
          </template>
        </SidebarLink>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import AuthUser from "@/Auth/store/AuthUser";
import SidebarLink from "./SidebarLink.vue";
</script>
