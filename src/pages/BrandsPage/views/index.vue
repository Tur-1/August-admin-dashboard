<script setup>
import { onMounted } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import BrandCard from "@/pages/BrandsPage/components/BrandCard.vue";
import useBrandsService from "@/pages/BrandsPage/services/useBrandsService";

const { getAllBrands } = useBrandsService();

onMounted(getAllBrands);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Brands List">
      <ButtonLink title="New Brand" routeName="brandsCreate" />
    </PageHeader>
    <div class="card card-body border-0 shadow mb-4">
      <div class="d-flex flex-wrap">
        <BrandCard />
      </div>
    </div>
  </section>
</template>
