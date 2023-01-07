<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useBannersService from "@/modules/AugustBanners/services/useBannersService";
import BannerCard from "@/modules/AugustBanners/components/BannerCard.vue";
import BannerCardSkeleton from "@/modules/AugustBanners/components/BannerCardSkeleton.vue";
import { onMounted, onBeforeMount } from "vue";
import AuthUser from "@/Auth/store/AuthUser";
import useRouterService from "@/router/useRouterService";

const { getAllBanners } = useBannersService();

onMounted(getAllBanners);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Banners List">
      <ButtonLink
        title="New Banner"
        routeName="bannersCreate"
        v-if="AuthUser.userCanAccess('create-banners')"
      />
    </PageHeader>
    <div
      class="card card-body border-0 shadow mb-4"
      v-if="AuthUser.userCanAccess('access-banners')"
    >
      <Suspense>
        <BannerCard />

        <template #fallback>
          <BannerCardSkeleton />
        </template>
      </Suspense>
    </div>
  </section>
</template>
