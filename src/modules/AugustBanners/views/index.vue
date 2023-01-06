<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useBannersService from "@/modules/AugustBanners/services/useBannersService";
import BannerCard from "@/modules/AugustBanners/components/BannerCard.vue";
import BannerCardSkeleton from "@/modules/AugustBanners/components/BannerCardSkeleton.vue";
import { onMounted } from "vue";

const { getAllBanners } = useBannersService();
onMounted(getAllBanners);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Banners List">
      <ButtonLink title="New Banner" routeName="bannersCreate" />
    </PageHeader>
    <div class="card card-body border-0 shadow mb-4">
      <Suspense>
        <BannerCard />

        <template #fallback>
          <BannerCardSkeleton />
        </template>
      </Suspense>
    </div>
  </section>
</template>
