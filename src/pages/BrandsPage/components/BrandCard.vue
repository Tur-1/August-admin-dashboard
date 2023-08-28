<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import useBrandsStore from "@/pages/BrandsPage/stores/BrandsStore";
import useBrandsService from "@/pages/BrandsPage/services/useBrandsService";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
import { skeletonLoading } from "@/helpers";
import BrandCardSkeleton from "@/pages/BrandsPage/components/BrandCardSkeleton.vue";

const { deleteBrand, openConfirmModal } = useBrandsService();

const defultImage = "./src/assets/img/defult-image.png";
const BrandsStore = useBrandsStore();
</script>

<template>
  <transition-group name="list" v-if="!skeletonLoading.isLoading">
    <figure
      class="card border-1 m-3"
      style="width: 170px; min-height: 150px"
      v-for="(Brand, index) in BrandsStore.brands"
      :key="Brand.id"
    >
      <div
        style="min-height: 130px"
        class="card-header bg-white text-center p-0 overflow-hidden d-flex justify-content-center align-items-center h-100 w-100"
      >
        <img
          height="76"
          :src="Brand.image_url ?? defultImage"
          class="img-fluid"
          alt="Logo"
        />
      </div>

      <figcaption class="p-2 d-flex justify-content-between align-items-center">
        <div class="Brandname">
          <h6 class="card-title m-0">{{ Brand.name }}</h6>
          <small style="font-size: 12px"
            >{{ Brand.products_count }} products</small
          >
        </div>
        <DropdownMenu>
          <RouterLink
            class="dropdown-item d-flex align-items-center"
            :to="{
              name: 'brandsEdit',
              params: { id: Brand.id },
            }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            @click="openConfirmModal({ id: Brand.id, index: index })"
            role="button"
            class="dropdown-item d-flex align-items-center text-danger"
          >
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </a>
        </DropdownMenu>
      </figcaption>
    </figure>
  </transition-group>
  <BrandCardSkeleton v-if="skeletonLoading.isLoading" />
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center align-items-center">
        <div
          v-show="BrandsStore.brands.length == 0 && !skeletonLoading.isLoading"
        >
          <h5 class="text-center">No Brands Found</h5>
        </div>
      </div>
    </div>
  </div>
  <ConfirmModal @onConfirm="deleteBrand" @onClose="useConfirmModal.close()" />
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
