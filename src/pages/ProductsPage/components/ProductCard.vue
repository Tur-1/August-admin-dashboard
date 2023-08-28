<script setup>
import defultImage from "@/assets/img/defult-image.png";
import useProductsService from "@/pages/ProductsPage/services/useProductsService";
import ButtonLink from "@/components/ButtonLink/index.vue";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
import useProductsStore from "@/pages/ProductsPage/stores/ProductsStore";
import ProductCardSkeleton from "@/pages/ProductsPage/components/ProductCardSkeleton.vue";
import { skeletonLoading } from "@/helpers";

const { deleteProduct, publishProduct, openConfirmModal } =
  useProductsService();

const productsStore = useProductsStore();
</script>

<template>
  <transition-group name="list" v-if="!skeletonLoading.isLoading">
    <div
      class="product-list-card"
      v-for="(product, index) in productsStore.products"
      :key="product.id"
    >
      <button
        type="button"
        class="product-list-card-delete-btn"
        @click="openConfirmModal({ id: product.id, index: index })"
      >
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
      <div class="product-list-card-image">
        <img :src="product.main_image_url ?? defultImage" />
      </div>
      <div class="product-list-card-body">
        <div class="input-group mb-2">
          <span class="input-group-text product-list-card-input-group-text">
            <i class="fas fa-box" />
          </span>
          <input
            type="text"
            class="form-control"
            :value="product.name ?? ''"
            disabled
          />
        </div>

        <div class="input-group mb-2">
          <span class="input-group-text product-list-card-input-group-text"
            ><i class="fa-solid fa-coins"></i
          ></span>
          <input
            type="text"
            disabled
            :value="product.price ?? ''"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <span class="input-group-text transparent-border-left">SAR</span>
        </div>
        <div class="product-list-card-group">
          <span
            style="height: 32px"
            class="badge text-bg-danger rounded-0 w-100 d-flex justify-content-center align-items-center"
            v-if="product.stock == 0 && product.stock !== null"
          >
            OUT OF STOCK
          </span>
          <div
            class="card-group-first"
            v-if="product.stock > 0 || product.stock == null"
          >
            <span class="product-list-card-group-label"> stock </span>
            <span> {{ product.stock }} </span>
          </div>
        </div>

        <div class="m-2 d-flex align-items-center justify-content-between">
          <span class="pe-2" style="font-size: 12px">PUBLISHED</span>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              :value="product.status ?? ''"
              :checked="product.status ?? ''"
              role="switch"
              @change="publishProduct(product.id, $event.target.checked)"
              :id="`product-switch-${product.id}`"
            />
          </div>
        </div>
        <ButtonLink
          title="view details"
          routeName="productsEdit"
          :params="{ id: product.id }"
          class="w-100 rounded-0 justify-content-center"
          icon="fa-regular fa-eye"
        />
      </div>
    </div>
  </transition-group>

  <ProductCardSkeleton v-if="skeletonLoading.isLoading" />
  <ConfirmModal @onConfirm="deleteProduct" @onClose="useConfirmModal.close()" />
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
