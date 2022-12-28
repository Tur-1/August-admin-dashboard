<script setup>
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import PageHeader from "@/components/PageHeader/index.vue";
import ProductCard from "@/modules/Products/components/ProductCard.vue";
import ProductCardSkeleton from "@/modules/Products/components/ProductCardSkeleton.vue";
import useProductsService from "@/modules/Products/services/useProductsService";
import ProductsStore from "@/modules/Products/stores/ProductsStore";

const { storeNewProduct } = useProductsService();
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
        <Suspense>
          <ProductCard />

          <template #fallback>
            <ProductCardSkeleton />
          </template>
        </Suspense>
      </div>
      <div class="container">
        <div class="row">
          <div class="d-flex justify-content-center align-items-center">
            <div v-show="ProductsStore.filtered.length == 0">
              <h5 class="text-center">No Products Found</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
