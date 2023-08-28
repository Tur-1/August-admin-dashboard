<script setup>
import { onMounted } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useCouponsService from "@/pages/CouponsPage/services/useCouponsService";
import useCouponsStore from "@/pages/CouponsPage/stores/CouponsStore";
import { BaseTable } from "@/components/BaseTable";
const { deleteCoupon, getAllCoupons, openConfirmModal } = useCouponsService();

const couponStore = useCouponsStore();
onMounted(getAllCoupons);
</script>
<template>
  <section class="main-section">
    <PageHeader title="Coupons List">
      <ButtonLink title="New Coupon" routeName="couponsCreate" />
    </PageHeader>

    <BaseTable
      :columns="couponStore.tableColumns"
      :data="couponStore.coupons"
      :pagination_links="couponStore.paginationLinks"
      @onDelete="(coupon) => openConfirmModal(coupon)"
      @onDeleteConfirm="deleteCoupon"
      @onPageChange="async (url) => await getAllCoupons({ url: url })"
    />
  </section>
</template>
