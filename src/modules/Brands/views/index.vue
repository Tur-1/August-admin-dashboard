<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import BrandCardSkeleton from "@/modules/Brands/components/BrandCardSkeleton.vue";
import BrandCard from "@/modules/Brands/components/BrandCard.vue";
</script>
<template>
  <section class="main-section">
    <PageHeader title="Brands List">
      <ButtonLink title="New Brand" routeName="brandsCreate" />
    </PageHeader>
    <div class="card card-body border-0 shadow mb-4">
      <div class="d-flex flex-wrap">
        <Suspense>
          <BrandCard />

          <template #fallback>
            <BrandCardSkeleton />
          </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>
