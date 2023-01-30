<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import ColorCardSkeleton from "@/modules/Colors/components/ColorCardSkeleton.vue";
import ColorCard from "@/modules/Colors/components/ColorCard.vue";
import useUserStore from "@/Auth/store/userStore";
const AuthUser = useUserStore();
</script>
<template>
  <section class="main-section">
    <PageHeader title="Colors List">
      <ButtonLink
        title="New Color"
        routeName="colorsCreate"
        v-if="AuthUser.userCanAccess('create-colors')"
      />
    </PageHeader>
    <div
      class="card card-body border-0 shadow mb-4"
      v-if="AuthUser.userCanAccess('access-colors')"
    >
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
