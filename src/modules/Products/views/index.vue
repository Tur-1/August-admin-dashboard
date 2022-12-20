<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
</script>
<template>
  <section class="main-section">
    <PageHeader title="products List">
      <ButtonLink title="New product" routeName="productsCreate" />
    </PageHeader>
    <div class="card card-body border-0 shadow mb-4"></div>
  </section>
</template>
