<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import ColorCardSkeleton from "@/pages/ColorsPage/components/ColorCardSkeleton.vue";
import ColorCard from "@/pages/ColorsPage/components/ColorCard.vue";
</script>
<template>
  <section class="main-section">
    <PageHeader title="Colors List">
      <ButtonLink title="New Color" routeName="colorsCreate" />
    </PageHeader>
    <div class="card card-body border-0 shadow mb-4">
      <div class="d-flex flex-wrap">
        <Suspense>
          <ColorCard />

          <template #fallback>
            <ColorCardSkeleton />
          </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>
