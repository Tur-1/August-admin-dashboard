<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import ColorCard from "@/pages/ColorsPage/components/ColorCard.vue";
import useColorsService from "@/pages/ColorsPage/services/useColorsService";
import { onMounted } from "vue";

const { getAllColors } = useColorsService();
onMounted(getAllColors);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Colors List">
      <ButtonLink title="New Color" routeName="colorsCreate" />
    </PageHeader>
    <div class="card card-body border-0 shadow mb-4">
      <div class="d-flex flex-wrap">
        <ColorCard />
      </div>
    </div>
  </section>
</template>
