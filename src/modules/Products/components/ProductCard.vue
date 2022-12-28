<script setup>
import defultImage from "@/assets/img/defult-image.png";
import useProductsService from "@/modules/Products/services/useProductsService";
import ProductsStore from "@/modules/Products/stores/ProductsStore";
import ButtonLink from "@/components/ButtonLink/index.vue";
import { ref } from "vue";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";

const { getAllProducts, deleteProduct, publishProduct } = useProductsService();

await getAllProducts();

let product = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  product.value.id = id;
  product.value.index = index;
};
</script>

<template>
  <transition-group name="list">
    <div
      class="product-list-card"
      v-for="(product, index) in ProductsStore.filtered"
      :key="product.id"
    >
      <button
        type="button"
        class="product-list-card-delete-btn"
        @click="openModal({ id: product.id, index: index })"
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
          <div class="card-group-first">
            <span class="product-list-card-group-label"> stock </span>
            <span> {{ product.stock ?? "" }} </span>
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
              @change="publishProduct(product.id)"
              id="flexSwitchCheckChecked"
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

  <ConfirmModal
    @onConfirm="deleteProduct(product)"
    @onClose="useConfirmModal.close()"
  >
    <span>are you sure ?</span>
  </ConfirmModal>
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
