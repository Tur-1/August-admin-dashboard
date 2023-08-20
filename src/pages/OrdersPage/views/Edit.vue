<template>
  <section class="main-section">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column align-items-center">
              <h4 class="card-title">
                Order #{{ OrderDetailsStore.order.id }}
              </h4>
              <div class="d-flex">
                <p
                  class="text-uppercase text-gray-500 mb-0 me-2"
                  style="font-size: 12px"
                >
                  Status:
                </p>
                <span class="badge text-bg-warning">
                  {{ OrderDetailsStore.order.status }}
                </span>
              </div>
            </div>
            <div class="d-flex flex-column text-end">
              <span class="text-uppercase">Date </span>
              <small>{{ OrderDetailsStore.order.date }}</small>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center pt-4 mb-3"
          >
            <div class="d-flex flex-column">
              <span class="text-uppercase"> Customer </span>
              <small>{{ OrderDetailsStore.order?.user?.name }}</small>
              <small>{{ OrderDetailsStore.order?.user?.email }}</small>
              <small>{{ OrderDetailsStore.order?.user?.phone_number }}</small>
            </div>

            <div class="d-flex flex-column" v-if="OrderDetailsStore.coupon">
              <span class="text-uppercase"> Coupon </span>
              <small>code: {{ OrderDetailsStore.coupon.code }}</small>
              <small>amount: {{ OrderDetailsStore.coupon.amount }}</small>
            </div>
            <div class="d-flex flex-column text-end">
              <span class="text-uppercase">shipping address :</span>
              <small style="font-size: 12px">{{
                OrderDetailsStore.address.city
              }}</small>
              <small style="font-size: 12px"
                >{{ OrderDetailsStore.address.address }} ,
                <small style="font-size: 12px">{{
                  OrderDetailsStore.address.street
                }}</small></small
              >

              <small style="font-size: 12px">{{
                OrderDetailsStore.address.phone_number
              }}</small>
            </div>
          </div>
          <div class="table-responsive mt-5 mb-4">
            <table class="table table-centered table-nowrap mb-0 rounded">
              <thead class="thead-light">
                <tr>
                  <th class="border-0 rounded-start">#</th>
                  <th class="border-0">name</th>
                  <th class="border-0">brand</th>
                  <th class="border-0">size</th>
                  <th class="border-0">price</th>
                  <th class="border-0">quantity</th>
                  <th class="border-0">total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in OrderDetailsStore.products">
                  <td>
                    <a href="#" class="d-flex align-items-center">
                      <img
                        :src="product.product_image ?? defultImage"
                        class="rounded me-3"
                        style="max-width: 70px"
                        alt="Avatar"
                      />
                    </a>
                  </td>
                  <td>
                    <span class="fw-normal">{{ product.product_name }}</span>
                  </td>
                  <td>
                    <span class="fw-normal">{{
                      product.product_attributes.brand
                    }}</span>
                  </td>
                  <td>
                    <span class="fw-normal">{{
                      product.product_attributes.size
                    }}</span>
                  </td>
                  <td>
                    <span class="fw-normal"
                      >{{ product.product_price }} SAR</span
                    >
                  </td>
                  <td>
                    <span class="fw-normal">{{
                      product.product_quantity
                    }}</span>
                  </td>
                  <td>
                    <span class="fw-normal">{{ product.total_price }} SAR</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card text-bg-light mb-3 mt-5 w-100">
            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <div
                class="d-flex flex-column text-uppercase"
                style="color: #4c4f52"
              >
                <h6>subTOTAL</h6>
                <strong
                  class="text-dark text-center"
                  style="font-size: 0.875rem"
                >
                  {{ OrderDetailsStore.order.sub_total }} SAR
                </strong>
              </div>
              <div
                class="d-flex flex-column text-uppercase"
                style="color: #4c4f52"
              >
                <h6>SHIPPING COST</h6>
                <strong
                  class="text-dark text-center"
                  style="font-size: 0.875rem"
                >
                  {{ OrderDetailsStore.order.shipping_fees }}
                </strong>
              </div>
              <div
                v-if="OrderDetailsStore.coupon"
                class="d-flex flex-column text-uppercase"
                style="color: #4c4f52"
              >
                <h6>DISCOUNT</h6>
                <strong
                  class="text-dark text-center"
                  style="font-size: 0.875rem"
                >
                  {{ OrderDetailsStore.coupon.discounted_amount }} SAR
                </strong>
              </div>

              <div
                class="d-flex flex-column text-uppercase"
                style="color: #4c4f52"
              >
                <h6>TOTAL AMOUNT</h6>
                <strong
                  class="text-dark text-center"
                  style="font-size: 0.875rem"
                >
                  {{ OrderDetailsStore.order.total }} SAR
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import useOrdersService from "@/pages/OrdersPage/services/useOrdersService";
import { useRoute } from "vue-router";
import OrderDetailsStore from "@/pages/OrdersPage/stores/OrderDetailsStore";

const route = useRoute();
const { showOrder } = useOrdersService();

onMounted(async () => {
  await showOrder(route.params.id);
});
</script>
