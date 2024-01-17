<template>
  <div class="py-6">
    <v-row>
      <v-col v-sm="12" v-md="8">
        <v-card class="py-5 px-4" style="max-height: 85vh; overflow-y: auto">
          <v-card-title class="mb-5"> Корзина </v-card-title>
          <v-card-text v-if="cartStore.formattedCart.length">
            <div v-for="item in cartStore.formattedCart" :key="item.id" class="mb-3 cart-item">
              <div class="d-flex align-center no-wrap">
                <img
                    class="mr-2"
                    style="width: 90px; height: 90px; object-fit: cover"
                    :src="item.image"
                />
                <h3 class="text-capitalize ml-3">
                  {{ item.title }}
                </h3>
              </div>
              <div class="d-flex justify-space-between align-center no-wrap mt-2">
                <div class="d-flex align-center bg-success rounded">
                  <span
                      class="icon d-flex align-center pa-2"
                      style="cursor: pointer;"
                      @click="cartStore.add(item.id)"
                  >
                    <v-icon> mdi-plus </v-icon>
                  </span>
                  <span class="number d-flex align-center pa-1">
                    {{ item.quantity }}
                  </span>
                  <span
                      style="cursor: pointer"
                      class="icon d-flex align-center pa-2"
                      @click="cartStore.remove(item.id)"
                  >
                    <v-icon> mdi-minus </v-icon>
                  </span>
                </div>
                <p class="ml-2">
                  {{ item.quantity }} X {{ item.price }} =
                  <strong>
                    {{ item.cost }}
                  </strong>
                </p>
                <v-btn variant="text" color="" @click="cartStore.removeProduct(item.id)" icon>
                  <v-icon> mdi-delete </v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-text>
          <v-card-text class="text-center" v-else>
            <v-btn class="mx-auto" @click="$router.push('/')" color="success">
              Your cart is empty. Fill it
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="cartStore.total" v-sm="12" v-md="4">
        <v-card class="py-5 px-4">
          <v-card-title class="mb-5"> Order Summary </v-card-title>
          <v-card-text>
            <div class="d-flex align-center justify-space-between mb-4">
              <p class="ma-0">Subtotal</p>
              <p class="text-success">${{ cartStore.total.toFixed(2) }}</p>
            </div>
            <v-divider></v-divider>
            <div class="py-3 d-flex align-center justify-space-between mb-4">
              <p class="ma-0">Order Total</p>
              <p class="text-success">${{ cartStore.total.toFixed(2) }}</p>
            </div>
            <v-btn color="success" block> Checkout </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { useCartStore } from '../stores/cart.js';
definePageMeta({
  layout: 'cart-layout'
})
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
  .cart-item {
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);
    padding: 0.3em;
    margin-bottom: 1em;
  }

  .quantity-button {
    height: 30px;
    //width: 60px;
  }
</style>