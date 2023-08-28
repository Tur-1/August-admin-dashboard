<script setup>
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import PageHeader from "@/components/PageHeader/index.vue";
import ProductCard from "@/pages/ProductsPage/components/ProductCard.vue";
import useProductsService from "@/pages/ProductsPage/services/useProductsService";
import { onMounted } from "vue";
import { skeletonLoading } from "@/helpers";
import useProductsStore from "@/pages/ProductsPage/stores/ProductsStore";

const productsStore = useProductsStore();
const { getAllProducts, storeNewProduct } = useProductsService();

onMounted(getAllProducts);
</script>
<template>
  <section class="main-section">
    <PageHeader title="products List">
      <button
        :disabled="useLoadingSpinner.isOnProgress"
        @click="storeNewProduct"
        class="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
      >
        <i class="fa-solid fa-plus" />
        <span class="ms-2">New product</span>
      </button>
    </PageHeader>
    <div class="card card-body border-0 shadow mb-4">
      <div class="product-list">
        <ProductCard />
      </div>
      <div class="container">
        <div class="row">
          <div class="d-flex justify-content-center align-items-center">
            <div
              v-show="
                productsStore.products.length == 0 && !skeletonLoading.isLoading
              "
            >
              <h5 class="text-center">No Products Found</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
