<script setup>
import { onMounted } from "vue";

import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import BannerCard from "@/pages/BannersPage/components/BannerCard.vue";
import useBannersService from "@/pages/BannersPage/services/useBannersService";

const { getAllBanners } = useBannersService();

onMounted(getAllBanners);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Banners List">
      <ButtonLink title="New Banner" routeName="bannersCreate" />
    </PageHeader>
    <div class="card card-body border-0 shadow mb-4">
      <BannerCard />
    </div>
  </section>
</template>
